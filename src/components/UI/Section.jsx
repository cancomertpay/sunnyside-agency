import React from "react";

function Section({ children, background }) {
  return (
    <section className={`relative ${background ? background : ""}`}>
      {children}
    </section>
  );
}

export default Section;
