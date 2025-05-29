import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerData = {
    "What's new": [
      "Thunderbees Pro",
      "Thunderbees Pharmascan",
      "Thunderbees Pharmascan Studio 2",
      "Thunderbees Pharmascan Go 3",
      "Thunderbees Pharmascan",
      "AI in Pharmascans",
      "Explore Thunderbees products",
      "Pharmascans 11 apps"
    ],
    "Thunderbees Store": [
      "Account profile",
      "Download Center",
      "Thunderbees Store Support",
      "Returns",
      "Order tracking",
      "Virtual workshops and training",
      "Thunderbees Store Promise"
    ],
    Education: [
      "Thunderbees in education",
      "Devices for education",
      "Thunderbees Teams for Education",
      "Thunderbees  Education",
      "Office Education",
      "Educator training and development",
      "Deals for students and parents",
      "Azure for students"
    ],
    Business: [
      "Thunderbees Cloud",
      "Thunderbees Security",
      "Azure",
      "Dynamics ",
      "Thunderbees ",
      "Thunderbees Advertising",
      "Thunderbees  Pharmascan",
      "Thunderbees Teams"
    ],
    "Developer & IT": [
      "Thunderbees Developer",
      "Thunderbees Learn",
      "Support for AI marketplace apps",
      "Thunderbees Tech Community",
      "Azure Marketplace",
      "AppSource",
      "Thunderbees Power Platform",
      "Visual Studio"
    ],
    Company: [
      "Careers",
      "About Thunderbees",
      "Company news",
      "Privacy at Thunderbees",
      "Investors",
      "Diversity and inclusion",
      "Accessibility",
      "Sustainability"
    ]
  };

  return (
    <footer className="bg-light pt-5 border-top">
      <div className="container">
        <div className="row">
          {Object.entries(footerData).map(([section, links], idx) => (
            <div key={idx} className="col-6 col-md-4 col-lg-2 mb-4">
              <h6 className="text-dark fw-semibold">{section}</h6>
              <ul className="list-unstyled small">
                {links.map((item, index) => (
                  <li key={index}>
                    <Link
                      to="#"
                      className="text-muted text-decoration-none d-block py-1"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="d-flex flex-wrap justify-content-between align-items-center border-top py-3 mt-4 small text-muted">
          <div className="d-flex align-items-center gap-3 mb-2 mb-md-0">
            <span>
              <i className="bi bi-globe2"></i> English (Canada)
            </span>
            <span className="badge bg-light border text-dark">
              ✔ Your Privacy Choices
            </span>
            <Link to="#" className="text-muted text-decoration-none">
              Consumer Health Privacy
            </Link>
          </div>

          <div className="d-flex gap-3 flex-wrap text-end">
            <Link to="#" className="text-muted text-decoration-none">
              Contact Thunderbees
            </Link>
            <Link to="#" className="text-muted text-decoration-none">
              Privacy
            </Link>
            <Link to="#" className="text-muted text-decoration-none">
              Terms of use
            </Link>
            <Link to="#" className="text-muted text-decoration-none">
              Trademarks
            </Link>
            <Link to="#" className="text-muted text-decoration-none">
              About our ads
            </Link>
            <span>© Thunderbees 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
