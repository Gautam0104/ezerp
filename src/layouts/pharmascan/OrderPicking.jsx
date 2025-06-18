import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/wms/Header";

const OrderPicking = () => {
  return (
    <div className="flex-grow px-4 ">
      {/* Header */}
      <Header title="Order" />

      {/* Main Card */}
      <div className="bg-white shadow-sm p-4 rounded mt-4">
        {/* Order ID */}
        <p className="mb-4">
          Order ID: <strong>ORD-12345</strong>
        </p>

        {/* Tabs */}
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <Link className="nav-link active" to="#">
              Picking
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-muted" to="#">
              Packing
            </Link>
          </li>
        </ul>

        {/* Scan Section */}
        <div className="bg-light rounded p-3 mb-4">
          <p className="fw-semibold">Scan Item</p>
          <div className="d-flex gap-2 mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Scan item barcode"
            />
            <button className="btn btn-outline-primary">Verify Scan</button>
          </div>
        </div>

        {/* Order Items Table */}
        <div>
          <p className="fw-semibold">Order Items</p>
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>SKU</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Lot</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SKU001</td>
                  <td>Product A</td>
                  <td>5</td>
                  <td>LOT-A123</td>
                  <td>
                    <span className="px-2 py-1 rounded d-inline-block" style={{backgroundColor:"#FEF9C3", color:"#A16207"}}>Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>SKU002</td>
                  <td>Product B</td>
                  <td>3</td>
                  <td>LOT-B456</td>
                  <td>
                    <span className="px-2 py-1 rounded d-inline-block " style={{backgroundColor:"#FEF9C3", color:"#A16207"}}>Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>SKU003</td>
                  <td>Product C</td>
                  <td>2</td>
                  <td>LOT-C789</td>
                  <td>
                    <span className="px-2 py-1 rounded d-inline-block" style={{backgroundColor:"#FEF9C3", color:"#A16207"}}>Pending</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="btn btn-outline-success mt-3">Complete Picking</button>
        </div>
      </div>
    </div>
  );
};

export default OrderPicking;
