import React from "react";

// components
import Section from "../components/UI/Section";

// framer motion
import { motion } from "framer-motion";
// variants
import { fadeIn, textVariant } from "../utils/motion";

// egg img
import eggImg from "../assets/images/mobile/egg.png";
import Title from "../components/UI/Title";

function Services() {
  return (
    <Section>
      <div className="h-1/2 bg-primary-yellow box-border flex items-center justify-center">
        <motion.img
          variants={fadeIn("right", "spring", 0.5, 1)}
          initial="hidden"
          whileInView="show"
          src={eggImg}
          alt="sunnyside agency egg image"
          width={220}
          height={220}
          className="ml-12"
        />
      </div>
      <div className="py-10 px-6 flex flex-col items-center justify-center">
        <Title>Tranform your brand</Title>
        <motion.p
          variants={textVariant(0.2)}
          initial={"hidden"}
          whileInView={"show"}
          className="text-center text-neutral-veryDarkGrayishBlue my-5"
        >
          We are a full service creative agency specializing in helping brands
          grow fast. Engage your clients trough compelling visuals that do most
          of the marketing for you.
        </motion.p>
        <motion.div
          variants={textVariant(0.3)}
          initial={"hidden"}
          whileInView={"show"}
          className="uppercase text-xl font-fraunces border-b-4 border-b-primary-yellow"
        >
          Learn More
        </motion.div>
      </div>
    </Section>
  );
}

export default Services;
