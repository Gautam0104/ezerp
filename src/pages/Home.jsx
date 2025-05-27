import React from "react";
import Hero from "../layouts/home/Hero";
import Overview from "../layouts/home/Overview";
import KeyFeatures from "../layouts/home/FeatureCard";
import FeaturePromo from "../layouts/home/FeaturePromo";

const Home = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <KeyFeatures />
      <FeaturePromo />
    </div>
  );
};

export default Home;
