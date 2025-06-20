import React from "react";

import Header from "../../components/wms/Header";

const Expedition = () => {
  return (
    <div className="flex-grow px-4">
      {/* Header */}
      <Header title="Expedition" />

      {/* Main Card */}
      <div className="bg-white p-4 rounded shadow mt-4">
        {/* Item Header */}
        <div className="mb-4">
          <span
            className=""
            style={{ backgroundColor: "#E5E7EB", color: "#000000" }}
          >
            <i className="bi bi-box-fill me-1"></i>Item #12345
          </span>
        </div>

        <p className="text-muted mb-4">
          Assign storage location for scanned item
        </p>

        {/* Item Details */}
        <div className="mb-4">
          <h5 className="mb-3 fw-semibold">Item Details</h5>
          <div className="row g-3">
            <div className="col-md-6">
              <small className="text-muted">Product Name</small>
              <p className="fw-bold mb-0">Product XYZ-100</p>
            </div>
            <div className="col-md-6">
              <small className="text-muted">SKU</small>
              <p className="fw-bold mb-0">SKU-12345-XYZ</p>
            </div>
            <div className="col-md-6">
              <small className="text-muted">Quantity</small>
              <p className="fw-bold mb-0">25 units</p>
            </div>
            <div className="col-md-6">
              <small className="text-muted">Batch Number</small>
              <p className="fw-bold mb-0">BATCH-2024-04-15</p>
            </div>
          </div>
        </div>

        {/* Scan Location */}
        <div className="mb-4">
          <h5 className="fw-semibold mb-3">Scan Storage Location</h5>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Scan location barcode"
            />
            <button className="btn btn-outline-primary">Verify</button>
          </div>
        </div>

        {/* Select Location */}
        <div className="mb-4">
          <h5 className="fw-semibold mb-3">Or Select Location</h5>
          <select className="form-select">
            <option>Select a warehouse location</option>
            <option>Location A</option>
            <option>Location B</option>
          </select>
        </div>

        {/* Quarantine Checkbox */}
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="quarantineCheck"
          />
          <label className="form-check-label" htmlFor="quarantineCheck">
            Toggle if this item needs to be quarantined
          </label>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-secondary">Cancel</button>
          <button className="btn btn-outline-primary">
            Confirm Location <i className="bi bi-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expedition;
