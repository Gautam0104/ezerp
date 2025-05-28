import React from "react";
import Image01 from "../../assets/images/socialmedia/Blog-1.avif";
import Image02 from "../../assets/images/socialmedia/LinkedIn-29.avif";
import Image03 from "../../assets/images/socialmedia/Twitter-34.webp";

const Follow = () => {
  return (
    <section className="py-5 shadow-sm" style={{ backgroundColor: "#fff" }}>
      <div className="container d-flex align-items-center gap-3 flex-wrap px-3">
        <h5 className="mb-0 ms-3">Follow Microsoft 365</h5>
        <img
          src={Image02}
          alt="LinkedIn"
          style={{ width: "28px", height: "28px" }}
        />
        <img
          src={Image03}
          alt="Twitter"
          style={{ width: "28px", height: "28px" }}
        />
        <img
          src={Image01}
          alt="Blog"
          style={{ width: "28px", height: "28px" }}
        />
      </div>
    </section>
  );
};

export default Follow;
