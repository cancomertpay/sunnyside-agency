import React from "react";
import ReactDOM from "react-dom";

import { motion } from "framer-motion";

function DropdownLinks({ isOpen }) {
  return (
    isOpen &&
    ReactDOM.createPortal(
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-20 left-0 right-0 mx-6 shadow-lg z-50"
      >
        <div
          className=" absolute top-0 right-0 w-0 h-0 
          border-l-[25px] border-l-transparent
          border-b-[25px] border-b-neutral-white border-r-transparent md:hidden"
        />
        <ul className="flex items-center justify-center flex-col bg-neutral-white space-y-5 py-10 mt-5 text-neutral-darkGrayishBlue text-xl font-barlow">
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li className="rounded-3xl text-sm bg-primary-yellow px-8 py-4 font-fraunces text-primary-darkBlue uppercase">Contact</li>
        </ul>
      </motion.div>,
      document.body
    )
  );
}

export default DropdownLinks;
