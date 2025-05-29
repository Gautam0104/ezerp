import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-bg d-flex align-items-center text-dark">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 text-center text-lg-start">
            <h1
              className="display-4 fw-semibold mb-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Thunderbees PharmaScan
            </h1>
            <p className=" mb-4 " data-aos="fade-up" data-aos-delay="300">
              Design captivating Pharmascan and collaborate in real-time from
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
              <Link
                to="/signin"
                className="btn btn-outline-primary btn-lg px-4"
              >
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
      </div>
    </section>
  );
};

export default Hero;
