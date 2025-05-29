import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SignIn = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 shadow p-5 rounded">
          <h2 className="mb-4 fw-semibold">Sign In</h2>
          <form>
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
                placeholder="••••••••"
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-dark btn-lg">
                Sign In
              </button>
            </div>
          </form>
          <p className="mt-3 text-muted">
            Don't have an account? <a href="/signup">Sign up here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
