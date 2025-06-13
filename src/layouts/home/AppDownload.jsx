import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import windowLogo from "../../assets/images/download/output-pngtools.png";

const AppDownload = () => {
  const { t } = useTranslation("appDownload");
  const sections = t("sections", { returnObjects: true });

  return (
    <section style={{ backgroundColor: "#fdfcf9" }}>
      {sections.map((section, index) => (
        <div
          className="container py-5"
          data-aos="fade-up"
          data-aos-delay="300"
          key={index}
        >
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="pe-lg-5 d-flex flex-column justify-content-center align-items-center">
                <span className="text-uppercase fw-semibold text-primary mb-2">
                  {section.tagline}
                </span>
                <h2 className="text-primary mb-3">{section.title}</h2>
                <p className="mb-3 text-primary">{section.description}</p>
                <div className="mb-3 mt-3" style={{ maxWidth: "40px" }}>
                  <img
                    src={windowLogo}
                    alt="Windows Logo"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="mb-3">
                  <Link
                    to="/plans"
                    className="btn btn-sm rounded-pill d-inline-flex align-items-center gap-2"
                  >
                    <span
                      className="d-flex justify-content-center align-item-center bg-primary rounded text-white"
                      style={{ width: "3px", height: "20px" }}
                    ></span>
                    <span className="fw-semibold">{section.platform}</span>
                  </Link>
                  <p>{section.platformText}</p>
                </div>
                <div className="mb-3">
                  <Link
                    to="/plans"
                    className="btn btn-sm rounded-pill d-inline-flex align-items-center gap-2"
                  >
                    <span className="d-flex justify-content-center align-item-center bg-primary rounded p-1 text-white">
                      <i className="bi bi-chevron-right"></i>
                    </span>
                    {section.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AppDownload;
