import React from "react";

function Section({ children, background }) {
  return (
    <section className={`relative h-[100vh] ${background ? background : ""} box-border`}>
      {children}
    </section>
  );
}

export default Section;
