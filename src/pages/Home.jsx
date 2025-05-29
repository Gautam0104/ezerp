import React from "react";
import Hero from "../layouts/home/Hero";
import Overview from "../layouts/home/Overview";
import KeyFeatures from "../layouts/home/FeatureCard";
import FeaturePromo from "../layouts/home/FeaturePromo";
import MobileDownload from "../layouts/home/MobilDownload";
import PlansPricing from "../layouts/home/PlansPricing";
// import AppDownload from "../layouts/home/AppDownload";
import NextStep from "../layouts/home/NextStep";
import Details from "../layouts/home/Details";
import Follow from "../layouts/home/Follow";
import Resouces from "../layouts/home/Resouces";
import Faq from "../layouts/home/Faq";

const Home = () => {
  return (
    <div>
      <Hero />
      <Overview id="overview" />
      <KeyFeatures id="keyFeature" />
      <FeaturePromo id="whatsNew" />
      {/* <AppDownload /> */}
      <PlansPricing id="plans" />

      <MobileDownload />

      <Resouces />
      <Faq />
      <NextStep />
      <Details />
      <Follow />
    </div>
  );
};

export default Home;
