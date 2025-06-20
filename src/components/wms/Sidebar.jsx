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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (href, e) => {
    e.preventDefault();
    setActiveLink(href);
    if (isMobile) toggleSidebar();
    window.location.href = href;
  };

  const sidebarStyle = {
    width: collapsed ? (isMobile ? "0px" : "60px") : "250px",
    zIndex: 1041,
    transition: "width 0.3s ease, left 0.3s ease",
    left: isMobile && collapsed ? "-260px" : "0px",
    height: "100vh"
  };

  const contentShiftStyle = {
    marginLeft: collapsed ? (isMobile ? "0px" : "60px") : "250px",
    transition: "margin-left 0.3s ease"
  };

  return (
    <>
      {isMobile && !collapsed && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
      <div
        id="sidebar"
        className="d-flex flex-column bg-light position-fixed top-0 start-0 border-end"
        style={sidebarStyle}
      >
        <div
          className="position-absolute"
          style={{
            top: "15px",
            right: collapsed ? "-15px" : "-20px",
            zIndex: 1050
          }}
        >
          <button
            onClick={toggleSidebar}
            className="btn btn-sm  rounded-circle shadow"
            style={{
              width: "30px",
              height: "30px",
              marginRight: "30px",
              backgroundColor: "lightgray"
            }}
            title={collapsed ? "Expand" : "Collapse"}
          >
            <BsChevronLeft
              style={{
                transform: collapsed ? "rotate(180deg)" : "none",
                transition: "transform 0.3s"
              }}
            />
          </button>
        </div>

        {!collapsed && (
          <div className="p-3 bg-light">
            <div className="d-flex align-items-center gap-2 fs-5 fw-semibold text-dark mb-2">
              <BsBoxSeam />
              <span>WMS</span>
            </div>
            <h6 className="text-muted">MODULES</h6>
          </div>
        )}

        <div
          className="flex-grow-1 overflow-auto"
          style={{ marginTop: collapsed ? "50px" : "10px" }}
        >
          <nav className="nav flex-column px-2">
            <SidebarLink
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

        <div className="p-3 bg-light">
          {!collapsed && <h6 className="text-muted">SETTINGS</h6>}
          <nav className="nav flex-column">
            <SidebarLink
              icon={<BsGear />}
              label="Setting"
              href="#"
              collapsed={collapsed}
              active={activeLink === "#"}
              onClick={handleLinkClick}
            />
            <SidebarLink
              icon={<BsGear />}
              label="System Setting"
              href="#"
              collapsed={collapsed}
              active={activeLink === "#"}
              onClick={handleLinkClick}
            />
          </nav>
        </div>
      </div>
      <div id="content-wrapper" style={contentShiftStyle}>
        {/* Main app content goes here */}
      </div>
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
    title={collapsed ? label : ""}
  >
    {icon}
    {!collapsed && label}
  </a>
);

export default Sidebar;
