import React from "react";

// components
import Section from "../components/UI/Section";
import Title from "../components/UI/Title";

// framer-motion
import { motion } from "framer-motion";
// variants
import { fadeIn, textVariant } from "../utils/motion";

// pink-glass image
import pinkGlass from "../assets/images/mobile/pink-glass.png";

function Projects() {
  return (
    <Section>
      <div className="h-[300px] bg-primary-softRed box-border flex items-center justify-center pt-11">
        <motion.img
          variants={fadeIn("left", "spring", 0.5, 1)}
          initial="hidden"
          whileInView="show"
          className="w-auto h-[258px]"
          src={pinkGlass}
          alt="sunny agency pink glass image"
        />
      </div>
      <div className="h-1/2 box-border flex flex-col items-center justify-center py-16 px-6">
        <Title fontSize={"text-2xl"}>Stand out to the right audience</Title>
        <motion.p
          variants={textVariant(0.2)}
          initial={"hidden"}
          whileInView={"show"}
          className="text-center text-neutral-darkGrayishBlue my-5 font-barlow"
        >
          Using a collaborative formula of designers, researchers,
          photographers,videographers, and copywriters, we'll build and extend
          your in digital places.
        </motion.p>
        <motion.div
          variants={textVariant(0.3)}
          initial={"hidden"}
          whileInView={"show"}
          className="uppercase text-neutral-veryDarkDesaturatedBlue text-1xl font-fraunces flex flex-col items-center justify-center"
        >
          <div className="z-10">Learn More</div>
          <div className="bg-primary-softRed w-32 h-2 -mt-[0.6rem] rounded-3xl" />
        </motion.div>
      </div>
    </Section>
  );
}

export default Projects;
