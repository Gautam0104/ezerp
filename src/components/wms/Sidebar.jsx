// Sidebar.jsx
import React, { useState, useEffect } from "react";
import {
  BsBoxSeam,
  BsChevronLeft,
  BsUpcScan,
  BsBagCheck,
  BsTruck,
  BsBoxArrowInDown,
  BsArrowDownUp,
  Bs0Circle,
  BsCartCheck,
  BsBoxes,
  BsBoxArrowInUp,
  BsGeoAlt,
  BsGear
} from "react-icons/bs";
import "./css/sidebar.css";

const Sidebar = ({ collapsed, toggleSidebar }) => {
  const [activeLink, setActiveLink] = useState("/ezerp/#/wms/pharmahome");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      setIsMobile(isNowMobile);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarClass = `d-flex flex-column bg-light h-100 position-fixed top-0 start-0 border-end p-3 transition-all ${
    collapsed ? "" : "expanded"
  }`;

  const handleLinkClick = (href, e) => {
    e.preventDefault();
    setActiveLink(href);
    if (isMobile) toggleSidebar(); // Collapse on mobile after navigation
    window.location.href = href;
  };

  return (
    <>
      {isMobile && !collapsed && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
      {!collapsed && (
        <div
          id="sidebar"
          className={sidebarClass}
          style={{ width: collapsed ? "0px" : "250px", zIndex: 1041 }}
        >
          {/* Header */}
          <div className="position-absolute top-0 start-0 end-0 p-3 bg-light">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="mb-4 d-flex align-items-center gap-2 fs-5 fw-semibold text-dark">
                {!collapsed && (
                  <>
                    <BsBoxSeam />
                    <span>WMS</span>
                  </>
                )}
              </h4>
              {!collapsed && (
                <button
                  onClick={toggleSidebar}
                  className="btn btn-sm btn-light rounded-circle"
                >
                  <BsChevronLeft
                    style={{
                      transform: collapsed ? "rotate(180deg)" : "none",
                      transition: "0.3s"
                    }}
                  />
                </button>
              )}
            </div>
            {!collapsed && <h6 className="text-muted">MODULES</h6>}
          </div>

          {/* Middle Section */}
          <div className="flex-grow-1 overflow-auto mt-5 mb-5">
            <nav className="nav flex-column" style={{ marginTop: "45px" }}>
              <SidebarLink
                className="mt-3"
                icon={<BsUpcScan />}
                label="PharmaScan"
                href="/ezerp/#/wms/pharmahome"
                collapsed={collapsed}
                active={activeLink === "/ezerp/#/wms/pharmahome"}
                onClick={handleLinkClick}
              />
              <SidebarLink
                icon={<BsBagCheck />}
                label="Product"
                href="/ezerp/#/wms/product"
                collapsed={collapsed}
                active={activeLink === "/ezerp/#/wms/product"}
                onClick={handleLinkClick}
              />
              <SidebarLink
                icon={<BsTruck />}
                label="Pre-Receiving"
                href="/#/wms"
                collapsed={collapsed}
                active={activeLink === "#"}
                onClick={handleLinkClick}
              />
              <SidebarLink
                icon={<BsBoxArrowInDown />}
                label="Receiving"
                href="/ezerp/#/wms/Receiving"
                collapsed={collapsed}
                active={activeLink === "/ezerp/#/wms/Receiving"}
                onClick={handleLinkClick}
              />
              <SidebarLink
                icon={<BsArrowDownUp />}
                label="Put-away"
                href="/ezerp/#/wms/PutAwayDashboard"
                collapsed={collapsed}
                active={activeLink === "/ezerp/#/wms/PutAwayDashboard"}
                onClick={handleLinkClick}
              />
              <SidebarLink
                icon={<Bs0Circle />}
                label="Order"
                href="/ezerp/#/wms/order"
                collapsed={collapsed}
                active={activeLink === "/ezerp/#/wms/order"}
                onClick={handleLinkClick}
              />
              <SidebarLink
                icon={<BsCartCheck />}
                label="Picking"
                href="/ezerp/#/wms/PickingPage"
                collapsed={collapsed}
                active={activeLink === "/ezerp/#/wms/PickingPage"}
                onClick={handleLinkClick}
              />
              <SidebarLink
                icon={<BsBoxes />}
                label="Packing"
                href="/ezerp/#/wms/PackingDashboard"
                collapsed={collapsed}
                active={activeLink === "/ezerp/#/wms/PackingDashboard"}
                onClick={handleLinkClick}
              />
              <SidebarLink
                icon={<BsBoxArrowInUp />}
                label="Pallet"
                href="/ezerp/#/wms/palletmanagement"
                collapsed={collapsed}
                active={activeLink === "/ezerp/#/wms/palletmanagement"}
                onClick={handleLinkClick}
              />
              <SidebarLink
                icon={<BsBoxArrowInUp />}
                label="Pallet Builder"
                href="/ezerp/#/wms/palletbuilder"
                collapsed={collapsed}
                active={activeLink === "/ezerp/#/wms/palletbuilder"}
                onClick={handleLinkClick}
              />
              <SidebarLink
                icon={<BsGeoAlt />}
                label="Expedition"
                href="/ezerp/#/wms/Expedition"
                collapsed={collapsed}
                active={activeLink === "/ezerp/#/wms/Expedition"}
                onClick={handleLinkClick}
              />
              <SidebarLink
                icon={<BsCartCheck />}
                label="Shipment"
                href="/ezerp/#/wms/ShipmentVerification"
                collapsed={collapsed}
                active={activeLink === "/ezerp/#/wms/ShipmentVerification"}
                onClick={handleLinkClick}
              />
              <SidebarLink
                icon={<BsBagCheck />}
                label="Delivery-Last Mile"
                href="/#/wms"
                collapsed={collapsed}
                active={activeLink === "#"}
                onClick={handleLinkClick}
              />
            </nav>
          </div>

          {/* Settings */}
          <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-light">
            {!collapsed && <h6 className="text-muted">SETTINGS</h6>}
            <nav className="nav flex-column">
              {!collapsed && (
                <SidebarLink
                  icon={<BsGear />}
                  label="Setting"
                  href="#"
                  collapsed={collapsed}
                  active={activeLink === "#"}
                  onClick={handleLinkClick}
                />
              )}
              {!collapsed && (
                <SidebarLink
                  icon={<BsGear />}
                  label="System Setting"
                  href="#"
                  collapsed={collapsed}
                  active={activeLink === "#"}
                  onClick={handleLinkClick}
                />
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

const SidebarLink = ({ icon, label, href, active, collapsed, onClick }) => (
  <a
    href={href}
    onClick={(e) => onClick(href, e)}
    className={`nav-link d-flex align-items-center gap-2 px-2 py-2 rounded ${
      active ? "active bg-primary text-white" : "text-dark"
    } ${!collapsed ? "hover-shadow-sm" : "justify-content-center"}`}
  >
    {icon}
    {!collapsed && <span>{label}</span>}
  </a>
);

export default Sidebar;
