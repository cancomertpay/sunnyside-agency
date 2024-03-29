import React, { useContext } from "react";

// context
import { isMobileContext } from "../context/IsMobileContext";

// components
import Title from "./UI/Title";

// framer-motion
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";

// images
import bgPhotography from "../assets/images/mobile/image-photography.webp";
import bgPhotographyDesktop from "../assets/images/desktop/image-photography.jpg";

function Photography() {
  const { isMobile } = useContext(isMobileContext);

  return (
    <section className="relative md:w-1/2">
      <motion.img
        variants={slideIn("right", "spring", 0.3, 1)}
        initial={"hidden"}
        whileInView={"show"}
        src={isMobile ? bgPhotography : bgPhotographyDesktop}
        alt="sunnyside agency photograpy image"
        className="w-full"
      />
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 1)}
        initial="hidden"
        whileInView="show"
        className="absolute bottom-0 right-0 left-0 mx-6 flex flex-col items-center justify-center text-center md:px-0 lg:px-[16px]"
      >
        <Title fontSize={"text-3xl md:text-lg lg:text-4xl"} staggerChildren={0.1}>
          Photography
        </Title>
        <p className="text-neutral-veryDarkDesaturatedBlue font-barlow pt-8 md:text-sm md:pt-4 pb-12 md:pb-6 lg:pb-20 lg:text-lg lg:pt-8">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </motion.div>
    </section>
  );
}

export default Photography;
