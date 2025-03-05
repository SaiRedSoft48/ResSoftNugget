import React from "react";

import Navbar from "../../components/common/Navbar";
import Hero from "../../components/hero/Hero";
import Features from "../features/Features";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
    </>
  );
};

export default Home;
