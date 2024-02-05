import React from "react";

// components
import Section from "../components/UI/Section";
import Title from "../components/UI/Title";
import TestimonialCard from "../components/UI/TestimonialCard";

// user datas
import testimonials from "../utils/clientTestimonials";

function Testimonials() {
  return (
    <Section>
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
      {testimonials.map((item, index) => (
        <TestimonialCard
          key={index}
          item={item}
          slide={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </Section>
  );
}

export default Testimonials;
