import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-3 px-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left: Logo and navigation links */}
        <div className="d-flex align-items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft Logo"
            width="28"
            height="28"
          />
          <span className="fw-bold">Microsoft</span>
          <span className="vr mx-2"></span>
          <div className="d-none d-lg-flex gap-3">
            <Link to="#" className="nav-link fw-semibold text-dark">
              Microsoft 365
            </Link>
            <Link to="#" className="nav-link text-dark">
              PowerPoint
            </Link>
            <Link to="#" className="nav-link text-dark dropdown-toggle">
              Plans and pricing
            </Link>
            <Link to="#" className="nav-link text-dark dropdown-toggle">
              Resources
            </Link>
            <Link to="#" className="nav-link text-primary">
              More Microsoft 365
            </Link>
          </div>
        </div>

        {/* Right side: Search, Language, Button, Profile */}
        <div className="d-flex align-items-center gap-3">
          <Link to="#" className="nav-link text-dark">
            Search <i className="bi bi-search"></i>
          </Link>
          <Link to="#" className="nav-link text-dark">
            Français
          </Link>
          <button className="btn btn-dark btn-sm">Try for free</button>
          <Link to="#" className="nav-link text-dark">
            Gautam
          </Link>
          <button
            className="btn btn-outline-secondary rounded-circle p-1"
            style={{ width: "32px", height: "32px" }}
          >
            <i className="bi bi-person"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
