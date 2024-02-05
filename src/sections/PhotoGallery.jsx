import React from "react";

// images
import coneImg from "../assets/images/mobile/image-gallery-cone.jpg";
import milkBottlesImg from "../assets/images/mobile/image-gallery-milkbottles.jpg";
import orangeImg from "../assets/images/mobile/image-gallery-orange.jpg";
import sugarCubesImg from "../assets/images/mobile/image-gallery-sugar-cubes.jpg";

function PhotoGallery() {
  return (
    <div className="grid grid-cols-2">
      <img src={coneImg} alt="sunnyside agency image gallery photo" />
      <img src={milkBottlesImg} alt="sunnyside agency image gallery photo" />
      <img src={orangeImg} alt="sunnyside agency image gallery photo" />
      <img src={sugarCubesImg} alt="sunnyside agency image gallery photo" />
    </div>
  );
}

export default PhotoGallery;
