import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import bgImage from "../../assets/images/planandprice/featured-stack-background-351314.avif";
import Image01 from "../../assets/images/contactsale1/contact-sales-01-351314.avif";
import Image02 from "../../assets/images/contactsale2/contact-sales-02-351314.avif";
import Image03 from "../../assets/images/contactsale3/contact-sales-03-351314.avif";
import Image04 from "../../assets/images/contactsale4/contact-sales-04-351314.avif";
import ScrollToHashElement from "../../components/ScrollToHashElement";

const NextStep = () => {
  const { t } = useTranslation();

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
        id="nextSteps"
      >
        <div className="container my-3">
          <div className="row g-5">
            <div className="col-12 text-start">
              <h1 className="text-primary mb-5" id="nextStepsheader">
                {t("nextSteps.sectionTitle")}
              </h1>

              {/* First Card */}
              <div
                className="card shadow-lg p-3 mb-5 rounded-4 bg-white text-dark"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <div className="row">
                  <div className="col-md-6 d-flex flex-column justify-content-between align-items-start">
                    <div className="mb-3 p-2">
                      <h2 className="text-primary">
                        {t("nextSteps.cards.0.title")}
                      </h2>
                    </div>
                    <p>{t("nextSteps.cards.0.description")}</p>
                    <h5>{t("nextSteps.servicesTitle")}</h5>
                    <ul>
                      {t("nextSteps.cards.0.services", {
                        returnObjects: true
                      }).map((item, index) => (
                        <li key={index}>
                          <h5>{item}</h5>
                        </li>
                      ))}
                    </ul>
                    <div className="mb-3 p-2">
                      <button className="btn btn-primary px-4 py-2 rounded fw-semibold">
                        {t("nextSteps.learnMore")}{" "}
                        <i className="bi bi-arrow-right ms-2"></i>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      src={Image01}
                      alt="Thunderbees Pharmascan Pro"
                      className="img-fluid w-100 rounded"
                    />
                  </div>
                </div>
              </div>

              {/* Image Cards */}
              <div className="row g-4">
                {[Image02, Image03, Image04].map((image, idx) => (
                  <div key={idx} className="col-12 col-sm-6 col-lg-4">
                    <div
                      className="card h-100 shadow-lg rounded-4"
                      data-aos="fade-up"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                    >
                      <img
                        src={image}
                        alt={`Contact Sales ${idx + 1}`}
                        className="card-img-top img-fluid rounded-4 p-2"
                      />
                      <div className="card-body px-3">
                        <h2
                          className="text-primary mb-3"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        >
                          {t(`nextSteps.cards.${idx + 1}.title`)}
                        </h2>
                        <p>{t(`nextSteps.cards.${idx + 1}.description`)}</p>

                        {t(`nextSteps.cards.${idx + 1}.subsections`, {
                          returnObjects: true
                        }).map((sub, subIdx) => (
                          <div key={subIdx}>
                            <h5 className="text-primary mb-3">
                              {sub.subTitle}
                            </h5>
                            {sub.type === "list" ? (
                              <ul>
                                {sub.content.map((item, liIdx) => (
                                  <li key={liIdx}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              <p>{sub.content}</p>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 mb-3 px-1">
                        <Link
                          to="/plans"
                          className="btn btn-sm rounded-pill d-inline-flex align-items-center gap-2"
                        >
                          <span className="d-flex justify-content-center align-item-center bg-primary rounded p-1 text-white">
                            <i className="bi bi-chevron-right"></i>
                          </span>
                          {t("nextSteps.exploreNow")}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NextStep;
