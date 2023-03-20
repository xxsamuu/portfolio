import React, { useEffect, useState } from "react";
import Hero from "./navComponents/Hero";
import Projects from "./navComponents/Projects";
import Whoami from "./navComponents/Whoami";

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <Whoami />
      <Projects />
    </div>
  );
};

export default Homepage;
