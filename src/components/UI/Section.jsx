import React from "react";

function Section({ children, background }) {
  return (
    <section className={`relative ${background ? background : ""} box-border`}>
      {children}
    </section>
  );
}

export default Section;
