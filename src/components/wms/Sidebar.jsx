import React, { useState } from "react";
import {
  BsBoxSeam,
  BsChevronLeft,
  BsArchive,
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

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeLink, setActiveLink] = useState("/ezerp/#/wms/pharmahome");

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const sidebarClass = `d-flex flex-column bg-light h-100 position-relative border-end p-3 transition-all ${
    collapsed ? "collapsed-sidebar" : ""
  }`;

  const handleLinkClick = (href, e) => {
    e.preventDefault(); // prevent default link navigation for demo
    setActiveLink(href);
    // Navigate to href (comment out if using SPA routing)
    window.location.href = href;
  };

  return (
    <div
      id="sidebar"
      className={sidebarClass}
      style={{ width: collapsed ? "70px" : "250px" }}
    >
      {/* Top Section */}
      <div className="position-absolute top-0 start-0 end-0 p-3 bg-light">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="mb-4 d-flex align-items-center gap-2 fs-5 fw-semibold text-dark">
            <BsBoxSeam />
            {!collapsed && <span>WMS</span>}
          </h4>
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
        </div>
        {!collapsed && <h6 className="text-muted">MODULES</h6>}
      </div>

      {/* Middle Section */}
      <div className="flex-grow-1 overflow-auto mt-5 mb-5">
        <nav className="nav flex-column mt-6">
          <SidebarLink
            icon={<BsArchive />}
            label="Inventory Management"
            href="/ezerp/#/wms/pharmahome"
            collapsed={collapsed}
            active={activeLink === "/ezerp/#/wms/pharmahome"}
            onClick={handleLinkClick}
          />
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
            href="/#/wms"
            collapsed={collapsed}
            active={activeLink === "receiving.html"}
            onClick={handleLinkClick}
          />
          <SidebarLink
            icon={<BsArrowDownUp />}
            label="Put-away"
            href="/#/wms"
            collapsed={collapsed}
            active={activeLink === "put_away.html"}
            onClick={handleLinkClick}
          />
          <SidebarLink
            icon={<Bs0Circle />}
            label="Order"
            href="/#/wms"
            collapsed={collapsed}
            active={activeLink === "order.html"}
            onClick={handleLinkClick}
          />
          <SidebarLink
            icon={<BsCartCheck />}
            label="Picking"
            href="/#/wms"
            collapsed={collapsed}
            active={activeLink === "picking.html"}
            onClick={handleLinkClick}
          />
          <SidebarLink
            icon={<BsBoxes />}
            label="Packing"
            href="/#/wms"
            collapsed={collapsed}
            active={activeLink === "packing.html"}
            onClick={handleLinkClick}
          />
          <SidebarLink
            icon={<BsBoxArrowInUp />}
            label="Pallet"
            href="/#/wms"
            collapsed={collapsed}
            active={activeLink === "pallet.html"}
            onClick={handleLinkClick}
          />
          <SidebarLink
            icon={<BsBoxArrowInUp />}
            label="Pallet Builder"
            href="/#/wms"
            collapsed={collapsed}
            active={activeLink === "pallet_bulider.html"}
            onClick={handleLinkClick}
          />
          <SidebarLink
            icon={<BsGeoAlt />}
            label="Expedition"
            href="/#/wms"
            collapsed={collapsed}
            active={activeLink === "location.html"}
            onClick={handleLinkClick}
          />
          <SidebarLink
            icon={<BsCartCheck />}
            label="Shipment"
            href="/#/wms"
            collapsed={collapsed}
            active={activeLink === "shipment.html"}
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

      {/* Bottom Section */}
      <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-light">
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
