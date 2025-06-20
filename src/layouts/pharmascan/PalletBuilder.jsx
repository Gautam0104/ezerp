import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/wms/Header";

function PalletBuilder() {
  return (
    <div className="flex-grow px-4">
      {/* Header */}
      <Header title="Pallet Builder" />

      {/* Main Section */}
      <div className="bg-white shadow p-4 mt-4 rounded">
        {/* Create Button */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button className="btn btn-outline-primary shadow">
            <i className="bi bi-plus me-2"></i> Create New Pallet
          </button>
        </div>

        {/* Stats Cards */}
        <div className="row g-3 mb-4">
          <div className="col-lg-4">
            <div
              className="p-3 rounded d-flex align-items-center"
              style={{ backgroundColor: "#DBEAFE", color: "#1D4ED8" }}
            >
              <div>
                <p className="fs-4 fw-semibold mb-1">Total Pallets</p>
                <p className="fs-3 fw-bold mb-0">3</p>
              </div>
              <i className="bi bi-stack fs-2 ms-auto"></i> {/* Total Pallets */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="p-3 rounded d-flex align-items-center text-primary bg-primary bg-opacity-25" style={{backgroundColor:"#FEF9C3", color:"#A16207"}}>
              <div>
                <p className="fs-4 fw-semibold mb-1">In Progress</p>
                <p className="fs-3 fw-bold mb-0">2</p>
              </div>
              <i className="bi bi-exclamation-triangle-fill fs-2 ms-auto"></i>{" "}
              {/* In Progress */}
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="p-3 rounded d-flex align-items-center"
              style={{ backgroundColor: "#DCFCE7", color: "#15803D" }}
            >
              <div>
                <p className="fw-semibold fs-4 mb-1">Completed</p>
                <p className="fw-bold fs-3 mb-0">1</p>
              </div>
              <i className="bi bi-check-circle-fill fs-2 ms-auto"></i>{" "}
              {/* Completed */}
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search pallets by ID or destination"
          />
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-bordered bg-white">
            <thead className="table-light">
              <tr>
                <th>Pallet ID</th>
                <th>Packages</th>
                <th>Weight (kg)</th>
                <th>Destination</th>
                <th>Created</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PLT-4532</td>
                <td>12</td>
                <td>145.8</td>
                <td>Warehouse A</td>
                <td>2024-06-10</td>
                <td>
                  <span className="px-2 py-1 rounded d-inline-block text-primary bg-primary bg-opacity-25">In Progress</span>
                </td>
                <td>
                  <Link
                    to="#"
                    className="text-primary text-decoration-underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
              <tr>
                <td>PLT-4533</td>
                <td>8</td>
                <td>98.2</td>
                <td>Distribution Center B</td>
                <td>2024-06-09</td>
                <td>
                  <span className="px-2 py-1 rounded d-inline-block" style={{backgroundColor:"#DCFCE7", color:"#15803D"}}>Completed</span>
                </td>
                <td>
                  <Link
                    to="#"
                    className="text-primary text-decoration-underline"
                  >
                    View
                  </Link>
                  <Link to="#" className="text-muted ms-2">
                    <i className="bi bi-print"></i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>PLT-4534</td>
                <td>15</td>
                <td>187.5</td>
                <td>Retail Store C</td>
                <td>2024-06-08</td>
                <td>
                  <span className="px-2 py-1 rounded d-inline-block text-primary bg-primary bg-opacity-25">In Progress</span>
                </td>
                <td>
                  <Link
                    to="#"
                    className="text-primary text-decoration-underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Info Alert */}
        <div className="mt-4 bg-primary bg-opacity-10 p-4 rounded">
          <i className="bi bi-info-circle-fill me-2"></i>
          <div>
            You have pallets in progress. Complete them before shipping to
            ensure proper inventory tracking.
          </div>
        </div>
      </div>
    </div>
  );
}

export default PalletBuilder;
