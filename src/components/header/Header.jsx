import React from "react";

// components
import Navbar from "./Navbar";

// framer-motion
import { motion } from "framer-motion";
import { headerVariants } from "../../utils/motion";

// brand-logo
import brandLogo from "../../assets/images/logo.svg";

function Header() {
  return (
    <motion.header
      variants={headerVariants}
      initial={"hidden"}
      whileInView={"show"}
      className="sm:px-16 px-6 py-8 bg-transparent flex items-center justify-between"
    >
      <img src={brandLogo} alt="sunnyside agency" />
      <Navbar />
    </motion.header>
  );
}

export default Header;
