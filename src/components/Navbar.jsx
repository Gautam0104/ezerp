import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import imageIcon from "../assets/images/cardcarousalbackground/1.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const changeLangauge = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-3 px-3 ">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left: Logo */}
        <div className="d-flex align-items-center gap-3">
          <img src={imageIcon} alt="Thunderbees Logo" width="40" height="40" />
          <span className="fw-bold">Thunderbees</span>
        </div>

        {/* Hamburger toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible nav links */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          {/* Left nav links */}
          <div className="navbar-nav d-lg-flex align-items-center gap-3">
            <Link to="#" className="nav-link fw-semibold text-dark">
              {t("navbar.brand")}
            </Link>
            <Link to="/wms/pharmahome" className="nav-link text-dark">
              {t("navbar.pharmascan")}
            </Link>
            <select
              className="nav-link text-dark dropdown-toggle"
              onChange={(e) => changeLangauge(e.target.value)}
            >
              <option desabled>Choose language</option>
              <option value="en">{t("navbar.language_en")}</option>
              <option value="por">{t("navbar.language_por")}</option>
            </select>
            <Link to="#" className="nav-link text-dark dropdown-toggle">
              {t("navbar.resources")}
            </Link>
            <Link to="#" className="nav-link text-primary">
              {t("navbar.more")}
            </Link>
          </div>

          {/* Right side */}
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <Link
              to="#"
              className="nav-link text-dark d-flex align-items-center"
            >
              {t("navbar.search")} <i className="bi bi-search ms-1"></i>
            </Link>
            <Link to="#" className="nav-link text-dark">
              Français
            </Link>
            <button className="btn btn-dark btn-sm">{t("navbar.try")}</button>
            <Link to="#" className="nav-link text-dark">
              Thunder
            </Link>
            <button
              className="btn btn-outline-secondary rounded-circle p-1"
              style={{ width: "32px", height: "32px" }}
            >
              <i className="bi bi-person"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
