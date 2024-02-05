import React from "react";

import { motion } from "framer-motion";
import { titleContainer, titleTextVariant2 } from "../../utils/motion";

function Title({
  children,
  fontSize,
  staggerChildren,
  uppercase,
  color,
  letterSpacing,
  grid,
}) {
  return (
    <motion.h3
      variants={titleContainer(staggerChildren)}
      initial="hidden"
      whileInView="show"
      className={`font-fraunces ${letterSpacing && letterSpacing} ${
        color ? color : "text-neutral-veryDarkDesaturatedBlue"
      } ${fontSize ? fontSize : "text-3xl"} ${
        uppercase && "uppercase"
      } text-center ${grid && "grid grid-cols-2"}`}
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
