import React from "react";
import Hero from "../layouts/home/Hero";
import Overview from "../layouts/home/Overview";
import KeyFeatures from "../layouts/home/FeatureCard";

const Home = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <KeyFeatures />
    </div>
  );
};

export default Home;
