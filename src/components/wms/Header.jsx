import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <div className="shadow px-2 py-4 bg-white">
      <div className="row d-flex justify-content-between">
        <div className="col-6 justify-content-start">
          <Link
            to="pharmaScan.html"
            className="btn btn-outline-primary fw-semibold fs-4"
          >
            <i className="bi bi-upc-scan me-2"></i>
            {title}
          </Link>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-end">
          <div className="d-flex align-items-center gap-2 header-sub-title">
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-bell-fill"></i>
              <span className="text-secondary">
                John Doe <span className="text-muted">Warehouse Manager</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
