import React from "react";
import { Link } from "react-router-dom";

const ShipmentVerification = () => {
  return (
    <div className="flex-grow px-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center shadow p-4 bg-white text-primary">
        <div>
          <Link
            to="shipment.html"
            className="btn btn-outline-primary fw-semibold fs-4"
          >
            <i className="bi bi-cart-check me-2"></i>Shipment
          </Link>
        </div>
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-bell-fill me-2"></i>
          <span>
            John Doe <span className="text-muted">Warehouse Manager</span>
          </span>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white p-4 rounded shadow mt-4">
        {/* Action Buttons */}
        <div className="d-flex gap-3 mb-4">
          <button className="btn btn-light">
            <i className="fas fa-list me-2"></i>Shipment Details
          </button>
          <button className="btn btn-primary text-white">
            <i className="fas fa-user me-2"></i>Complete Verification
          </button>
        </div>

        <p className="text-muted mb-4">Shipment ID: SHP-2024-0042</p>

        {/* Stats Cards */}
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className="d-flex align-items-center  p-3 rounded" style={{backgroundColor:"#DCFCE7", color:"#15803D"}}>
              <div>
                <p className=" fw-semibold fs-5 mb-1">Matched Items</p>
                <p className=" fw-bold fs-4">1</p>
              </div>
              <i className="fas fa-check-circle text-success fs-3 ms-auto"></i>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex align-items-center  p-3 rounded" style={{backgroundColor:"#FEF9C3", color:"#A16207"}}>
              <div>
                <p className="fw-semibold fs-5 mb-1">Shortages</p>
                <p className="fw-bold fs-4">2</p>
              </div>
              <i className="fas fa-exclamation-triangle text-warning fs-3 ms-auto"></i>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex align-items-center  p-3 rounded" style={{backgroundColor:"#FEE2E2", color:"#B91C1C"}}>
              <div>
                <p className="fw-semibold fs-5 mb-1">Unexpected Items</p>
                <p className="fw-bold fs-4">1</p>
              </div>
              <i className="fas fa-times-circle text-danger fs-3 ms-auto"></i>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by SKU or description"
            className="form-control"
          />
        </div>

        {/* Tabs */}
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <Link className="nav-link active" to="#">
              Expected Items
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-muted" to="#">
              Scanned Items
            </Link>
          </li>
        </ul>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>SKU</th>
                <th>Description</th>
                <th>Lot</th>
                <th>Expected Qty</th>
                <th>Received Qty</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PRD-001</td>
                <td>Widget A</td>
                <td>LOT-A123</td>
                <td>10</td>
                <td>10</td>
                <td>
                  <span className="badge bg-success bg-opacity-25 text-success">
                    Matched
                  </span>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>PRD-002</td>
                <td>Widget B</td>
                <td>LOT-B456</td>
                <td>8</td>
                <td>5</td>
                <td>
                  <span className="badge bg-warning bg-opacity-25 text-warning">
                    Shortage
                  </span>
                </td>
                <td>
                  <span className="badge bg-secondary bg-opacity-10 text-muted">
                    Reconcile
                  </span>
                </td>
              </tr>
              <tr>
                <td>PRD-003</td>
                <td>Widget C</td>
                <td>LOT-C789</td>
                <td>5</td>
                <td>0</td>
                <td>
                  <span className="badge bg-warning bg-opacity-25 text-warning">
                    Shortage
                  </span>
                </td>
                <td>
                  <span className="badge bg-secondary bg-opacity-10 text-muted">
                    Reconcile
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Info Box */}
        <div className="mt-4 bg-info bg-opacity-10 p-3 rounded">
          <p className="text-primary mb-1">
            <i className="fas fa-exclamation-triangle me-2"></i>Reconciliation Required
          </p>
          <p className="text-muted mb-0">
            There are 2 shortages and 1 unexpected item that need reconciliation
            before completing this shipment verification.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShipmentVerification;
