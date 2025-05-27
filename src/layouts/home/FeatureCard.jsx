import React from "react";
import { Link } from "react-router-dom";
import KeyFeaturesImage1 from "../../assets/images/keyfeature/key-features-1-351314.avif";
import KeyFeaturesImage2 from "../../assets/images/keyfeature/key-features-2-351314.avif";
import KeyFeaturesImage3 from "../../assets/images/keyfeature/key-features-3-351314.avif";

const FeatureCard = ({ title, description, buttonLabel, imageUrl }) => {
  return (
    <div className="col-md-4 mb-4">
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
          <p className="card-text text-primary mb-4">{description}</p>
          <Link
            href="#"
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
  const features = [
    {
      title: "Copilot in PowerPoint",
      description:
        "Enjoy faster Copilot performance, enhanced creative tools, and improved features designed to boost .",
      buttonLabel: "Learn more",
      imageUrl: KeyFeaturesImage1 // Replace with your image path
    },
    {
      title: "Rehearse with Speaker Coach",
      description:
        "Improve your pacing and pitch to speak more confidently with help from an AI-driven coach.",
      buttonLabel: "Learn more",
      imageUrl: KeyFeaturesImage2 // Replace with your image path
    },
    {
      title: "Get more Microsoft 365",
      description:
        "Get the apps, security, and storage you need to accomplish your goals with Microsoft 365.",
      buttonLabel: "Learn more",
      imageUrl: KeyFeaturesImage3 // Replace with your image path
    }
  ];

  return (
    <div className="container text-center my-5">
      <small className="text-uppercase fw-semibold text-primary mb-2">
        Key Features
      </small>
      <h2 className="mb-4">Supercharge your presentations</h2>
      <div className="row">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
