import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, checkEmailExists } from "../services/authService";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const existing = await checkEmailExists(formData.email);
      if (existing.data.length > 0) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email already registered!"
        });
      }

      await registerUser(formData);

      Swal.fire({
        icon: "success",
        title: "Account Created!",
        text: "You can now sign in.",
        timer: 2000,
        showConfirmButton: false
      });

      navigate("/signin");
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong!"
      });
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 shadow p-5 rounded">
          <h2 className="mb-4 fw-semibold">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="John Doe"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="you@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Create a password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
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
