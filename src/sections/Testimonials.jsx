import React, { useContext } from "react";

// context
import { isMobileContext } from "../context/IsMobileContext";

// components
import Title from "../components/UI/Title";
import TestimonialCard from "../components/UI/TestimonialCard";

// user datas
import testimonials from "../utils/clientTestimonials";

function Testimonials() {
  const { isMobile } = useContext(isMobileContext);
  return (
    <section className="flex flex-col items-center justify-center md:py-24">
      <div className="py-14">
        <Title
          fontSize={"text-lg"}
          color={"text-neutral-grayishBlue"}
          letterSpacing={"tracking-widest"}
          uppercase
        >
          Client Testimonials
        </Title>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row">
        {testimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            item={item}
            slide={
              isMobile
                ? index % 2 === 0
                  ? "left"
                  : "right"
                : index % 2 === 0
                ? "up"
                : "down"
            }
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
