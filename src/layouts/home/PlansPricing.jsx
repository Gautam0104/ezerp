import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/images/planandprice/sku-cards-background-351314.avif";
import "../../styles/planandprice.css";
import ScrollToHashElement from "../../components/ScrollToHashElement";
const PlansPricing = () => {
  return (
    <>
      <ScrollToHashElement />
      <section
        className="py-5"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#fff"
        }}
        id="plans"
      >
        <div className="container" data-aos="fade-up" data-aos-delay="300">
          <div className="row justify-content-center text-start">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <span
                className="text-uppercase fw-semibold text-primary mb-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Plans & Pricing
              </span>
              <h2
                className=" text-primary  mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                PharmaScan is better with <br /> Thunderbees 365
              </h2>
              <div
                className="mb-3 d-flex py-5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <button className="btn btn-primary me-3 ">FOR HOME</button>
                <button className="btn btn-light me-4">FOR BUISNESS</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
              <ul
                class="nav nav-pills mb-3 justify-content-center bg-light rounded-5 p-2 w-50"
                id="pricingTab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active me-2"
                    id="yearly-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#yearly"
                    type="button"
                    role="tab"
                    aria-controls="yearly"
                    aria-selected="true"
                  >
                    Yearly
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="monthly-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#monthly"
                    type="button"
                    role="tab"
                    aria-controls="monthly"
                    aria-selected="false"
                  >
                    Monthly
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="container py-5">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 text-center p-3">
                  <div className="card-body">
                    <h5 className="card-title">Thunderbees PharmaScan</h5>
                    <p className="price">Free</p>
                    <div className="d-grid gap-2">
                      <button className="btn btn-dark">Sign up for free</button>
                      <button className="btn btn-outline-dark">Sign in</button>
                    </div>
                    <ul className="text-start mt-3">
                      <li>One person</li>
                      <li>Sharing and real-time collaboration</li>
                      <li>PharmaScan for the web</li>
                      <li>Basic spelling and grammar</li>
                      <li>Basic templates, fonts, icons, and stickers</li>
                      <li>Dictation and voice commands</li>
                      <li>5 GB of cloud storage</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 text-center p-3">
                  <div className="card-body">
                    <h5 className="card-title">Thunderbees 365 Personal</h5>
                    <p className="price">
                      ₹ 6,899.00<span class="fs-6"> /year</span>
                    </p>
                    <p className="text-muted">
                      Subscription automatically renews unless canceled.{" "}
                      <Link href="#">See terms</Link>.
                    </p>
                    <button class="btn btn-dark btn-custom">Buy now</button>
                    <ul className="text-start mt-3">
                      <li>For one person</li>
                      <li>Sharing and real-time collaboration</li>
                      <li>PharmaScan for the web and desktop</li>
                      <li>Premium templates, icons, stickers</li>
                      <li>Dictation, voice commands, and transcription</li>
                      <li>Advanced grammar and editing</li>
                      <li>1 TB cloud storage</li>
                      <li>Word, Excel, PharmaScan, Thunderbees, OneNote</li>
                      <li>Thunderbees Pharmascan & Designer</li>
                      <li>Advanced digital security</li>
                      <li>Ad-free experience</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 text-center p-3">
                  <div className="card-body">
                    <h5 className="card-title">Thunderbees 365 Family</h5>
                    <p className="price">
                      ₹ 8,199.00<span class="fs-6"> /year</span>
                    </p>
                    <p className="text-muted">
                      Subscription automatically renews unless canceled.{" "}
                      <Link href="#">See terms</Link>.
                    </p>
                    <button className="btn btn-dark btn-custom">Buy now</button>
                    <ul className="text-start mt-3">
                      <li>For up to six people</li>
                      <li>Sharing and real-time collaboration</li>
                      <li>PharmaScan for the web and desktop</li>
                      <li>Premium templates, icons, stickers</li>
                      <li>Dictation, voice commands, and transcription</li>
                      <li>Advanced grammar and editing</li>
                      <li>Up to 6 TB cloud storage</li>
                      <li>Word, Excel, PharmaScan, Thunderbees, OneNote</li>
                      <li>Thunderbees Pharmascan & Designer</li>
                      <li>Advanced digital security</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 d-flex justify-content-end">
              <Link
                to="#"
                className="text-decoration-none d-flex align-items-center gap-2"
              >
                <span className="d-flex justify-content-center align-item-center bg-primary rounded p-1 text-white  mx-auto mb-2 mt-2">
                  <i className="bi bi-chevron-right"></i>
                </span>{" "}
                See all plans & pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlansPricing;
