import React from 'react';
import { Link } from 'react-router-dom';

const PackingDashboard = () => {
  return (
    <div className="flex-grow px-4">
      <div className="d-flex justify-content-between align-items-center shadow p-4 bg-white text-primary mb-4">
        <div>
          <Link to="shipment.html" className="btn btn-outline-primary fw-semibold fs-4">
            <i className="bi bi-cart-check me-2"></i>Packing
          </Link>
        </div>
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-bell-fill"></i>
          <span className="text-secondary">
            John Doe <span className="text-muted">Warehouse Manager</span>
          </span>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="text-muted mb-0">Manage order fulfillment and picking</p>
          <button className="btn btn-primary d-flex align-items-center">
            <i className="bi bi-barcode me-2"></i>Scan Order Barcode
          </button>
        </div>

        <div className="mb-3">
          <input
            type="text"
            placeholder="Search by order Id or customer"
            className="form-control"
          />
        </div>

        <div className="mb-4">
          <div className="border p-2">
            <h2 className="h5 fw-semibold">Orders Ready for Picking</h2>
          </div>

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
                  id: 'ORD-12345',
                  customer: 'Acme Corp',
                  date: '2024-06-10',
                  items: 5,
                  priority: 'High',
                  priorityClass: 'bg-danger text-white',
                },
                {
                  id: 'ORD-12346',
                  customer: 'TechSolutions Inc',
                  date: '2024-06-11',
                  items: 3,
                  priority: 'Medium',
                  priorityClass: 'bg-warning text-dark',
                },
                {
                  id: 'ORD-12347',
                  customer: 'Global Enterprises',
                  date: '2024-06-12',
                  items: 7,
                  priority: 'Low',
                  priorityClass: 'bg-success text-white',
                },
                {
                  id: 'ORD-12348',
                  customer: 'Local Business LLC',
                  date: '2024-06-13',
                  items: 2,
                  priority: 'High',
                  priorityClass: 'bg-danger text-white',
                },
              ].map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>{order.items}</td>
                  <td>
                    <span className={`badge ${order.priorityClass}`}>{order.priority}</span>
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

        <div className="bg-white border rounded">
          <div className="border-bottom p-3">
            <h2 className="h5 fw-semibold">Recent Activity</h2>
          </div>
          <div className="p-3">
            <div className="d-flex align-items-start mb-3">
              <i className="bi bi-check-circle-fill text-success fs-4 me-3"></i>
              <div>
                <p className="fw-semibold mb-1">Order ORD-12340 completed</p>
                <p className="text-muted mb-1">All items picked and packed successfully</p>
                <p className="text-secondary small mb-0">Today, 10:23 AM</p>
              </div>
            </div>
            <div className="d-flex align-items-start mb-3">
              <i className="bi bi-exclamation-triangle-fill text-warning fs-4 me-3"></i>
              <div>
                <p className="fw-semibold mb-1">Inventory alert for Order ORD-12342</p>
                <p className="text-muted mb-1">Item SKU-789 has insufficient stock</p>
                <p className="text-secondary small mb-0">Today, 9:45 AM</p>
              </div>
            </div>
            <div className="d-flex align-items-start">
              <i className="bi bi-check-circle-fill text-success fs-4 me-3"></i>
              <div>
                <p className="fw-semibold mb-1">Order ORD-12339 completed</p>
                <p className="text-muted mb-1">All items picked and packed successfully</p>
                <p className="text-secondary small mb-0">Yesterday, 4:12 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackingDashboard;
