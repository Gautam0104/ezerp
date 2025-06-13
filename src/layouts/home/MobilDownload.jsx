import React from "react";
import { useTranslation } from "react-i18next";
import ScrollToHashElement from "../../components/ScrollToHashElement";

const MobileDownload = () => {
  const { t } = useTranslation();

  return (
    <>
      <ScrollToHashElement />
      <div
        className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light p-2"
        id="mobile"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h1 className="fw-bold text-center mb-3" style={{ fontSize: "2.8rem" }}>
          {t("mobileDownload.title")}
        </h1>
        <p className="text-center mb-5" style={{ fontSize: "1.2rem" }}>
          {t("mobileDownload.description")}
        </p>
        <div
          className="bg-white rounded-4 d-flex align-items-center justify-content-center mb-4"
          style={{
            width: 240,
            height: 240,
            boxShadow: "0 2px 12px #0001"
          }}
        >
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://aka.ms/PharmaScanmobiledownload"
            alt="PharmaScan Mobile App QR"
            style={{ width: 200, height: 200 }}
          />
        </div>
        <p className="text-center text-primary" style={{ maxWidth: 700 }}>
          {t("mobileDownload.fallbackText")}{" "}
          <a
            href="https://thunderbeesmobiledownload"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("mobileDownload.linkText")}
          </a>{" "}
          {t("mobileDownload.getAppText")}
        </p>
      </div>
    </>
  );
};

export default MobileDownload;
