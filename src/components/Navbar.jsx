import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-3 px-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left: Logo */}
        <div className="d-flex align-items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft Logo"
            width="28"
            height="28"
          />
          <span className="fw-bold">Microsoft</span>
        </div>

        {/* Hamburger toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible nav links */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          {/* Left nav links */}
          <div className="navbar-nav d-lg-flex align-items-center gap-3">
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

          {/* Right side */}
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <Link
              to="#"
              className="nav-link text-dark d-flex align-items-center"
            >
              Search <i className="bi bi-search ms-1"></i>
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
      </div>
    </nav>
  );
};

export default Navbar;
