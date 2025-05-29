import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/hero.css";
import Image01 from "../../assets/images/hero/hero-background-351314-1.avif"; // Replace with actual image path

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const heroImage = Image01; // Replace with actual image

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    // Mobile view with CSS Grid
    return (
      <section className="hero-grid-mobile">
        <div className="hero-image-container">
          <img src={heroImage} alt="PharmaScan Hero" className="hero-image" />
        </div>
        <div className="hero-buttons-mobile">
          <Link
            to="/signin"
            className="btn btn-outline-primary btn-lg w-100 mb-3"
          >
            Sign in
          </Link>
        </div>
        <div className="hero-content-mobile">
          <h1 className="display-5 fw-bold">Thunderbees PharmaScan</h1>
          <p className="mb-3">
            Design captivating Pharmascan and collaborate in real-time from
            any device.
          </p>
          <Link to="/signup" className="btn btn-primary btn-lg w-100 mb-3">
            Sign up for free
          </Link>
          <Link
            to="/plans"
            className="btn btn-sm rounded-pill d-inline-flex align-items-center gap-2"
          >
            <span className="bg-primary text-white p-2 rounded">
              <i className="bi bi-chevron-right" />
            </span>
            See plans and pricing
          </Link>
        </div>
      </section>
    );
  }

  // Desktop: Full-screen image with content overlay
  return (
    <section
      className="hero-fullscreen position-relative text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="container h-100 d-flex flex-column justify-content-center position-relative z-2">
        <div className="col-lg-8 text-start">
          <h1
            className="display-4 fw-semibold mb-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Thunderbees PharmaScan
          </h1>
          <p className=" mb-4 " data-aos="fade-up" data-aos-delay="300">
            Design captivating Pharmascanand collaborate in real-time from
            any device.
          </p>

          <div
            className="d-flex gap-3 flex-wrap mb-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link to="/signup" className="btn btn-primary btn-lg px-4">
              Sign up for free
            </Link>
            <Link to="/signin" className="btn btn-outline-primary btn-lg px-4">
              Sign in
            </Link>
          </div>

          <div
            className="d-flex gap-3 flex-wrap mb-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link
              to="/plans"
              className="btn  btn-sm rounded-pill d-inline-flex align-items-center gap-2"
            >
              <span className="d-flex justify-content-center align-item-center bg-primary rounded p-2 text-white">
                <i className="bi bi-chevron-right"></i>
              </span>{" "}
              See plans and pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
