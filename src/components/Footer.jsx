import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const sections = t("footer.sections", { returnObjects: true });
  const note = t("footer.footerNote", { returnObjects: true });

  return (
    <footer className="bg-light pt-5 border-top">
      <div className="container">
        <div className="row">
          {Object.entries(sections).map(([section, links], idx) => (
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
              <i className="bi bi-globe2"></i> {note.language}
            </span>
            <span className="badge bg-light border text-dark">
              {note.privacy}
            </span>
            <Link to="#" className="text-muted text-decoration-none">
              {note.consumerHealth}
            </Link>
          </div>

          <div className="d-flex gap-3 flex-wrap text-end">
            <Link to="#" className="text-muted text-decoration-none">
              {note.contact}
            </Link>
            <Link to="#" className="text-muted text-decoration-none">
              {note.privacyLink}
            </Link>
            <Link to="#" className="text-muted text-decoration-none">
              {note.terms}
            </Link>
            <Link to="#" className="text-muted text-decoration-none">
              {note.trademarks}
            </Link>
            <Link to="#" className="text-muted text-decoration-none">
              {note.ads}
            </Link>
            <span>{note.copyright}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
