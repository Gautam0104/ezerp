import React, { useState } from "react";
import { Link } from "react-router-dom"; // Add this import
import ScrollToHashElement from "../../components/ScrollToHashElement";
const faqData = [
  {
    question: "Where can I use Microsoft PowerPoint?",
    answer:
      "Microsoft PowerPoint is available as an app for desktop (Windows and MacOS), on mobile devices and tablets (iOS and Android™), and online through your browser."
  },
  {
    question: "Is there a free version of Microsoft PowerPoint?",
    answer: (
      <>
        Yes, Microsoft PowerPoint for the web is free for anyone to use online.{" "}
        <Link
          to="/signup"
          style={{
            color: "#0067b8",
            textDecoration: "underline"
          }}
        >
          Sign up or sign in
        </Link>{" "}
        using any email address.
      </>
    )
  },
  {
    question: "Can I collaborate with other people in Microsoft PowerPoint?",
    answer:
      "Yes, Microsoft PowerPoint supports real-time collaboration with multiple people."
  },
  {
    question: "In what languages is Microsoft PowerPoint available?",
    answer: (
      <>
        Microsoft PowerPoint is available in more than{" "}
        <Link
          to="/languages"
          style={{
            color: "#0067b8",
            textDecoration: "underline"
          }}
        >
          80 languages
        </Link>
        .
      </>
    )
  }
];

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState([0, 1, 2, 3]);

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
      <div
        style={{
          margin: " 0px 150px",
          padding: "0 24px",
          fontFamily: "Segoe UI, Arial, sans-serif",
          background: "#fdfcf9",
          minHeight: "100vh"
        }}
        id="faq"
      >
        <h1
          style={{
            fontSize: 44,
            fontWeight: 400,
            marginBottom: 32
          }}
        >
          Frequently asked questions
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
                  ? "2px solid #111820" // selected
                  : "2px dashed #ccc", // not selected
              borderRadius: 6,
              background: "#fdfcf9",
              color: "#888",
              fontWeight: 500,
              cursor: "pointer"
            }}
            disabled={openIndexes.length === faqData.length}
          >
            Expand all
          </button>
          <button
            onClick={handleCollapseAll}
            style={{
              padding: "8px 20px",
              border:
                openIndexes.length === 0
                  ? "2px solid #111820" // selected
                  : "2px dashed #ccc", // not selected
              borderRadius: 6,
              background: "#fdfcf9",
              color: "#888",
              fontWeight: 500,
              cursor: "pointer"
            }}
            disabled={openIndexes.length === 0}
          >
            Collapse all
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
                        {item.answer}
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
                  aria-label={openIndexes.includes(idx) ? "Collapse" : "Expand"}
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
    </>
  );
};

export default Faq;
