import React from "react";

import Header from "../../components/wms/Header";

const PickingPage = () => {
  return (
    <div className="flex-grow px-4 ">
      {/* Header */}
      <Header title="Picking" />

      <div className="bg-white p-4 rounded shadow mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <p className="text-muted mb-0">
            Manage order fulfillment and picking
          </p>
          <button className="btn btn-outline-primary d-flex align-items-center">
            <i className="bi bi-barcode me-2"></i> Scan Order Barcode
          </button>
        </div>

        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by order Id or customer"
          />
        </div>

        <div className="bg-white rounded mb-4">
          <div className="p-2 border">
            <h2 className="h5 fw-semibold">Orders Ready for Picking</h2>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Priority</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: "ORD-12345",
                    customer: "Acme Corp",
                    date: "2024-06-10",
                    items: 5,
                    priority: "High",
                    color: "danger"
                  },
                  {
                    id: "ORD-12346",
                    customer: "TechSolutions Inc",
                    date: "2024-06-11",
                    items: 3,
                    priority: "Medium",
                    color: "warning"
                  },
                  {
                    id: "ORD-12347",
                    customer: "Global Enterprises",
                    date: "2024-06-12",
                    items: 7,
                    priority: "Low",
                    color: "success"
                  },
                  {
                    id: "ORD-12348",
                    customer: "Local Business LLC",
                    date: "2024-06-13",
                    items: 2,
                    priority: "High",
                    color: "danger"
                  }
                ].map((order, idx) => (
                  <tr key={idx}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.date}</td>
                    <td>{order.items}</td>
                    <td>
                      <span
                        className={`bg-${order.color}-subtle text-${order.color} px-2 py-1 rounded d-inline-block`}
                      >
                        {order.priority}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-primary">
                        Process <i className="bi bi-arrow-right ms-2"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded">
          <div className="p-3 border-bottom">
            <h2 className="h5 fw-semibold">Recent Activity</h2>
          </div>
          <div className="p-3">
            <div className="d-flex align-items-start mb-3">
              <i className="bi bi-check-circle-fill text-success fs-5 me-3"></i>
              <div>
                <p className="fw-semibold mb-0">Order ORD-12340 completed</p>
                <p className="text-muted mb-0">
                  All items picked and packed successfully
                </p>
                <p className="text-secondary small mb-0">Today, 10:23 AM</p>
              </div>
            </div>
            <div className="d-flex align-items-start mb-3">
              <i className="bi bi-exclamation-triangle-fill text-warning fs-5 me-3"></i>
              <div>
                <p className="fw-semibold mb-0">
                  Inventory alert for Order ORD-12342
                </p>
                <p className="text-muted mb-0">
                  Item SKU-789 has insufficient stock
                </p>
                <p className="text-secondary small mb-0">Today, 9:45 AM</p>
              </div>
            </div>
            <div className="d-flex align-items-start">
              <i className="bi bi-check-circle-fill text-success fs-5 me-3"></i>
              <div>
                <p className="fw-semibold mb-0">Order ORD-12339 completed</p>
                <p className="text-muted mb-0">
                  All items picked and packed successfully
                </p>
                <p className="text-secondary small mb-0">Yesterday, 4:12 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickingPage;
