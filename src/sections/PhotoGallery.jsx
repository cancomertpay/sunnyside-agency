import React from "react";

// images
import coneImg from "../assets/images/mobile/image-gallery-cone.webp";
import milkBottlesImg from "../assets/images/mobile/image-gallery-milkbottles.webp";
import orangeImg from "../assets/images/mobile/image-gallery-orange.webp";
import sugarCubesImg from "../assets/images/mobile/image-gallery-sugar-cubes.webp";
import Title from "../components/UI/Title";

function PhotoGallery() {
  return (
    <Title grid staggerChildren={0.3}>
      <img src={coneImg} alt="sunnyside agency image gallery photo" />
      <img src={milkBottlesImg} alt="sunnyside agency image gallery photo" />
      <img src={orangeImg} alt="sunnyside agency image gallery photo" />
      <img src={sugarCubesImg} alt="sunnyside agency image gallery photo" />
    </Title>
  );
}

export default PhotoGallery;
