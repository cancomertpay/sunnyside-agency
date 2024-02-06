import React, { useContext } from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

function TestimonialCard({ item, slide }) {
  return (
    <motion.div
      variants={fadeIn(slide, "spring", 0.4, 1.3)}
      initial="hidden"
      whileInView={"show"}
      className="flex flex-col items-center justify-center px-10 mb-16"
    >
      <img
        className="rounded-full"
        src={item.userImg}
        alt="sunnyside agency's client photo"
        width={66}
      />
      <p className="text-center font-barlow text-neutral-veryDarkGrayishBlue my-8">
        {item.comment}
      </p>
      <div className="text-center">
        <p className="text-neutral-veryDarkDesaturatedBlue font-bold font-fraunces mb-2">
          {item.username}
        </p>
        <p className="text-neutral-grayishBlue text-sm font-barlow">
          {item.userTitle}
        </p>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
