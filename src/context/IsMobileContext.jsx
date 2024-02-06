import { createContext, useEffect, useState } from "react";

export const isMobileContext = createContext({
  isMobile: null,
});

const IsMobileContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const value = {
    isMobile,
  };

  return (
    <isMobileContext.Provider value={value}>
      {children}
    </isMobileContext.Provider>
  );
};

export default IsMobileContextProvider;
