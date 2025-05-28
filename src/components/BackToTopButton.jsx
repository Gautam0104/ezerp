import React, { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {showButton && (
        <button
          className="btn btn-primary position-fixed shadow rounded-circle d-flex align-items-center justify-content-center"
          style={{
            width: "45px",
            height: "45px",
            bottom: "1.5rem",
            right: "1.5rem",
            zIndex: 999
          }}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <span className="d-none d-sm-inline">↑</span>
          <span className="d-sm-none" style={{ fontSize: "1rem" }}>
            ↑
          </span>
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
