import React from "react";
import { Link, useLocation } from "react-router-dom";

const LayoutNavbar = () => {
  const { hash } = useLocation();

  const navLinks = [
    { id: "dashboard/home#overview", label: "Overview" },
    { id: "dashboard/home#keyFeature", label: "Key Features" },
    { id: "dashboard/home#featurePromo", label: "What’s New" },
    { id: "dashboard/home#plans", label: "Plans & Pricing" },
    { id: "dashboard/home#mobile", label: "Mobile Download" },
    { id: "dashboard/home#resources", label: "Resources" },
    { id: "dashboard/home#faq", label: "FAQ" },
    { id: "dashboard/home#nextSteps", label: "Next Steps" }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm py-3 px-4">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          Thunderbees
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-lg-row gap-lg-4">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <Link
                  to={`/${link.id}`}
                  className={`nav-link text-primary ${
                    hash === link.id
                      ? "border-bottom border-2 border-primary fw-semibold"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-flex gap-2 mt-3 mt-lg-0">
            <button className="btn btn-primary fw-semibold">
              Sign up for free
            </button>
            <button className="btn btn-outline-primary fw-semibold">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LayoutNavbar;
