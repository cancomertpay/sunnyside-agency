import React, { useContext } from "react";

// context
import { isMobileContext } from "../context/IsMobileContext";

// components
import Section from "../components/UI/Section";
import Card from "../components/UI/Card";

// pink-glass image
import pinkGlass from "../assets/images/mobile/pink-glass.webp";
import pinkGlassDesktop from "../assets/images/desktop/image-stand-out.jpg";

function Projects() {
  const { isMobile } = useContext(isMobileContext);
  return (
    <Section>
      <div className="md:flex md:items-center md:justify-center">
        <Card
          image={isMobile ? pinkGlass : pinkGlassDesktop}
          title={"Stand out to the right audience"}
          text={`Using a collaborative formula of designers, researchers,
            photographers,videographers, and copywriters, we'll build and extend
            your in digital places.`}
          color={"pink"}
          isMobile={isMobile}
        />
      </div>
    </Section>
  );
}

export default Projects;
