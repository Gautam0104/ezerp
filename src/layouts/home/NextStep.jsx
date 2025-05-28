import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/images/planandprice/featured-stack-background-351314.avif";
import Image01 from "../../assets/images/contactsale1/contact-sales-01-351314.avif";
import Image02 from "../../assets/images/contactsale2/contact-sales-02-351314.avif";
import Image03 from "../../assets/images/contactsale3/contact-sales-03-351314.avif";
import Image04 from "../../assets/images/contactsale4/contact-sales-04-351314.avif";

const NextStep = () => {
  return (
    <section
      className="py-5"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff"
      }}
    >
      <div className="container my-3">
        <div className="row g-5">
          <div className="col-12 text-start">
            <h1 className="text-primary mb-5">Next steps</h1>

            {/* First Card */}
            <div
              className="card shadow-lg p-3 mb-5 rounded-4 bg-white text-dark"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              <div className="row ">
                <div className="col-md-6 d-flex flex-column justify-content-between align-items-start">
                  <div className="mb-3 p-2">
                    <span
                      className="text-uppercase fw-semibold text-primary"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      Explore more
                    </span>
                  </div>
                  <div className="mb-3 p-2">
                    <h2 className="text-primary">Microsoft Copilot Pro</h2>
                    <p>Supercharge your creativity and productivity.</p>
                  </div>
                  <div className="mb-3 p-2">
                    <button className="btn btn-primary px-4 py-2 rounded fw-semibold">
                      Learn more <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src={Image01}
                    alt="Microsoft Copilot Pro"
                    className="img-fluid w-100 rounded"
                  />
                </div>
              </div>
            </div>

            {/* Image Cards */}
            <div className="row g-4">
              <div className="col-12 col-sm-6 col-lg-4">
                <div
                  className="card h-100 shadow-lg rounded-4"
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <img
                    src={Image02}
                    alt="Contact Sales 1"
                    className="card-img-top img-fluid rounded-4 p-2"
                  />
                  <div className="card-body px-3">
                    <h2
                      className=" text-primary  mb-3"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      Free templates
                    </h2>
                    <p>Create inspiring designs with free templates.</p>
                  </div>
                  <div className="mt-5 mb-3 px-1">
                    <Link
                      to="/plans"
                      className="btn  btn-sm rounded-pill d-inline-flex align-items-center gap-2"
                    >
                      <span className="d-flex justify-content-center align-item-center bg-primary rounded p-1 text-white">
                        <i className="bi bi-chevron-right"></i>
                      </span>{" "}
                      Explore now
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-4">
                <div
                  className="card h-100 shadow-lg rounded-4 "
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <img
                    src={Image03}
                    alt="Contact Sales 2"
                    className="img-fluid w-100 h-100 rounded-4 p-2"
                  />

                  <div className="card-body">
                    <h2
                      className=" text-primary  mb-3"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      Microsoft 365
                    </h2>
                    <p>
                      Maximize your potential with apps to optimize the
                      everyday.
                    </p>
                  </div>
                  <div className="mt-5 mb-3 px-1">
                    <Link
                      to="/plans"
                      className="btn  btn-sm rounded-pill d-inline-flex align-items-center gap-2"
                    >
                      <span className="d-flex justify-content-center align-item-center bg-primary rounded p-1 text-white">
                        <i className="bi bi-chevron-right"></i>
                      </span>{" "}
                      Explore now
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-4">
                <div
                  className="card h-100 shadow-lg rounded-4"
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <img
                    src={Image04}
                    alt="Contact Sales 3"
                    className="card-img-top img-fluid rounded-4 p-2"
                  />
                  <div className="card-body">
                    <h2
                      className=" text-primary  mb-3"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      Clipchamp
                    </h2>
                    <p>Create beautiful videos with ease.</p>
                  </div>
                  <div className="mt-5 mb-3 px-1">
                    <Link
                      to="/plans"
                      className="btn  btn-sm rounded-pill d-inline-flex align-items-center gap-2"
                    >
                      <span className="d-flex justify-content-center align-item-center bg-primary rounded p-1 text-white">
                        <i className="bi bi-chevron-right"></i>
                      </span>{" "}
                      Explore now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStep;
