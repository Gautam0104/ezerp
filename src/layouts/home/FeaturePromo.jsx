import React from "react";
import bgImage from "../../assets/images/featurepromo/mediademo-background-351314.avif";
import ScrollToHashElement from "../../components/ScrollToHashElement";
import { useTranslation } from "react-i18next";

// Define the ScanFeatureCard component
const ScanFeatureCard = ({ title, description }) => (
  <div className="col-md-4 mb-4" data-aos="fade-up">
    <div
      className="card h-100 shadow-sm bg-white text-dark"
      style={{ borderRadius: "16px", padding: "20px", border: "none" }}
    >
      <h5 className="fw-bold mb-2">{title}</h5>
      <p className="mb-0">{description}</p>
    </div>
  </div>
);

const FeaturePromo = () => {
  const { t } = useTranslation();
  const cards = t("scancards.items", { returnObjects: true });

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
            <div className="col-lg-12 text-center">
              <div className="pe-lg-5">
                <span
                  className="text-uppercase fw-semibold text-primary mb-2"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {t("scancards.whatnew")}
                </span>
                <h2
                  className="text-primary mb-3"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {t("scancards.title")}
                </h2>
                <p
                  className="mb-3 text-primary"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {t("scancards.description")}
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                {cards.map((card, index) => (
                  <ScanFeatureCard key={index} {...card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturePromo;
