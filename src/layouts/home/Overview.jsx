import React, { useState } from "react";
import LayoutNavbar from "./Layoutnav.jsx";
import verticalAccordian1 from "../../assets/images/overview/vertical-accordian-1.avif";
import verticalAccordian2 from "../../assets/images/overview/vertical-accordian-2.avif";
import verticalAccordian3 from "../../assets/images/overview/vertical-accordian-3.avif";
//import verticalAccordian4 from "../../assets/images/overview/vertical-accordian-4.avif";

const tabContents = [
  {
    label: "About EzERP Barcode Module",
    image: verticalAccordian1,
    content: (
      <CollapsibleSections
        sections={[
          {
            title: "About EzERP",
            content: (
              <div className="text-muted">
                EzERP significantly reduces costs associated with workforce allocation and administrative
                tasks by integrating barcode technology. This solution ensures accurate inventory data at
                every stage—receiving, shipping, storage, and picking—enhancing operational efficiency
                and data accuracy.
              </div>
            )
          },
          {
            title: "Barcode Module",
            content: (
              <div className="text-muted">
                The integrated system thus maximizes the accuracy of the data collection and improves
               overall efficiency. A barcode system that is getting real-time data from the ERP and feeds
               real-time data back to the ERP solution will ensure timely delivery and accurate
               shipments. This will thereby improve customer’s response time and service
              </div>
            )
          },
          {
            title: "Barcoding",
            content: (
              <div className="text-muted">
                Companies choose EzERP because we excel at solving
                logistical and operational problems, making daily operations
                smoother and more efficient. Our barcode system enhances
                accuracy and connectivity across all operations, driving
                significant improvements in workflow efficiency.
              </div>
            )
          }
        ]}
      />
    )
  },
  {
    label: "Introduction",
    image: verticalAccordian2,
    content: (
      <CollapsibleSections
        sections={[
          {
            title: "Beautify with Thunderbees Designer",
            content: (
              <div className="text-muted">
                EzERP controls incoming and outgoing
               shipments through enforceable rules,
               codes, and customizable routes. It
               employs strategic put-away methods,
               such as analyzing slow and fast
               movers, and uses cross-docking to
               optimize storage and reduce
               movement distance.
              </div>
            )
          },
          // {
          //   title: "Digitize your Handwriting",
          //   content: (
          //     <div className="text-muted">
          //       Convert your handwritten notes into editable text and slides.
          //     </div>
          //   )
          // }
        ]}
      />
    )
  },
  {
    label: "Our Vision And Mission",
    image: verticalAccordian3,
    content: (
      <CollapsibleSections
        sections={[
          {
            title: "Our Vision",
            content: (
              <div className="text-muted">
                Our vision is to be the leader in intelligent EzERP Barcode Module solutions. We aim for a future where every product tells its story securely and transparently. We envision unprecedented operational efficiency for businesses and paramount customer trust, making supply chains fully agile and information readily accessible.
              </div>
            )
          },
          {
            title: "Mission",
            content: (
              <div className="text-muted">
               Our mission is to empower businesses with a secure and fast EzERP Barcode Module. We enable real-time product information updates for consumers, from receiving to last-mile shipment. This ensures data integrity, streamlines operations, and enhances customer experience by communicating features and benefits effectively.
              </div>
            )
          },
          // {
          //   title: "Improve accessibility",
          //   content: (
          //     <div className="text-muted">
          //       Ensure your Pharmascan is accessible to everyone.
          //     </div>
          //   )
          // }
        ]}
      />
    )
  },
  // {
  //   label: "Why Barcoding?",
  //   image: verticalAccordian4,
  //   content: (
  //     <CollapsibleSections
  //       sections={[
  //         {
  //           title: "BE EFFICIENT, ACCURATE, CONNECTED.",
  //           content: (
  //             <div className="text-muted">
  //               Easily share your Pharmascan with others.
  //             </div>
  //           )
  //         },
  //         {
  //           title: "Tag a collaborator",
  //           content: (
  //             <div className="text-muted">
  //               Tag team members to work together in real time.
  //             </div>
  //           )
  //         }
  //       ]}
  //     />
  //   )
  // }
];

const Overview = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <LayoutNavbar />
      <div className="container py-5 px-3 px-md-5" data-aos="fade-up"
     data-aos-duration="3000">
        <div className="row gy-5 align-items-center">
          {/* Left Panel */}
          <div className="col-12 col-md-6">
            <small className="text-uppercase fw-semibold text-primary mb-2 d-block">
              Overview
            </small>
            <h2 className="fw-bold mb-4 fs-2 fs-md-1">
              About EzERP Barcode Module
            </h2>
            <div className="d-flex flex-wrap gap-2 mb-4">
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
          {openIdx === idx && <div className="mt-2">{section.content}</div>}
        </div>
      ))}
    </div>
  );
}

export default Overview;
