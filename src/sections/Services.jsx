import React, { useContext } from "react";

// context
import { isMobileContext } from "../context/IsMobileContext";

// components
import Section from "../components/UI/Section";
import Card from "../components/UI/Card";

// framer motion
import { motion } from "framer-motion";
// variants
import { fadeIn, slideIn, textVariant } from "../utils/motion";

// egg img
import eggImg from "../assets/images/mobile/egg.webp";
import eggImgDesktop from "../assets/images/desktop/image-transform.jpg";

function Services() {
  const { isMobile } = useContext(isMobileContext);

  return (
    <Section>
      <div className="md:flex md:flex-row-reverse md:items-center md:justify-center">
        <Card
          image={isMobile ? eggImg : eggImgDesktop}
          title={"Tranform your brand"}
          text={`We are a full service creative agency specializing in helping brands
          grow fast. Engage your clients trough compelling visuals that do
          most of the marketing for you.`}
          color={"yellow"}
          isMobile={isMobile}
        />
      </div>
    </Section>
  );
}

export default Services;
