import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import KeyFeaturesImage1 from "../../assets/images/keyfeature/key-features-10-351314.avif";
import KeyFeaturesImage2 from "../../assets/images/keyfeature/key-features-2-351314.avif";
import KeyFeaturesImage3 from "../../assets/images/keyfeature/key-features-3-351314.avif";

const imageMap = {
  feature1: KeyFeaturesImage1,
  feature2: KeyFeaturesImage2,
  feature3: KeyFeaturesImage3
};

const FeatureCard = ({ title, description, buttonLabel, imageKey }) => {
  const imageUrl = imageMap[imageKey];

  return (
    <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-duration="3000">
      <div
        className="card h-100"
        style={{
          borderRadius: "24px",
          boxShadow: "0 2px 12px #0001",
          border: "none",
          padding: "0"
        }}
      >
        <img
          src={imageUrl}
          className="card-img-top"
          alt={title}
          style={{
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
            height: "180px",
            objectFit: "cover"
          }}
        />
        <div className="card-body d-flex flex-column align-items-start">
          <h5 className="card-title fw-semibold">{title}</h5>
          <p className="card-text text-primary mb-4 text-start">
            {description}
          </p>
          <Link
            to="#"
            className="btn"
            style={{
              background: "#001a2d",
              color: "#fff",
              borderRadius: "12px",
              padding: "10px 22px",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#fff1",
                marginRight: "8px",
                fontSize: "1.1rem"
              }}
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5 3l5 5-5 5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

const KeyFeatures = () => {
  const { t } = useTranslation();
  const features = t("keyfeatures.items", { returnObjects: true });

  return (
    <div className="container text-center my-5">
      <small className="text-uppercase fw-semibold text-primary mb-2">
        {t("keyfeatures.title")}
      </small>
      <h2 className="mb-4" data-aos="fade-up" data-aos-duration="300">
        {t("keyfeatures.description")}
      </h2>
      <div className="row">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            buttonLabel={t("keyfeatures.learnmore")}
            imageKey={feature.imageKey}
          />
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
