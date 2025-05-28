import React from "react";
import Hero from "../layouts/home/Hero";
import Overview from "../layouts/home/Overview";
import KeyFeatures from "../layouts/home/FeatureCard";
import FeaturePromo from "../layouts/home/FeaturePromo";
import MobileDownload from "../layouts/home/MobilDownload";
import Resouces from "../layouts/home/Resouces";

const Home = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <KeyFeatures />
      <FeaturePromo />
      < MobileDownload />
      <Resouces />
    </div>
  );
};

export default Home;
