import React from 'react';
import { Link } from 'react-router-dom';

function PalletBuilder() {
  return (
    <div className="flex-grow px-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center shadow p-4 text-primary bg-white">
        <div>
          <Link
            to="pallet_builder.html"
            className="btn btn-outline-primary fw-semibold fs-4"
          >
            <i className="bi bi-box-arrow-in-up me-2"></i>Pallet Builder
          </Link>
        </div>
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-bell-fill me-2"></i>
          <span>
            John Doe <span className="text-secondary">Warehouse Manager</span>
          </span>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-white shadow p-4 my-4 rounded">
        {/* Create Button */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button className="btn btn-primary shadow">
            <i className="fas fa-plus me-2"></i> Create New Pallet
          </button>
        </div>

        {/* Stats Cards */}
        <div className="row g-3 mb-4">
          <div className="col-lg-4">
            <div className="bg-primary bg-opacity-10 p-3 rounded d-flex align-items-center">
              <div>
                <p className="text-primary fs-4 fw-semibold mb-1">Total Pallets</p>
                <p className="text-primary fs-3 fw-bold mb-0">3</p>
              </div>
              <i className="fas fa-chart-bar text-primary fs-2 ms-auto"></i>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-warning bg-opacity-10 p-3 rounded d-flex align-items-center">
              <div>
                <p className="text-warning fs-4 fw-semibold mb-1">In Progress</p>
                <p className="text-warning fs-3 fw-bold mb-0">2</p>
              </div>
              <i className="fas fa-exclamation-triangle text-warning fs-2 ms-auto"></i>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-success bg-opacity-10 p-3 rounded d-flex align-items-center">
              <div>
                <p className="text-success fs-4 fw-semibold mb-1">Completed</p>
                <p className="text-success fs-3 fw-bold mb-0">1</p>
              </div>
              <i className="fas fa-check-circle text-success fs-2 ms-auto"></i>
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
                  <span className="badge bg-warning text-dark">In Progress</span>
                </td>
                <td>
                  <Link to="#" className="text-primary text-decoration-underline">View</Link>
                </td>
              </tr>
              <tr>
                <td>PLT-4533</td>
                <td>8</td>
                <td>98.2</td>
                <td>Distribution Center B</td>
                <td>2024-06-09</td>
                <td>
                  <span className="badge bg-success">Completed</span>
                </td>
                <td>
                  <Link to="#" className="text-primary text-decoration-underline">View</Link>
                  <Link to="#" className="text-muted ms-2"><i className="fas fa-print"></i></Link>
                </td>
              </tr>
              <tr>
                <td>PLT-4534</td>
                <td>15</td>
                <td>187.5</td>
                <td>Retail Store C</td>
                <td>2024-06-08</td>
                <td>
                  <span className="badge bg-warning text-dark">In Progress</span>
                </td>
                <td>
                  <Link to="#" className="text-primary text-decoration-underline">View</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Info Alert */}
        <div className="alert alert-primary d-flex align-items-center mt-4">
          <i className="fas fa-info-circle me-2"></i>
          <div>
            You have pallets in progress. Complete them before shipping to ensure proper inventory tracking.
          </div>
        </div>
      </div>
    </div>
  );
}

export default PalletBuilder;
