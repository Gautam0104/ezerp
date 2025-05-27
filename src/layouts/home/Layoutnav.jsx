import React from "react";

const LayoutNavbar = () => {
  return (
     <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm py-3 px-4">
      <div className="container d-flex justify-content-between align-items-center">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row gap-4">
          <li className="nav-item border-bottom border-2 border-primary text-primary fw-semibold">Overview</li>
          <li className="nav-item text-primary fw-medium">Key features</li>
          <li className="nav-item text-primary fw-medium">What’s new</li>
          <li className="nav-item text-primary fw-medium">Plans & pricing</li>
          <li className="nav-item text-primary fw-medium">Mobile download</li>
          <li className="nav-item text-primary fw-medium">Resources</li>
          <li className="nav-item text-primary fw-medium">FAQ</li>
          <li className="nav-item text-primary fw-medium">Next steps</li>
        </ul>
        <div className="d-flex gap-2">
          <button className="btn btn-primary fw-semibold">Sign up for free</button>
          <button className="btn btn-outline-primary fw-semibold">Sign in</button>
        </div>
      </div>
    </nav>
  );
};

export default LayoutNavbar;
