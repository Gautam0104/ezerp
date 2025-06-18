import React from "react";
import { Link } from "react-router-dom";

const Receiving = () => {
  return (
    <div className="flex-grow-1 px-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center shadow p-4 bg-white text-primary mb-4">
        <div>
          <Link
            to="shipment.html"
            className="btn btn-outline-primary fs-4 fw-semibold"
          >
            <i className="bi bi-box-arrow-in-up me-2"></i>Receiving
          </Link>
        </div>
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-bell-fill"></i>
          <span className="text-secondary">
            John Doe <span className="text-muted">Warehouse Manager</span>
          </span>
        </div>
      </div>
      {/* Content Area */}
      <div
        className="bg-white p-4 rounded shadow my-4"
        style={{ height: "calc(100vh - 100px)", overflowY: "auto" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex gap-3">
            <button className="btn btn-outline-secondary">
              <i className="bi bi-plus me-2"></i> New Shipment
            </button>
            <button className="btn btn-primary text-white">
              <i className="bi bi-barcode me-2"></i> Scan Shipment
            </button>
          </div>
        </div>

        <p className="text-muted mb-4">
          Manage incoming shipments and verify inventory
        </p>

        {/* Cards */}
        <div className="row g-3 mb-4">
          <div className="col-sm-6 col-lg-3">
            <div
              className="p-3 rounded d-flex justify-content-between align-items-center"
              style={{ backgroundColor: "#DBEAFE", color: "#1D4EDF" }}
            >
              <div>
                <p className=" fs-5 fw-semibold">All Shipments</p>
                <p className=" fs-3 fw-bold">5</p>
              </div>
              <i className="bi bi-box-fill text-blue-600 fs-2"></i>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div
              className=" p-3 rounded d-flex justify-content-between align-items-center"
              style={{ backgroundColor: "#FEF9C3", color: "#A16207" }}
            >
              <div>
                <p className=" fs-5 fw-semibold">Pending</p>
                <p className=" fs-3 fw-bold">2</p>
              </div>
              <i className="bi bi-exclamation-triangle-fill text-yellow-600 fs-2"></i>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div
              className=" p-3 rounded d-flex justify-content-between align-items-center text-primary bg-primary bg-opacity-25"
              s
            >
              <div>
                <p className=" fs-5 fw-semibold">In Progress</p>
                <p className=" fs-3 fw-bold">1</p>
              </div>
              <i className="bi bi-truck text-blue-600 fs-2"></i>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div
              className=" p-3 rounded d-flex justify-content-between align-items-center"
              style={{ backgroundColor: "#FEE2E2", color: "#B91C1C" }}
            >
              <div>
                <p className=" fs-5 fw-semibold">Issues</p>
                <p className=" fs-3 fw-bold">1</p>
              </div>
              <i className="bi bi-exclamation-octagon-fill text-red-600 fs-2"></i>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <Link className="nav-link active text-primary" to="#">
              Expected Shipments
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-secondary" to="#">
              Shipment History
            </Link>
          </li>
        </ul>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>Shipment ID</th>
                <th>Invoice #</th>
                <th>Supplier</th>
                <th>Expected Date</th>
                <th>Items</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "SHP-2024-0042",
                  invoice: "INV-78945",
                  supplier: "Tech Components Inc.",
                  date: "2024-06-10",
                  items: 25,
                  status: "In Progress",
                  statusColor: "primary"
                },
                {
                  id: "SHP-2024-0043",
                  invoice: "INV-78946",
                  supplier: "Global Manufacturing Ltd.",
                  date: "2024-06-12",
                  items: 18,
                  status: "Pending",
                  statusColor: "warning"
                },
                {
                  id: "SHP-2024-0044",
                  invoice: "INV-78950",
                  supplier: "Quality Parts Co.",
                  date: "2024-06-15",
                  items: 32,
                  status: "Pending",
                  statusColor: "warning"
                },
                {
                  id: "SHP-2024-0041",
                  invoice: "INV-78940",
                  supplier: "Industrial Supplies Inc.",
                  date: "2024-06-09",
                  items: 22,
                  status: "Issue",
                  statusColor: "danger"
                }
              ].map((row, idx) => (
                <tr key={idx}>
                  <td>{row.id}</td>
                  <td>{row.invoice}</td>
                  <td>{row.supplier}</td>
                  <td>{row.date}</td>
                  <td>{row.items}</td>
                  <td>
                    <button
                      className={`btn btn-sm text-${row.statusColor} bg-${row.statusColor} bg-opacity-25 rounded- px-3 py-1`}
                    >
                      {row.status}
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-link text-primary text-decoration-none"
                      onClick={() => (window.location.href = "form.html")}
                    >
                      Process
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Info box */}
        <div className="mt-4 bg-primary bg-opacity-10 p-4 rounded">
          <p className="text-primary mb-1">
            <i className="bi bi-info-circle-fill me-2"></i> Upcoming Deliveries
          </p>
          <p className="text-muted">
            You have 2 pending shipments scheduled for delivery in the next 7
            days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Receiving;
