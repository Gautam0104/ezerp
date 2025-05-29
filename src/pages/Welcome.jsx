import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Welcome = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      // Use user.name or fallback to user.email or 'User'
      setUserName(user.name || user.email || "User");
    } else {
      // No user found, redirect to signin page (not welcome itself)
      navigate("/signin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-gradient">
      <div className="text-center shadow-lg p-5 rounded-4 bg-white animate-fade">
        <h1 className="display-5 fw-bold text-primary mb-3">
          👋 Welcome, {userName}
        </h1>
        <p className="lead text-secondary">
          You’ve successfully logged into <strong>PharmaScan</strong>.
        </p>
        <button onClick={handleLogout} className="btn btn-outline-danger mt-4">
          Logout
        </button>
      </div>

      <style>{`
        .bg-gradient {
          background: linear-gradient(135deg, #c2e9fb, #a1c4fd);
        }
        .animate-fade {
          animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Welcome;
