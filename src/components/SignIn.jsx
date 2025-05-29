// src/pages/SignIn.js
import React, { useState } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase";

const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      const user = userCredential.user;

      Swal.fire({
        icon: "success",
        title: "Login successful!",
        timer: 1500,
        showConfirmButton: false
      });

      localStorage.setItem(
        "user",
        JSON.stringify({ email: user.email, name: user.displayName })
      );

      window.location.href = "https://gautam0104.github.io/wms/";
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: error.message
      });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      Swal.fire({
        icon: "success",
        title: "Google Sign-In successful!",
        timer: 1500,
        showConfirmButton: false
      });

      localStorage.setItem(
        "user",
        JSON.stringify({ email: user.email, name: user.displayName })
      );

      window.location.href = "https://gautam0104.github.io/wms/";
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Google Sign-In failed",
        text: error.message
      });
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 shadow p-5 rounded">
          <h2 className="mb-4 fw-semibold">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="you@example.com"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="••••••••"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-grid gap-2 mb-3">
              <button type="submit" className="btn btn-dark btn-lg">
                Sign In
              </button>
            </div>
          </form>

          <div className="d-grid gap-2 mb-3">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-danger btn-lg"
            >
              <i className="bi bi-google me-2"></i> Sign in with Google
            </button>
          </div>

          <p className="mt-3 text-muted">
            Don't have an account? <a href="/signup">Sign up here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
