import React from "react";
import Hero from "../layouts/home/Hero";
import Overview from "../layouts/home/Overview";
import KeyFeatures from "../layouts/home/FeatureCard";
import FeaturePromo from "../layouts/home/FeaturePromo";
import MobileDownload from "../layouts/home/MobilDownload";
import Resouces from "../layouts/home/Resouces";
import Faq from "../layouts/home/Faq";  

const Home = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <KeyFeatures />
      <FeaturePromo />
      < MobileDownload />
      <Resouces />
      <Faq />
    </div>
  );
};

export default Home;
