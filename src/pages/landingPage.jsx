import React from "react";
import Backing from "../components/home/backing";
import Hero from "../components/home/hero";
import StepsToPlay from "../components/home/steps";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <StepsToPlay />
      <Backing />
    </>
  );
};

export default LandingPage;
