import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTopButton";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <BackToTop />
      <Footer />
    </>
  );
};

export default Dashboard;
