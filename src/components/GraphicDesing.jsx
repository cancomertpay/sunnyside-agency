import React from "react";
import Section from "./UI/Section";
import Title from "./UI/Title";
import bgGraphicDesign from "../assets/images/mobile/image-graphic-design.jpg";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";

function GraphicDesing() {
  return (
    <Section background={"bg-primary-green"}>
      <motion.img
        variants={slideIn("right", "spring", 0.3, 1)}
        initial={"hidden"}
        whileInView={"show"}
        src={bgGraphicDesign}
        alt="sunnyside agency graphic design image"
      />
      <motion.div
        variants={fadeIn("left", "spring", 0.5, 1)}
        initial="hidden"
        whileInView="show"
        className="absolute bottom-12 right-0 left-0 mx-6 flex flex-col items-center justify-center text-center"
      >
        <Title fontSize={"text-4xl"} staggerChildren={0.05}>
          Graphic Design
        </Title>
        <p className="text-neutral-veryDarkDesaturatedBlue font-barlow pt-8">
          Greate design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients' attention.
        </p>
      </motion.div>
    </Section>
  );
}

export default GraphicDesing;
