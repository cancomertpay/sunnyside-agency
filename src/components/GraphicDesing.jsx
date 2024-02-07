import React, { useContext } from "react";

// context
import { isMobileContext } from "../context/IsMobileContext";

// components
import Title from "./UI/Title";

// framer-motion
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";

// images
import bgGraphicDesign from "../assets/images/mobile/image-graphic-design.webp";
import bgGraphicDesignDesktop from "../assets/images/desktop/image-graphic-design.jpg";

function GraphicDesing() {
  const { isMobile } = useContext(isMobileContext);
  return (
    <section className="relative md:w-1/2">
      <motion.img
        variants={slideIn("left", "spring", 0.3, 1)}
        initial={"hidden"}
        whileInView={"show"}
        src={isMobile ? bgGraphicDesign : bgGraphicDesignDesktop}
        alt="sunnyside agency graphic design image"
        className="w-full relative"
      />
      <motion.div
        variants={fadeIn("left", "spring", 0.5, 1)}
        initial="hidden"
        whileInView="show"
        className="absolute bottom-0 right-0 left-0 mx-6 flex flex-col items-center justify-center text-center lg:px-[16px] md:px-0"
      >
        <Title fontSize={"text-3xl md:text-lg lg:text-4xl"} staggerChildren={0.05}>
          Graphic Design
        </Title>
        <p className="text-neutral-veryDarkDesaturatedBlue font-barlow pt-8 md:text-sm md:pt-4 pb-12 md:pb-6 lg:pb-20 lg:text-lg lg:pt-8">
          Greate design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients' attention.
        </p>
      </motion.div>
    </section>
  );
}

export default GraphicDesing;
