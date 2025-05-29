import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 shadow p-5 rounded">
          <h2 className="mb-4 fw-semibold">Sign Up</h2>
          <form>
            <div className="mb-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Create a password"
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-dark btn-lg">
                Create Account
              </button>
            </div>
          </form>
          <p className="mt-3 text-muted">
            Already have an account? <a href="/signin">Sign in here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
