import React from 'react'
import Section from "./UI/Section";
import Title from "./UI/Title";
import bgPhotography from "../assets/images/mobile/image-photography.webp"
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";

function Photography() {
  return (
    <Section background={"bg-primary-softBlue"}>
      <motion.img
          variants={slideIn("left", "spring", 0.3, 1)}
          initial={"hidden"}
          whileInView={"show"}
          src={bgPhotography}
          alt="sunnyside agency photograpy image"
        />
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 1)}
          initial="hidden"
          whileInView="show"
          className="absolute bottom-12 right-0 left-0 mx-6 flex flex-col items-center justify-center text-center"
        >
          <Title fontSize={"text-4xl"} staggerChildren={0.1}>Photography</Title>
          <p className="text-neutral-veryDarkDesaturatedBlue font-barlow pt-8">
            Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
          </p>
        </motion.div>
      </Section>
  )
}

export default Photography