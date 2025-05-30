import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/wms/Sidebar";
import "../styles/PharmaScan.css"; // We'll define styles here

const PharmaScan = () => {
  return (
    <div className="pharma-layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default PharmaScan;
