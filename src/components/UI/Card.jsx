import React, { useState } from "react";
// framer-motion
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../../utils/motion";

function Card({ image, title, text, color, isMobile }) {
  const [isHovered, setIsHovered] = useState(null);
  return (
    <>
      <motion.div
        variants={slideIn(
          color === "pink" ? "left" : "right",
          "spring",
          0.5,
          1
        )}
        initial="hidden"
        whileInView="show"
        className={`md:w-1/2 md:h-1/2 h-[300px] box-border flex items-center justify-center pt-11 md:pt-0 ${
          isMobile &&
          (color === "pink" ? "bg-primary-softRed" : "bg-primary-yellow")
        }`}
      >
        <img
          className={`${
            color === "pink"
              ? "w-auto h-[258px] md:h-full md:w-full"
              : "pl-12 pt-2 md:pl-0 md:pt-0 w-[250px] md:h-full md:w-full"
          }`}
          src={image}
          alt={
            color === "pink"
              ? "sunnyside agency pink glass image"
              : "sunnyside agency egg image"
          }
        />
      </motion.div>
      <motion.div
        variants={slideIn(
          color === "pink" ? "right" : "left",
          "spring",
          0.5,
          1
        )}
        initial="hidden"
        whileInView="show"
        className={`md:w-1/2 h-1/2 flex flex-col items-center justify-center py-10 px-6 md:px-10 lg:px-32 text-center md:text-start md:justify-start`}
      >
        <motion.h2
          variants={textVariant(0.1)}
          initial={"hidden"}
          whileInView={"show"}
          className={`text-4xl font-fraunces text-neutral-veryDarkDesaturatedBlue w-full`}
        >
          {title}
        </motion.h2>
        <motion.p
          variants={textVariant(0.2)}
          initial={"hidden"}
          whileInView={"show"}
          className={`text-neutral-darkGrayishBlue my-5 font-barlow text-sm`}
        >
          {text}
        </motion.p>
        <motion.div
          variants={textVariant(0.3)}
          initial={"hidden"}
          whileInView={"show"}
          className="w-full"
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="flex flex-col items-center uppercase text-neutral-veryDarkDesaturatedBlue text-1xl font-fraunces md:w-fit cursor-pointer">
            <p className="z-10">Learn More</p>
            <span
              className={`${
                color === "pink" ? "bg-primary-softRed " : " bg-primary-yellow "
              } w-32 h-2 -mt-[0.6rem] rounded-3xl opacity-[0.5] ${isHovered && "opacity-[1]"} transition-opacity`}
            />
          </span>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Card;
