import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/wms/Sidebar";
import "../styles/PharmaScan.css";

const PharmaScan = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 768);

  const toggleSidebar = () => setCollapsed(!collapsed);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setCollapsed(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="pharma-layout">
      <button className="btn d-md-none m-2 text-end" onClick={toggleSidebar}>
        {collapsed ? "☰" : "✖"}
      </button>

      <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />

      <div
        className="main-content py-2"
        onClick={() =>
          window.innerWidth <= 768 && !collapsed && toggleSidebar()
        }
      >
        <Outlet />
      </div>
    </div>
  );
};

export default PharmaScan;
