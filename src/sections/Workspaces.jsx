import React from "react";

// components
import GraphicDesing from "../components/GraphicDesing";
import Photography from "../components/Photography";

function Workspaces() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <GraphicDesing />
      <Photography />
    </div>
  );
}

export default Workspaces;
