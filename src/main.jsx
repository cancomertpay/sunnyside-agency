import React from "react";
import ReactDOM from "react-dom/client";
// root components
import App from "./App.jsx";
// global-css-document
import "./index.css";
// context-provider
import IsMobileContextProvider from "./context/IsMobileContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IsMobileContextProvider>
      <App />
    </IsMobileContextProvider>
  </React.StrictMode>
);
