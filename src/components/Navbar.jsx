import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import imageIcon from "../assets/images/cardcarousalbackground/1.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-3 px-3 ">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left: Logo */}
        <div className="d-flex align-items-center gap-3">
          <img src={imageIcon} alt="Thunderbees Logo" width="40" height="40" />
          <span className="fw-bold">Thunderbees</span>
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
              Thunderbees 
            </Link>
            <Link to="#" className="nav-link text-dark">
              PharmaScan
            </Link>
            <Link to="#" className="nav-link text-dark dropdown-toggle">
              Plans and pricing
            </Link>
            <Link to="#" className="nav-link text-dark dropdown-toggle">
              Resources
            </Link>
            <Link to="#" className="nav-link text-primary">
              More Thunderbees
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
              Thunder
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
