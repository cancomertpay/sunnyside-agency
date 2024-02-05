import React from "react";

import { motion } from "framer-motion";
import { titleContainer, titleTextVariant2 } from "../../utils/motion";

function Title({ children }) {
  return (
    <motion.h3
      variants={titleContainer}
      initial="hidden"
      whileInView="show"
      className={`font-fraunces text-3xl`}
    >
      {Array.from(children).map((letter, index) => (
        <motion.span variants={titleTextVariant2} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h3>
  );
}

export default Title;
