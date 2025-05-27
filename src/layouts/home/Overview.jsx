import React, { useState } from "react";
import LayoutNavbar from "./Layoutnav.jsx";
import verticalAccordian1 from "../../assets/images/overview/vertical-accordian-1.avif";
import verticalAccordian2 from "../../assets/images/overview/vertical-accordian-2.avif";
import verticalAccordian3 from "../../assets/images/overview/vertical-accordian-3.avif";  
import verticalAccordian4 from "../../assets/images/overview/vertical-accordian-4.avif";

const tabContents = [
  {
    label: "Generate ideas",
    image: verticalAccordian1, 
    content: (
      <CollapsibleSections
        sections={[
          {
            title: "Start with Microsoft Copilot",
            content: (
              <div className="text-muted">
                Generate a presentation outline instantly with Copilot in Microsoft 365.
              </div>
            ),
          },
          {
            title: "Expand your ideas",
            content: (
              <div className="text-muted">
                Ask for more information or a new slide on your topic directly through Copilot in PowerPoint.
              </div>
            ),
          },
          {
            title: "Use a free template",
            content: (
              <div className="text-muted">
                Choose from thousands of customizable templates to kickstart your slideshow.
              </div>
            ),
          },
        ]}
      />
    ),
  },
  {
    label: "Create with confidence",
    image: verticalAccordian2,
    content: (
      <CollapsibleSections
        sections={[
          {
            title: "Beautify with Thunderbees Designer",
            content: (
              <div className="text-muted">
                Instantly enhance your slides with beautiful, AI-powered designs.
              </div>
            ),
          },
          {
            title: "Digitize your Handwriting",
            content: (
              <div className="text-muted">
                Convert your handwritten notes into editable text and slides.
              </div>
            ),
          },
        ]}
      />
    ),
  },
  {
    label: "Evoke engagement",
    image: verticalAccordian3,
    content: (
      <CollapsibleSections
        sections={[
          {
            title: "Add a video explainer",
            content: (
              <div className="text-muted">
                Make your presentations more engaging with video explainers.
              </div>
            ),
          },
          {
            title: "Rehearse with Speaker Coach",
            content: (
              <div className="text-muted">
                Practice your delivery and get feedback with Speaker Coach.
              </div>
            ),
          },
          {
            title: "Improve accessibility",
            content: (
              <div className="text-muted">
                Ensure your presentation is accessible to everyone.
              </div>
            ),
          },
        ]}
      />
    ),
  },
  {
    label: "Share and collaborate",
    image: verticalAccordian4,
    content: (
      <CollapsibleSections
        sections={[
          {
            title: "Share with anyone",
            content: (
              <div className="text-muted">
                Easily share your presentation with others.
              </div>
            ),
          },
          {
            title: "Tag a collaborator",
            content: (
              <div className="text-muted">
                Tag team members to work together in real time.
              </div>
            ),
          },
        ]}
      />
    ),
  },
];

const Overview = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <LayoutNavbar />

      <div className="container  min-vh-100 py-5 px-5">
        <div className="row">
          {/* Left Panel */}
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <small className="text-uppercase fw-semibold text-primary mb-2">Overview</small>
            <h2 className="display-5 fw-bold mb-4">Pump up your presentations</h2>
            <div className="d-flex gap-3 mb-4 flex-wrap">
              {tabContents.map((tab, idx) => (
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
            {tabContents[activeTab].content}
          </div>

          {/* Right Panel */}
          <div className="col-md-6 position-relative d-flex align-items-center justify-content-center">
            <div
              className="position-absolute rounded-4 overflow-hidden"
              style={{
                width: "600px",
                height: "380px",
                top: "10%",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={tabContents[activeTab].image}
                alt={tabContents[activeTab].label}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

function CollapsibleSections({ sections }) {
  const [openIdx, setOpenIdx] = React.useState(null);

  return (
    <div>
      {sections.map((section, idx) => (
        <div key={section.title} className="border-top pt-4">
          <h5
            className="fw-semibold d-flex align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            {section.title}
            <span className="ms-2 text-muted" style={{ display: "inline-flex", alignItems: "center" }}>
              {openIdx === idx ? (
                // Chevron Up SVG
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 18 18">
                  <path d="M5 11l4-4 4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                // Chevron Down SVG
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 18 18">
                  <path d="M5 7l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </span>
          </h5>
          {openIdx === idx && (
            <div className="mt-2">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Overview;
