import React from "react";

import Header from "../../components/wms/Header";

function ProductForm() {
  return (
    <div className="container-fluid px-4">
      <Header title="Product" />
      <div
        className="bg-white rounded shadow mt-4 p-4"
        style={{ height: "calc(100vh - 100px)", overflowY: "auto" }}
      >
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="p-3 border rounded shadow-sm">
              <div className="mb-3">
                <label className="form-label">Upload Image</label>
                <div className="border rounded p-3 d-flex justify-content-center align-items-center">
                  <span
                    className="d-flex justify-content-center align-items-center rounded bg-light"
                    style={{ width: 30, height: 30 }}
                  >
                    <i className="bi bi-plus"></i>
                  </span>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Weight (g)</label>
                <input type="number" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Size</label>
                <input type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Packaging</label>
                <input type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Special Storage</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="specialStorage1"
                  />
                  <label className="form-check-label" htmlFor="specialStorage1">
                    Refrigerated
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="specialStorage2"
                  />
                  <label className="form-check-label" htmlFor="specialStorage2">
                    Freezer
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="p-3 border rounded shadow-sm">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Category</label>
                <input type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" rows="3"></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">Type</label>
                <select className="form-select">
                  <option>Tablet</option>
                  <option>Capsule</option>
                  <option>Liquid</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Barcode</label>
                <input type="file" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Quantity</label>
                <input type="number" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Manufacture Date</label>
                <input type="date" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Expiry Date</label>
                <input type="date" className="form-control" />
              </div>

              <div className="flex justify-end my-2">
            <button className=" px-4 py-2 rounded m-2 btn btn-outline-danger" >
             Cancel
            </button>
            <button className=" px-4 py-2 rounded btn btn-outline-success" >
             Save
            </button>
           </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
