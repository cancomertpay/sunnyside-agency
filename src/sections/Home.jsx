import React from "react";

// components
import Header from "../components/header/Header";
import Section from "../components/UI/Section";

// framer-motion
import { motion } from "framer-motion";

// motion variants
import { fadeIn, slideIn, textVariant } from "../utils/motion";

// icon-arrow-down
import iconArrowDown from "../assets/images/icon-arrow-down.svg";

// orange image
import orangeImg from "../assets/images/mobile/orange.png";

function Home() {

  return (
    <Section background={"bg-primary-blue"}>
      <Header />
      <motion.h2
        variants={textVariant(0.5)}
        initial={"hidden"}
        whileInView={"show"}
        className="uppercase tracking-widest text-[11vw] mt-[3rem] font-fraunces text-center text-neutral-white"
      >
        We are creatives
      </motion.h2>
      <motion.div
        variants={fadeIn("down", "spring", 0.5, 1)}
        initial={"hidden"}
        whileInView={"show"}
        className="flex items-center justify-center w-full mt-[2.2rem] z-10"
      >
        <img src={iconArrowDown} alt="sunny agency arrow down icon" />
      </motion.div>
      <motion.div
        variants={slideIn("right", "spring", 0.5, 1)}
        initial={"hidden"}
        whileInView={"show"}
      >
        <img src={orangeImg} alt="sunny agency orange image" />
      </motion.div>
    </Section>
  );
}

export default Home;
