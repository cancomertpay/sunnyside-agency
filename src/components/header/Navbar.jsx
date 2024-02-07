import React, { useEffect, useState } from "react";

// dropdown-icon
import hamburger from "../../assets/images/icon-hamburger.svg";

// portal list
import DropdownLinks from "./DropdownLinks";

function Navbar() {
  // local states
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex items-center justify-center relative">
      {!isDesktop ? (
        <>
          <img
            onClick={() => setNavIsOpen((prev) => !prev)}
            src={hamburger}
            alt="dropdown-icon"
          />
          <DropdownLinks isOpen={!isDesktop && navIsOpen} />
        </>
      ) : (
        <div>
          <ul className="flex items-center gap-10 justify-center text-neutral-white text-xl font-barlow">
            <li className="hover:text-primary-softBlue cursor-pointer transition-all">
              About
            </li>
            <li className="hover:text-primary-softBlue cursor-pointer transition-all">
              Services
            </li>
            <li className="hover:text-primary-softBlue cursor-pointer transition-all">
              Projects
            </li>
            <li className="rounded-3xl text-sm bg-neutral-white px-8 py-4 font-fraunces text-primary-darkBlue uppercase cursor-pointer hover:bg-primary-softBlue hover:text-neutral-white transition-all">
              Contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
