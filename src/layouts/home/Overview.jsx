import React, { useState } from "react";
import LayoutNavbar from "./Layoutnav.jsx";
import verticalAccordian1 from "../../assets/images/overview/vertical-accordian-1.avif";
import verticalAccordian2 from "../../assets/images/overview/vertical-accordian-2.avif";
import verticalAccordian3 from "../../assets/images/overview/vertical-accordian-3.avif";
import { useTranslation } from "react-i18next";

const imageMap = {
  verticalAccordian1,
  verticalAccordian2,
  verticalAccordian3
};

function CollapsibleSections({ sections }) {
  const [openIdx, setOpenIdx] = React.useState(null);

  return (
    <div>
      {sections.map((section, idx) => (
        <div key={section.title} className="border-top pt-4">
          <h5
            className="fw-semibold d-flex align-items-center justify-content-between"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            {section.title}
            <span className="ms-2 text-muted">
              {openIdx === idx ? (
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M5 11l4-4 4 4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M5 7l4 4 4-4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </h5>
          {openIdx === idx && (
            <div className="mt-2 text-muted">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

const Overview = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const tabContents = t("overviewDetails.tabContents", { returnObjects: true });

  const tabData = tabContents.map((tab) => ({
    label: tab.label,
    image: imageMap[tab.image],
    sections: tab.sections
  }));

  const { overview, title } = t("overviewDetails", { returnObjects: true });

  return (
    <>
      <LayoutNavbar />
      <div
        className="container py-5 px-3 px-md-5"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="row gy-5 align-items-center">
          {/* Left Panel */}
          <div className="col-12 col-md-6">
            <small className="text-uppercase fw-semibold text-primary mb-2 d-block">
              {overview}
            </small>
            <h2 className="fw-bold mb-4 fs-2 fs-md-1">{title}</h2>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {tabData.map((tab, idx) => (
                <button
                  key={tab.label}
                  className={`btn rounded-pill px-4 py-2 ${
                    activeTab === idx ? "btn-dark" : "btn-outline-primary"
                  }`}
                  onClick={() => setActiveTab(idx)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <CollapsibleSections sections={tabData[activeTab].sections} />
          </div>

          {/* Right Panel */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div
              className="rounded-4 overflow-hidden shadow"
              style={{
                width: "100%",
                maxWidth: "600px",
                aspectRatio: "16 / 10"
              }}
            >
              <img
                src={tabData[activeTab].image}
                alt={tabData[activeTab].label}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
