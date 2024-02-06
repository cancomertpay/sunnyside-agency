import React, { useContext } from "react";

// context
import { isMobileContext } from "../context/IsMobileContext";

// components
import Header from "../components/header/Header";
import Section from "../components/UI/Section";

// framer-motion
import { motion } from "framer-motion";

// motion variants
import { fadeIn, slideIn, textVariant } from "../utils/motion";

// icon-arrow-down
import iconArrowDown from "../assets/images/icon-arrow-down.svg";

// mobile-orange image
import orangeImg from "../assets/images/mobile/orange.webp";
// desktop-orange image
import orangeImgDesktop from "../assets/images/desktop/image-header.jpg";

function Home() {
  // context
  const { isMobile } = useContext(isMobileContext);

  return (
    <Section background={"bg-primary-blue"}>
      <div className="md:absolute md:top-0 md:z-10 w-full">
        <Header />
        <motion.h1
          variants={textVariant(0.5)}
          initial={"hidden"}
          whileInView={"show"}
          className="font-fraunces text-center tracking-widest uppercase text-[11vw] text-neutral-white mt-[2.3rem] z-30 md:text-[5vw] md:mb-24"
        >
          We are creatives
        </motion.h1>
        <motion.div
          variants={fadeIn("down", "spring", 0.5, 1)}
          initial={"hidden"}
          whileInView={"show"}
          className="flex items-center justify-center w-full mt-[2.2rem]"
        >
          <img src={iconArrowDown} alt="sunny agency arrow down icon" />
        </motion.div>
      </div>
      <motion.div
        className=""
        variants={slideIn("right", "spring", 0.5, 1)}
        initial={"hidden"}
        whileInView={"show"}
      >
        <img
          src={isMobile ? orangeImg : orangeImgDesktop}
          alt="sunnyside agency orange image"
        />
      </motion.div>
    </Section>
  );
}

export default Home;
