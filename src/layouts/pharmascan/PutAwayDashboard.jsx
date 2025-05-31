import React from 'react';
import { Link } from 'react-router-dom';

const PutAwayDashboard = () => {
   return (
    <div className="flex-grow px-4 py-3">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center shadow p-4 bg-white text-primary mb-4">
        <div>
          <Link to="shipment.html" className="btn btn-outline-primary fs-4 fw-semibold">
            <i className="bi bi-box-arrow-in-up me-2"></i>Put Away
          </Link>
        </div>
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-bell-fill me-2"></i>
          <span>
            John Doe <span className="text-muted">Warehouse Manager</span>
          </span>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow my-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <p className="text-muted mb-0">Assign storage locations to received inventory items</p>
          <button className="btn btn-primary d-flex align-items-center">
            <i className="fas fa-file-alt me-2"></i> Generate Put-away Report
          </button>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-lg-4">
            <div className="bg-primary bg-opacity-10 p-3 rounded d-flex align-items-center">
              <div>
                <p className="text-primary fs-5 fw-semibold">Pending Items</p>
                <h2 className="text-primary fw-bold">2</h2>
              </div>
              <i className="fas fa-box text-primary fs-2 ms-3"></i>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-success bg-opacity-10 p-3 rounded d-flex align-items-center">
              <div>
                <p className="text-success fs-5 fw-semibold">Stored Items</p>
                <h2 className="text-success fw-bold">1</h2>
              </div>
              <i className="fas fa-check-circle text-success fs-2 ms-3"></i>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-warning bg-opacity-25 p-3 rounded d-flex align-items-center">
              <div>
                <p className="text-warning fs-5 fw-semibold">Quarantined Items</p>
                <h2 className="text-warning fw-bold">1</h2>
              </div>
              <i className="fas fa-exclamation-circle text-warning fs-2 ms-3"></i>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label text-muted">Scan Item for Put-away</label>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Scan or enter item barcode/SKU" />
            <button className="btn btn-outline-secondary">Process Item</button>
          </div>
        </div>

        <div className="mb-4">
          <input type="text" className="form-control" placeholder="Search by SKU or product name" />
        </div>

        <div className="mb-4">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link active" to="#">Pending</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Stored</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">All Items</Link>
            </li>
          </ul>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>SKU</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Batch Number</th>
                <th>Status</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SKU-001</td>
                <td>Product Alpha</td>
                <td>25</td>
                <td>BATCH-2024-001</td>
                <td><span className="badge bg-warning text-dark">Pending</span></td>
                <td>Not assigned</td>
                <td><button className="btn btn-link text-primary">Assign Location</button></td>
              </tr>
              <tr>
                <td>SKU-002</td>
                <td>Product Beta</td>
                <td>15</td>
                <td>BATCH-2024-002</td>
                <td><span className="badge bg-warning text-dark">Pending</span></td>
                <td>Not assigned</td>
                <td><button className="btn btn-link text-primary">Assign Location</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 bg-primary bg-opacity-10 p-4 rounded">
          <p className="text-primary fw-semibold mb-1">
            <i className="fas fa-box me-2"></i> Pending Put-away
          </p>
          <p className="text-muted mb-0">
            There are 2 items pending put-away. Scan items or select from the list above to assign storage locations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PutAwayDashboard;
