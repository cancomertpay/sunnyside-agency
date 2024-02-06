import React, { useContext } from "react";

// contexe-t
import { isMobileContext } from "../context/IsMobileContext";

// components
import Title from "../components/UI/Title";

// mobile-images
import coneImg from "../assets/images/mobile/image-gallery-cone.webp";
import milkBottlesImg from "../assets/images/mobile/image-gallery-milkbottles.webp";
import orangeImg from "../assets/images/mobile/image-gallery-orange.webp";
import sugarCubesImg from "../assets/images/mobile/image-gallery-sugar-cubes.webp";

// desktop-images
import coneImgDesktop from "../assets/images/desktop/image-gallery-cone.jpg";
import milkBottlesImgDesktop from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import orangeImgDesktop from "../assets/images/desktop/image-gallery-orange.jpg";
import sugarCubesImgDesktop from "../assets/images/desktop/image-gallery-sugarcubes.jpg";

function PhotoGallery() {
  const { isMobile } = useContext(isMobileContext);

  return (
    <>
      {isMobile ? (
        <Title grid staggerChildren={0.3}>
          <img src={coneImg} alt="sunnyside agency image gallery photo" />
          <img
            src={milkBottlesImg}
            alt="sunnyside agency image gallery photo"
          />
          <img src={orangeImg} alt="sunnyside agency image gallery photo" />
          <img src={sugarCubesImg} alt="sunnyside agency image gallery photo" />
        </Title>
      ) : <Title flex staggerChildren={0.3}>
      <img src={coneImgDesktop} alt="sunnyside agency image gallery photo" />
      <img
        src={milkBottlesImgDesktop}
        alt="sunnyside agency image gallery photo"
      />
      <img src={orangeImgDesktop} alt="sunnyside agency image gallery photo" />
      <img src={sugarCubesImgDesktop} alt="sunnyside agency image gallery photo" />
    </Title>}
    </>
  );
}

export default PhotoGallery;
