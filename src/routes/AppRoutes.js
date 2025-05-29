// src/routes/AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirect root and booking-web to dashboard/home */}
      <Route path="/" element={<Navigate to="/dashboard/home" replace />} />
      <Route
        path="/ezerp"
        element={<Navigate to="/dashboard/home" replace />}
      />
      <Route
        path="/dashboard"
        element={<Navigate to="/dashboard/home" replace />}
      />

      {/* Public Pages */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Dashboard Layout with Nested Routes */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
