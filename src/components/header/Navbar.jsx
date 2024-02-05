import React, { useState } from "react";

// dropdown-icon
import hamburger from "../../assets/images/icon-hamburger.svg";

// portal list
import DropdownLinks from "./DropdownLinks";

function Navbar() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-center relative">
      <img
        onClick={() => setNavIsOpen((prev) => !prev)}
        src={hamburger}
        alt="dropdown-icon"
      />
      <DropdownLinks isOpen={navIsOpen} />
    </nav>
  );
}

export default Navbar;
