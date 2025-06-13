import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Details = () => {
  const { t } = useTranslation();

  const items = t("details.items", { returnObjects: true });
  const learnMore = t("details.learnMore");

  return (
    <section className="py-5" style={{ backgroundColor: "#fdfcf9" }}>
      <div className="container">
        <hr style={{ borderColor: "#000" }} />
        <ul className="list-group list-group-flush">
          {items.map((text, i) => {
            return (
              <li key={i} className="list-group-item bg-transparent border-0">
                {text
                  .split(/\.\s*(?=Learn more|Saiba mais)/)
                  .map((part, idx) => (
                    <span key={idx}>
                      {part.includes(learnMore) ? (
                        <>
                          {part.replace(/Learn more|Saiba mais\./, "")}{" "}
                          <Link
                            to="#"
                            className="text-primary text-decoration-underline"
                          >
                            {learnMore}
                          </Link>
                          .
                        </>
                      ) : (
                        part
                      )}
                    </span>
                  ))}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Details;
