import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import ScrollToHashElement from "../../components/ScrollToHashElement";

const Faq = () => {
  const { t } = useTranslation();
  const faqData = t("faq.questions", { returnObjects: true });

  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleExpandAll = () => setOpenIndexes(faqData.map((_, i) => i));
  const handleCollapseAll = () => setOpenIndexes([]);

  return (
    <>
      <ScrollToHashElement />
      <section
        className="py-5"
        data-aos="fade-up"
        data-aos-delay="500"
        style={{ backgroundColor: "#fdfcf9" }}
      >
        <div
          className="container"
          style={{
            fontFamily: "Segoe UI, Arial, sans-serif",
            maxHeight: "100vh"
          }}
          id="faq"
        >
          <h1 style={{ fontSize: 44, fontWeight: 400, marginBottom: 32 }}>
            {t("faq.title")}
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 12,
              marginBottom: 24
            }}
          >
            <button
              onClick={handleExpandAll}
              style={{
                padding: "8px 20px",
                border:
                  openIndexes.length === faqData.length
                    ? "2px solid #111820"
                    : "2px dashed #ccc",
                borderRadius: 6,
                background: "#fdfcf9",
                color: "#888",
                fontWeight: 500,
                cursor: "pointer"
              }}
              disabled={openIndexes.length === faqData.length}
            >
              {t("faq.expandAll")}
            </button>
            <button
              onClick={handleCollapseAll}
              style={{
                padding: "8px 20px",
                border:
                  openIndexes.length === 0
                    ? "2px solid #111820"
                    : "2px dashed #ccc",
                borderRadius: 6,
                background: "#fdfcf9",
                color: "#888",
                fontWeight: 500,
                cursor: "pointer"
              }}
              disabled={openIndexes.length === 0}
            >
              {t("faq.collapseAll")}
            </button>
          </div>
          <div>
            {faqData.map((item, idx) => (
              <div key={idx}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    padding: "24px 0 8px 0",
                    borderTop: idx === 0 ? "none" : "1px solid #e5e5e5"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 24
                    }}
                  >
                    <span
                      style={{
                        color: "#b2b2b2",
                        fontWeight: 500,
                        fontSize: 18,
                        minWidth: 40
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}/
                    </span>
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: 20,
                          marginBottom: 6
                        }}
                      >
                        {item.question}
                      </div>
                      {openIndexes.includes(idx) && (
                        <div
                          style={{
                            color: "#222",
                            fontSize: 17,
                            marginTop: 2
                          }}
                        >
                          {/* Use <Trans> only when link is needed */}
                          {item.answer.includes("<link>") ? (
                            <Trans
                              i18nKey={`faq.questions.${idx}.answer`}
                              components={{
                                link: (
                                  <Link
                                    to={idx === 1 ? "/signup" : "/languages"}
                                    style={{
                                      color: "#0067b8",
                                      textDecoration: "underline"
                                    }}
                                  />
                                )
                              }}
                            />
                          ) : (
                            item.answer
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => handleToggle(idx)}
                    style={{
                      width: 38,
                      height: 38,
                      background: "#111820",
                      color: "#fff",
                      border: "none",
                      borderRadius: 8,
                      fontSize: 28,
                      fontWeight: 400,
                      cursor: "pointer",
                      marginTop: 6,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background 0.2s"
                    }}
                    aria-label={
                      openIndexes.includes(idx) ? "Collapse" : "Expand"
                    }
                  >
                    {openIndexes.includes(idx) ? "−" : "+"}
                  </button>
                </div>
                {idx < faqData.length - 1 && (
                  <div style={{ borderBottom: "1px solid #e5e5e5" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
