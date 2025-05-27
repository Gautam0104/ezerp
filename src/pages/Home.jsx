import React from "react";
import Hero from "../layouts/home/Hero";
import Overview from "../layouts/home/Overview";
import KeyFeatures from "../layouts/home/FeatureCard";
import MobileDownload from "../layouts/home/MobilDownload";

const Home = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <KeyFeatures />
      < MobileDownload />
    </div>
  );
};

export default Home;
