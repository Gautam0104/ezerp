import React from "react";
import ScrollToHashElement from "../../components/ScrollToHashElement";
const MobileDownload = () => {
  return (
    <>
      <ScrollToHashElement />
      <div
        className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light p-2"
        id="mobile" data-aos="fade-up"
              data-aos-delay="500"
      >
        <h1 className="fw-bold text-center mb-3" style={{ fontSize: "2.8rem" }}>
          Download the Thuderbees mobile app
        </h1>
        <p className="text-center mb-5" style={{ fontSize: "1.2rem" }}>
          Create, read, and collaborate on the move with the Thunderbees mobile
          app.
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
          If you're having trouble with the QR code, using your mobile device,
          go to{" "}
          <a
            href="https://thunderbeesmobiledownload"
            target="_blank"
            rel="noopener noreferrer"
          >
            /thunderbeesmobiledownload
          </a>{" "}
          to get the PharmaScan mobile app.
        </p>
      </div>
    </>
  );
};

export default MobileDownload;
