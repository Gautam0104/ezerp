import React from "react";
import { Link } from "react-router-dom";

export default function PharmaScanDashboard() {
  return (
    <div className="container-fluid px-4">
      <div className="d-flex justify-content-between align-items-center shadow p-4 bg-white text-primary">
        <Link
          to="pharmaScan.html"
          className="btn btn-outline-primary fw-semibold fs-4"
        >
          <i className="bi bi-upc-scan me-2"></i>PharmaScan
        </Link>
        <div className="d-flex align-items-center gap-2 header-sub-title">
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-bell-fill"></i>
            <span className="text-secondary">
              John Doe <span className="text-muted">Warehouse Manager</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="bg-white p-3 p-md-4 rounded shadow my-4"
        style={{ minHeight: "calc(100vh - 120px)", overflowY: "auto" }}
      >
        {/* Summary Cards */}
        <div className="row mb-4">
          {[
            {
              color: "#1D4EDF",
              bgColor: "#DBEAFE",
              title: "Received Today",
              count: 12,
              icon: (
                <svg
                  className="text-blue-600"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              )
            },
            {
              color: "warning",
              title: "Pending Put-away",
              bgColor: "#FEF3C7",
              count: 8,
              icon: (
                <svg
                  className="text-warning"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              )
            },
            {
              color: "success",
              bgColor: "#DCFCE7",
              title: "Orders to Fulfill",
              count: 15,
              icon: (
                <svg
                  className="text-success"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              )
            },
            {
              color: "purple",
              bgColor: "#EDE9FE",
              title: "Pallets Built",
              count: 5,
              icon: (
                <svg
                  className="text-purple"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              )
            }
          ].map((item, i) => (
            <div className="col-12 col-sm-6 col-md-3 mb-3" key={i}>
              <div
                className={`bg-${item.color}-100 p-3 rounded d-flex justify-content-between align-items-center shadow-sm`}
                style={{
                  color: item.color,
                  backgroundColor: item.bgColor || "#f8f9fa"
                }}
              >
                <div>
                  <h6 className={`text-${item.color} fw-semibold mb-1`}>
                    {item.title}
                  </h6>
                  <h4 className={`text-${item.color} fw-bold`}>{item.count}</h4>
                </div>
                <div>{item.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Title */}
        <h5 className="fw-semibold text-primary mb-3">
          <i className="bi bi-upc-scan me-2"></i> PharmaScan
        </h5>

        {/* Module Cards */}
        <div className="row g-3 g-md-4">
          {[
            {
              icon: "bi-box-seam",
              title: "Receiving Module",
              desc: "Scan incoming shipments and match expected invoices."
            },
            {
              icon: "bi-arrow-left-right",
              title: "Put-away Module",
              desc: "Assign storage locations for received items."
            },
            {
              icon: "bi-cart",
              title: "Picking/Packing",
              desc: "Streamlined scanning workflow for order fulfillment."
            },
            {
              icon: "bi-box",
              title: "Pallet Builder",
              desc: "Consolidated shipping preparation with scan-to-confirm."
            }
          ].map((mod, i) => (
            <div className="col-12 col-sm-6 col-lg-3" key={i}>
              <div className="bg-white shadow text-center h-100 p-3 rounded d-flex flex-column justify-content-between">
                <i className={`${mod.icon} fs-2 mb-2`}></i>
                <h6 className="fw-semibold">{mod.title}</h6>
                <p className="text-muted small flex-grow-1">{mod.desc}</p>
                <button className="btn btn-primary w-100 mt-2">
                  Open Module
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tip Box */}
        <div className="mt-4 text-muted fw-medium small">
          <strong>Pro Tip:</strong> Use the barcode scanner to quickly process
          items through each module.
        </div>

        {/* Scanner Box */}
        <div className="my-4 d-flex flex-column flex-md-row bg-white shadow p-3 rounded align-items-start align-items-md-center gap-3">
          <div className="text-primary fs-4">
            <i className="bi bi-upc-scan"></i>
          </div>
          <div className="flex-grow-1">
            <h6 className="fw-semibold">Quick Barcode Scanner</h6>
            <p className="text-muted small mb-0">
              Scan any item or location barcode for quick access
            </p>
          </div>
          <div>
            <button className="btn btn-outline-primary w-100 w-md-auto">
              Show Scanner
            </button>
          </div>
        </div>

        {/* Tabs */}
        <ul className="nav nav-tabs mb-3 flex-wrap">
          <li className="nav-item">
            <Link className="nav-link active" to="#">
              Recent Activity
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Analytic
            </Link>
          </li>
        </ul>

        {/* Recent Activity */}
        <div className="bg-white shadow rounded">
          <div className="p-3 border-bottom">
            <h6 className="fw-semibold">Recent Activity</h6>
          </div>
          <div className="p-3">
            {[
              {
                icon: "bi bi-check-circle-fill text-success",
                title: "Shipment SHP-2024-0042 received",
                desc: "25 items processed with 0 discrepancies",
                time: "Today, 10:23 AM"
              },
              {
                icon: "bi bi-check-circle-fill text-success",
                title: "Order ORD-12345 fulfilled",
                desc: "All items picked and packed successfully",
                time: "Today, 9:45 AM"
              },
              {
                icon: "bi bi-exclamation-triangle-fill text-warning",
                title: "Inventory alert for SKU-003",
                desc: "Stock level below minimum threshold",
                time: "Yesterday, 4:12 PM"
              }
            ].map((log, i) => (
              <div className="d-flex mb-3" key={i}>
                <i className={`${log.icon} fs-5 me-3`}></i>
                <div>
                  <p className="mb-0">
                    <strong>{log.title}</strong>
                    <br />
                    {log.desc}
                    <br />
                    <small>{log.time}</small>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
