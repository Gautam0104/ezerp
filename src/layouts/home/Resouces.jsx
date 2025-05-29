import React, { useRef } from "react";
import resourceImg1 from "../../assets/images/resources/featured-resources-01-351314.avif";
import resourceImg2 from "../../assets/images/resources/featured-resources-02-351314.avif";
import resourceImg3 from "../../assets/images/resources/featured-resources-03-351314.avif";
import resourceImg4 from "../../assets/images/resources/featured-resources-04-351314.avif";
import resourceImg5 from "../../assets/images/resources/featured-resources-05-351314.avif";
import backGroundImage from "../../assets/images/cardcarousalbackground/card-carousal-background-351314.avif";
import imageIcon from "../../assets/images/cardcarousalbackground/1.png";
import ScrollToHashElement from "../../components/ScrollToHashElement";
const resources = [
  {
    img: resourceImg1,
    tag: "Design tips",
    title: "Pick the perfect font for your presentation.",
    link: "#"
  },
  {
    img: resourceImg2,
    tag: "Presentation tips",
    title:
      "Use visual aids to increase the impact of your speeches and presentations.",
    link: "#"
  },
  {
    img: resourceImg3,
    tag: "Design tips",
    title: "Design your own posters with PharmaScan.",
    link: "#"
  },
  {
    img: resourceImg4,
    tag: "Design tips",
    title: "Perfect your presentation layout with the 10-20-30 rule.",
    link: "#"
  },
  {
    img: resourceImg5,
    tag: "Presentation tips",
    title: "Make slides pop with complementary colors.",
    link: "#"
  }
];

const moreResources = [
  {
    img: imageIcon,
    tag: "Thunderbees Word",
    title:
      "Elevate your writing and create beautiful documents—anywhere, anytime.",
    link: "#"
  },
  {
    img: imageIcon,
    tag: "Thunderbees Excel",
    title: "Turn data into insights with free and premium spreadsheets.",
    link: "#"
  },
  {
    img: imageIcon,
    tag: "Thunderbees OneNote",
    title: "Keep your thoughts, content, and lists handy in one place.",
    link: "#"
  },
  {
    img: imageIcon,
    tag: "Thunderbees Outlook",
    title: "Manage your email, calendar, tasks, and contacts in one location.",
    link: "#"
  },
  {
    img: imageIcon,
    tag: "Thunderbees Defender",
    title: "Simplify your online security.",
    link: "#"
  },
  {
    img: imageIcon,
    tag: "Thunderbees OneDrive",
    title:
      "Keep your files and memories protected, up to date, and easily accessible across all your devices.",
    link: "#"
  },
  {
    img: imageIcon,
    tag: "Thunderbees Designer",
    title: "Create designs and edit photos in seconds with the power of AI.",
    link: "#"
  },
  {
    img: imageIcon,
    tag: "Teams",
    title:
      "Bring everyone together in one place to meet, chat, call, and collaborate.",
    link: "#"
  }
];

const Resouces = () => {
  const scrollRef = useRef(null);
  const scrollRef2 = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 400; // width of card + gap
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };
  const scroll2 = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef2.current;
      const scrollAmount = 400; // width of card + gap
      scrollRef2.current.scrollTo({
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
          <h2 className="fw mb-5 " data-aos="fade-up"
     data-aos-duration="3000" style={{ fontSize: 48, color: "#111" }}>
            Make presentations pop with these helpful resources
          </h2>
          <div style={{ position: "relative", overflowX: "hidden" }}>
            <div
              ref={scrollRef}
              style={{
                display: "flex",
                gap: 32,
                overflowX: "auto",
                scrollBehavior: "smooth",
                paddingBottom: 8,
                maxWidth: "100%"
              }}
              className="hide-scrollbar" data-aos="fade-up-left"
              data-aos-delay="3000">
              {resources.map((res, idx) => (
                <div 
                  key={idx}
                  style={{
                    minWidth: 420,
                    maxWidth: 420,
                    background: "#fff",
                    borderRadius: "24px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    border: "none",
                    overflow: "hidden",
                    minHeight: 400,
                    display: "flex",
                    flexDirection: "column",
                    flexShrink: 0
                  }}
                >
                  <img
                    src={res.img}
                    alt=""
                    className="resource-img"
                    style={{
                      width: "100%",
                      height: 160,
                      objectFit: "cover",
                      borderTopLeftRadius: "24px",
                      borderTopRightRadius: "24px"
                    }}
                  />
                  <div
                    style={{
                      padding: 32,
                      flex: 1,
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <div
                      className="fw-medium mb-2 text-primary"
                      style={{ fontSize: 12 }}
                    >
                      {res.tag}
                    </div>
                    <div
                      className="fw-semibold mb-4"
                      style={{ fontSize: 22, color: "#111", lineHeight: 1.3 }}
                    >
                      {res.title}
                    </div>
                    <a
                      href={res.link}
                      className="mt-auto d-flex align-items-center text-decoration-none fw-medium"
                      style={{ color: "#111" }}
                    >
                      <span
                        className="d-flex align-items-center justify-content-center"
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "12px",
                          background: "#091F2C",
                          color: "#fff",
                          marginRight: 12,
                          fontWeight: 500,
                          fontSize: 20,
                          transition: "background 0.2s"
                        }}
                      >
                        <span style={{ fontSize: 22, fontWeight: 700 }}>
                          {">"}
                        </span>
                      </span>
                      Learn more
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex gap-3 mt-4 ">
              <button
                className="btn btn-outline-primary rounded-circle"
                style={{ width: 48, height: 48, fontSize: 24 }}
                aria-label="Previous"
                onClick={() => scroll("left")}
              >
                &#8592;
              </button>
              <button
                className="btn btn-outline-dark rounded-circle"
                style={{ width: 48, height: 48, fontSize: 24 }}
                aria-label="Next"
                onClick={() => scroll("right")}
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
        <section
          className="py-5 mt-5"
          style={{
            backgroundImage: `url(${backGroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "#fff"
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
              Learn more about Thunderbees 365
            </h2>
            <div style={{ position: "relative", overflowX: "hidden" }}>
              <div
                ref={scrollRef2}
                style={{
                  display: "flex",
                  gap: 32,
                  overflowX: "auto",
                  scrollBehavior: "smooth",
                  paddingBottom: 8,
                  maxWidth: "100%"
                }}
                className="hide-scrollbar"
              >
                {moreResources.map((res, idx) => (
                  <div
                    key={idx}
                    style={{
                      minWidth: 420,
                      maxWidth: 420,
                      background: "#fff",
                      borderRadius: "24px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                      border: "none",
                      overflow: "hidden",
                      minHeight: 400,
                      display: "flex",
                      flexDirection: "column",
                      flexShrink: 0
                    }}
                  >
                    <img
                      src={res.img}
                      alt=""
                      className="resource-img"
                      style={{
                        width: 48,
                        height: 48,
                        objectFit: "contain",
                        borderRadius: "12px",
                        margin: "32px 32px 16px 16px",
                        display: "block",
                        background: "#F5F6F7"
                      }}
                    />
                    <div
                      style={{
                        padding: 32,
                        flex: 1,
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      <div
                        className="fw-medium mb-2 text-primary"
                        style={{ fontSize: 12 }}
                      >
                        {res.tag}
                      </div>
                      <div
                        className="fw-semibold mb-4"
                        style={{ fontSize: 22, color: "#111", lineHeight: 1.3 }}
                      >
                        {res.title}
                      </div>
                      <a
                        href={res.link}
                        className="mt-auto d-flex align-items-center text-decoration-none fw-medium"
                        style={{ color: "#111" }}
                      >
                        <span
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: "12px",
                            background: "#091F2C",
                            color: "#fff",
                            marginRight: 12,
                            fontWeight: 500,
                            fontSize: 20,
                            transition: "background 0.2s"
                          }}
                        >
                          <span style={{ fontSize: 22, fontWeight: 700 }}>
                            {">"}
                          </span>
                        </span>
                        Learn more
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex gap-3 mt-4 ">
                <button
                  className="btn btn-outline-primary rounded-circle"
                  style={{ width: 48, height: 48, fontSize: 24 }}
                  aria-label="Previous"
                  onClick={() => scroll2("left")}
                >
                  &#8592;
                </button>
                <button
                  className="btn btn-outline-dark rounded-circle"
                  style={{ width: 48, height: 48, fontSize: 24 }}
                  aria-label="Next"
                  onClick={() => scroll2("right")}
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
