import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/wms/Header";

const PalletManagement = () => {
  return (
    <div className="flex-grow px-4">
      {/* Header */}
      <Header title="Pallet" />

      {/* Pallet Info Card */}
      <div className="bg-white p-4 rounded shadow mt-4 mb-5">
        {/* Actions */}
        <div className="d-flex justify-content-between mb-4">
          <div>
            <button className="btn btn-outline-secondary me-2">
              <i className="bi bi-x me-2"></i>Close
            </button>
            <button className="btn btn-primary">
              <i className="bi bi-list me-2"></i>Finalize Pallet
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="row g-3 mb-4">
          <div className="col-lg-4 col-md-6">
            <div
              className="p-3 rounded d-flex align-items-center"
              style={{ backgroundColor: "#DBEAFE", color: "#1D4ED8" }}
            >
              <div>
                <p className="fw-semibold fs-5 mb-1">Total Weight</p>
                <p className="fw-bold fs-4">36.5 kg</p>
              </div>
              <i className="bi bi-speedometer text-blue-600 fs-3 ms-auto"></i>{" "}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="p-3 rounded d-flex align-items-center"
              style={{ backgroundColor: "#FEF9C3", color: "#A16207" }}
            >
              <div>
                <p className="fw-semibold fs-5 mb-1">Total Packages</p>
                <p className="fw-bold fs-4">3</p>
              </div>
              <i className="bi bi-box-seam-fill text-warning fs-3 ms-auto"></i>{" "}
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="p-3 rounded d-flex align-items-center"
              style={{ backgroundColor: "#DCFCE7", color: "#15803D" }}
            >
              <div>
                <p className="fw-semibold fs-5 mb-1">Destination</p>
                <p className="fw-bold fs-4">Warehouse B</p>
              </div>
              <i className="bi bi-geo-alt-fill text-success fs-3 ms-auto"></i>{" "}
            </div>
          </div>
        </div>

        {/* Scan Input */}
        <div className="mb-4">
          <label className="form-label fw-semibold text-secondary">
            Scan Packages
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Scan or enter package barcode"
          />
        </div>

        {/* Tabs */}
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <Link className="nav-link active" to="#">
              <i className="bi bi-upc-scan me-2"></i>Scan Barcode
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-muted" to="#">
              <i className="bi bi-plus me-2"></i>Add Packages
            </Link>
          </li>
        </ul>

        {/* Package Table */}
        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>Package ID</th>
                <th>Order #</th>
                <th>Weight</th>
                <th>Dimensions</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PKG-7823</td>
                <td>ORD-4532</td>
                <td>12.5 kg</td>
                <td>24" x 18" x 12"</td>
                <td>
                  <span className="px-2 py-1 rounded d-inline-block" style={{backgroundColor:"#DCFCE7", color:"#15803D"}}>
                    Verified
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm text-danger">
                    <i className="bi bi-x" style={{ fontSize: "1.8rem" }}></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>PKG-7824</td>
                <td>ORD-4532</td>
                <td>8.3 kg</td>
                <td>18" x 12" x 10"</td>
                <td>
                  <span className="px-2 py-1 rounded d-inline-block" style={{backgroundColor:"#DCFCE7", color:"#15803D"}}>
                    Verified
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm text-danger">
                    <i className="bi bi-x" style={{ fontSize: "1.8rem" }}></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>PKG-7825</td>
                <td>ORD-4533</td>
                <td>15.7 kg</td>
                <td>30" x 20" x 15"</td>
                <td>
                  <span className="px-2 py-1 rounded d-inline-block" style={{backgroundColor:"#FEF9C3", color:"#A16207"}}>
                    Pending
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm text-success">
                    <i className="bi bi-check" style={{ fontSize: "1.8rem" }}></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PalletManagement;
