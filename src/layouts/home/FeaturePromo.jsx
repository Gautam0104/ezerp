import React from "react";
import Image01 from "../../assets/images/featurepromo/interactive-demo-351314.avif";
import bgImage from "../../assets/images/featurepromo/mediademo-background-351314.avif"; // Placeholder for background image
import ScrollToHashElement from "../../components/ScrollToHashElement";
const FeaturePromo = () => {
  return (
    <>
      <ScrollToHashElement />
      <section
        className="py-5"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#fff"
        }}
        id="featurePromo"
      >
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-12 text-center ">
              <div className="pe-lg-5">
                <span
                  className="text-uppercase fw-semibold text-primary mb-2"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  WHAT'S NEW
                </span>
                <h2
                  className=" text-primary  mb-3"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Boost your creativity in PharmaScan
                </h2>
                <p
                  className=" mb-3 text-primary "
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Use the latest AI-powered features in PharmaScan and select
                  Thunderbees 365 apps with a Thunderbees 365 subscription
                </p>
                <div
                  className=" p-4 rounded-3 mb-4"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h4 className="text-primary mb-3">
                    <i className="bi bi-stars me-2"></i>
                    Introducing Copilot for PharmaScan
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
                    alt="PharmaScan Promo"
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
    </>
  );
};

export default FeaturePromo;
