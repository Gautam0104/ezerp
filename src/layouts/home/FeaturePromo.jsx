import React from "react";
import Image01 from "../../assets/images/featurepromo/interactive-demo-351314.avif";
import bgImage from "../../assets/images/featurepromo/mediademo-background-351314.avif"; // Placeholder for background image
const FeaturePromo = () => {
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
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-12 text-center ">
            <div className="pe-lg-5">
              <span
                className="badge bg-primary bg-opacity-10 text-primary mb-3 px-3 py-2 rounded-pill fw-semibold"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                WALK'S NEW
              </span>
              <h1
                className="display-5 fw-semibold mb-4 text-dark"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Boost your creativity in PowerPoint
              </h1>
              <p
                className="lead text-muted mb-4 "
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Use the latest AI-powered features in PowerPoint and select
                Microsoft 365 apps with a Microsoft 365 subscription
              </p>
              <div
                className=" p-4 rounded-3 mb-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h4 className="text-primary mb-3">
                  <i className="bi bi-stars me-2"></i>
                  Introducing Copilot for PowerPoint
                </h4>
                <button className="btn btn-primary px-4 py-2 rounded-pill fw-semibold">
                  Learn more <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="p-3  rounded-3  d-flex justify-content-center align-items-center">
              <div
                className="rounded-2 overflow-hidden "
                style={{ Height: "400px", width: "60%" }}
              >
                <img
                  src={Image01}
                  alt="PowerPoint Promo"
                  className="img-fluid rounded-2"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturePromo;
