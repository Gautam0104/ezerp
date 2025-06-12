// src/routes/AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Welcome from "../pages/Welcome";
import PharmaScan from "../pages/PharmaScan";
import PharmaScanDashboard from "../layouts/pharmascan/PharmaScanDashboard";
import ProductForm from "../layouts/pharmascan/ProductForm";
import OrderPicking from "../layouts/pharmascan/OrderPicking";
import PalletManagement from "../layouts/pharmascan/PalletManagement";
import Expedition from "../layouts/pharmascan/Expedition";
import Receiving from "../layouts/pharmascan/Receiving";
import PutAwayDashboard from "../layouts/pharmascan/PutAwayDashboard";
import PickingPage from "../layouts/pharmascan/PickingPage";
import PackingDashboard from "../layouts/pharmascan/PackingDashboard";
import PalletBuilder from "../layouts/pharmascan/PalletBuilder";
import ShipmentVerification from "../layouts/pharmascan/ShipmentVerification";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard/home" replace />} />
      <Route
        path="/ezerp"
        element={<Navigate to="/dashboard/home" replace />}
      />

      {/* Public Pages */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/pharma" element={<Welcome />} />
      <Route path="/wms" element={<PharmaScan />}>
        <Route path="pharmahome" element={<PharmaScanDashboard />} />
        <Route path="product" element={<ProductForm />} />
        <Route path="order" element={<OrderPicking />} />
        <Route path="palletmanagement" element={<PalletManagement />} />
        <Route path="Expedition" element={<Expedition />} />
        <Route path="receiving" element={<Receiving />} />
        <Route path="putawaydashboard" element={<PutAwayDashboard />} />
        <Route path="pickingpage" element={<PickingPage />} />
        <Route path="packingdashboard" element={<PackingDashboard />} />
        <Route path="palletbuilder" element={<PalletBuilder />} />
        <Route path="ShipmentVerification" element={<ShipmentVerification />} />
      </Route>
      {/* Dashboard Layout */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
