import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

import resourceImg1 from "../../assets/images/resources/featured-resources-01-351314.avif";
import resourceImg2 from "../../assets/images/resources/featured-resources-02-351314.avif";
import resourceImg3 from "../../assets/images/resources/featured-resources-03-351314.avif";
import resourceImg4 from "../../assets/images/resources/featured-resources-04-351314.avif";

import imageIcon from "../../assets/images/cardcarousalbackground/1.png";
import backGroundImage from "../../assets/images/cardcarousalbackground/card-carousal-background-351314.avif";

import ScrollToHashElement from "../../components/ScrollToHashElement";

const imageMap = {
  resourceImg1,
  resourceImg2,
  resourceImg3,
  resourceImg4,
  imageIcon
};

const Resouces = () => {
  const scrollRef = useRef(null);
  const scrollRef2 = useRef(null);
  const { t } = useTranslation();

  const resources = t("resourcesSection.resources", { returnObjects: true });
  const moreResources = t("resourcesSection.moreResources", {
    returnObjects: true
  });

  const scroll = (ref, direction) => {
    if (ref.current) {
      const { scrollLeft } = ref.current;
      const scrollAmount = 400;
      ref.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <ScrollToHashElement />
      <div
        className="bg-light"
        style={{ minHeight: "100vh", padding: "40px 0" }}
        id="resources"
      >
        <div className="container">
          <div
            className="text-primary fw-semibold text-uppercase mb-2"
            style={{ letterSpacing: 1, fontSize: 14 }}
          >
            RESOURCES
          </div>
          <h2 className="fw mb-5" style={{ fontSize: 48, color: "#111" }}>
            {t("resourcesSection.title")}
          </h2>
          <p style={{ marginBottom: 32 }}>{t("resourcesSection.desc")}</p>

          {/* First Carousel */}
          <div style={{ position: "relative", overflowX: "hidden" }}>
            <div
              ref={scrollRef}
              className="d-flex gap-4 overflow-auto hide-scrollbar pb-2"
              data-aos="fade-left"
            >
              {resources.map((res, idx) => (
                <div
                  key={idx}
                  style={{ minWidth: 420, maxWidth: 420 }}
                  className="bg-white rounded-4 shadow-sm d-flex flex-column"
                >
                  <img
                    className="resource-img"
                    src={imageMap[res.img]}
                    alt=""
                    style={{
                      height: 160,
                      objectFit: "cover",
                      borderTopLeftRadius: 24,
                      borderTopRightRadius: 24
                    }}
                  />
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <h5 className="fw-semibold mb-3">{res.tag}</h5>
                    <p className="text-primary fw-medium mb-2">{res.title}</p>
                    <a
                      href={res.link}
                      className="mt-auto d-flex align-items-center text-decoration-none text-dark fw-medium"
                    >
                      <span
                        className="d-inline-flex justify-content-center align-items-center bg-dark text-white rounded-3 me-3"
                        style={{ width: 40, height: 40 }}
                      >
                        &gt;
                      </span>
                      {t("resourcesSection.learnMore")}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex gap-3 mt-4">
              <button
                className="btn btn-outline-primary rounded-circle"
                style={{ width: 48, height: 48 }}
                onClick={() => scroll(scrollRef, "left")}
              >
                &#8592;
              </button>
              <button
                className="btn btn-outline-dark rounded-circle"
                style={{ width: 48, height: 48 }}
                onClick={() => scroll(scrollRef, "right")}
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>

        {/* Second Carousel */}
        <section
          className="py-5 mt-5"
          style={{
            backgroundImage: `url(${backGroundImage})`,
            backgroundSize: "cover"
          }}
        >
          <div className="container my-5">
            <div
              className="text-primary fw-semibold text-uppercase mb-2"
              style={{ letterSpacing: 1, fontSize: 14 }}
            >
              MORE THUNDERBEES
            </div>
            <h2 className="fw mb-5" style={{ fontSize: 48, color: "#111" }}>
              Learn more about Thunderbees
            </h2>

            <div style={{ position: "relative", overflowX: "hidden" }}>
              <div
                ref={scrollRef2}
                className="d-flex gap-4 overflow-auto hide-scrollbar pb-2"
                data-aos="fade-left"
              >
                {moreResources.map((res, idx) => (
                  <div
                    key={idx}
                    style={{ minWidth: 420, maxWidth: 420 }}
                    className="bg-white rounded-4 shadow-sm d-flex flex-column"
                  >
                    <img
                      src={imageMap[res.img]}
                      alt=""
                      style={{
                        width: 48,
                        height: 48,
                        objectFit: "contain",
                        borderRadius: 12,
                        margin: "32px 32px 16px 16px",
                        background: "#F5F6F7"
                      }}
                    />
                    <div className="p-4 d-flex flex-column flex-grow-1">
                      <small className="text-primary fw-medium">
                        {res.tag}
                      </small>
                      <h5 className="fw-semibold my-3">{res.title}</h5>
                      <a
                        href={res.link}
                        className="mt-auto d-flex align-items-center text-decoration-none text-dark fw-medium"
                      >
                        <span
                          className="d-inline-flex justify-content-center align-items-center bg-dark text-white rounded-3 me-3"
                          style={{ width: 40, height: 40 }}
                        >
                          &gt;
                        </span>
                        {t("resourcesSection.learnMore")}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex gap-3 mt-4">
                <button
                  className="btn btn-outline-primary rounded-circle"
                  style={{ width: 48, height: 48 }}
                  onClick={() => scroll(scrollRef2, "left")}
                >
                  &#8592;
                </button>
                <button
                  className="btn btn-outline-dark rounded-circle"
                  style={{ width: 48, height: 48 }}
                  onClick={() => scroll(scrollRef2, "right")}
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Resouces;
