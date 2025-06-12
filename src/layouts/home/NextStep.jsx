import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/images/planandprice/featured-stack-background-351314.avif";
import Image01 from "../../assets/images/contactsale1/contact-sales-01-351314.avif";
import Image02 from "../../assets/images/contactsale2/contact-sales-02-351314.avif";
import Image03 from "../../assets/images/contactsale3/contact-sales-03-351314.avif";
import Image04 from "../../assets/images/contactsale4/contact-sales-04-351314.avif";
import ScrollToHashElement from "../../components/ScrollToHashElement";
const NextStep = () => {
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
        id="nextSteps"
      >
        <div className="container my-3">
          <div className="row g-5">
            <div className="col-12 text-start">
              <h1 className="text-primary mb-5" id="nextStepsheader">
                Next steps
              </h1>

              {/* First Card */}
              <div
                className="card shadow-lg p-3 mb-5 rounded-4 bg-white text-dark"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <div className="row ">
                  <div className="col-md-6 d-flex flex-column justify-content-between align-items-start">
                    <div className="mb-3 p-2">
                      <span
                        className="text-uppercase fw-semibold text-primary"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        <h2 className="text-primary">Real-Time Inventory Updates: Streamlined Process Improvements</h2>
                      </span>
                    </div>
                      Implement real-time tracking of inventory changes as items are scanned, which is essential for maintaining up-to-date and accurate inventory records. Detailed processes include
                      <h1>Our Services</h1>
                    
                      <ul>
                    <li><h5>Scan to Receive</h5></li>
                      <li><h5>Purchase Order Received</h5></li>
                      <li><h5>Manually Entering Product Information</h5></li>
                      <li><h5>System Generates Barcodes</h5></li>
                      <li><h5>Print Barcodes</h5></li>
                      <li><h5>Pasting Barcodes on Items</h5></li>

                      </ul>
                    <div className="mb-3 p-2">
                      <button className="btn btn-primary px-4 py-2 rounded fw-semibold">
                        Learn more <i className="bi bi-arrow-right ms-2"></i>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      src={Image01}
                      alt="Thunderbees Pharmascan Pro"
                      className="img-fluid w-100 rounded"
                    />
                  </div>
                </div>
              </div>

              {/* Image Cards */}
              <div className="row g-4">
                <div className="col-12 col-sm-6 col-lg-4">
                  <div
                    className="card h-100 shadow-lg rounded-4"
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    <img
                      src={Image02}
                      alt="Contact Sales 1"
                      className="card-img-top img-fluid rounded-4 p-2"
                    />
                    <div className="card-body px-3">
                      <h2
                        className=" text-primary  mb-3"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        Barcode Receiving System
                      </h2>
                      <p>Our barcode system facilitates seamless logistics operations
by ensuring end-to-end visibility and traceability. Improved
order accuracy, reduced lead times, and enhanced customer
satisfaction are direct results of our comprehensive tracking
capabilities.</p>

<h5
                        className=" text-primary  mb-3"
                        data-aos="fade-up"
                        
                      >
                        Understand Barcodes
                      </h5>
                      <p>
                       A barcode is the visual representation of data using lines and
spacing, which is readable by digital scanners. It is widely used for
inventory management purposes for accurate inventory
management and billing. In a barcode inventory system, the user is
required to scan affix barcodes on products through point-of-sale
(POS) systems and ensure their delivery. The system is also useful for
returned items and for updating inventory levels.
                      </p>
                      <h5
                        className=" text-primary  mb-3"  
                      >
                        Barcode Receiving Process
                      </h5>
                      <ul>
                      <li>Product arrive in the warehouse</li>
                      <li>Purchase order received</li>
                      <li>Manually entering product information</li>
                      <li>System generates barcodes</li>
                      <li>Print barcodes</li>
                      <li>Pasting barcodes on items</li>
                      <li>Scanning barcodes</li>
                      <li>Sales order received</li>
                      <li>Picking the item based on barcode information</li>
                      <li>The system automatically removes the item sold from the stock</li>
                      <li>Finally, ship the item</li>
                      </ul>
                    </div>
                    <div className="mt-5 mb-3 px-1">
                      <Link
                        to="/plans"
                        className="btn  btn-sm rounded-pill d-inline-flex align-items-center gap-2"
                      >
                        <span className="d-flex justify-content-center align-item-center bg-primary rounded p-1 text-white">
                          <i className="bi bi-chevron-right"></i>
                        </span>{" "}
                        Explore now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <div
                    className="card h-100 shadow-lg rounded-4 "
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    <img
                      src={Image03}
                      alt="Contact Sales 2"
                      className="img-fluid w-100 h-100 rounded-4 p-2"
                    />

                    <div className="card-body">
                      <h2
                        className=" text-primary  mb-3"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        Warehouse Management 
                      </h2>
                      <p>
                        A warehouse management system (WMS) consists of
software and processes that allow organizations to
control and administer warehouse operations from
the time goods or materials enter a warehouse until
they move out. Warehouses sit at the center of
manufacturing and supply chain operations because
they hold all the material used or produced in those
processes, from raw materials to finished goods.
                      </p>
                      <h5
                        className=" text-primary  mb-3"
                        data-aos="fade-up"
                        
                      >
                        Features of warehouse management systems
                      </h5>
                      <ul>
                      <li>inventory tracking. This accommodates advanced tracking and automatic identification and data capture(AIDC) systems, including RFID and barcode scanners to ensure goods can be found easily when they need to move.</li>
                      <li>Receiving and storage. This facilitates inventory storage and retrieval, often with pick-to-light or pick-to-voice technology to help warehouse workers locate goods.</li>
                      <li>Picking and packing goods. This includes zone picking, wave picking and batch picking. Warehouse workers can also use lot zoning and task interleaving functions to guide the pick-and-pack tasks most efficiently.</li>
                      <li>Shipping. This lets the WMS send bills of lading ahead of the shipment, generate packing lists and invoices for the shipment, and send advance shipment notifications to recipients.</li>
                      </ul>
                    </div>
                    <div className="mt-5 mb-3 px-1">
                      <Link
                        to="/plans"
                        className="btn  btn-sm rounded-pill d-inline-flex align-items-center gap-2"
                      >
                        <span className="d-flex justify-content-center align-item-center bg-primary rounded p-1 text-white">
                          <i className="bi bi-chevron-right"></i>
                        </span>{" "}
                        Explore now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4">
                  <div
                    className="card h-100 shadow-lg rounded-4"
                    data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    <img
                      src={Image04}
                      alt="Contact Sales 3"
                      className="card-img-top img-fluid rounded-4 p-2"
                    />
                    <div className="card-body">
                      <h2
                        className=" text-primary  mb-3"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        Distribution
                      </h2>
                      <p>With a distribution ERP system made specifically for
distributors, you can optimize your inventory
management, preventing errors in purchasing & order
fulfillment. By streamlining your processes from order
entry to delivery, your customers will get what they
ordered, quickly and without friction. Shipping process
refers to a timeline of events which involves
movement of goods from one location to another
location</p>

<ul>
                   <strong>[1]</strong> This involves giving the parcel to the distribution carrier
and tracking of the parcel as it is moving towards the
destination and constant communication with the carrier.
<br></br>

                     <strong>[2]</strong> It involves monitoring the movement of the package as it
is heading towards its destination. Shipping carrier helps
in providing the tracking information like the package's
current location, delivery status and estimated date of
delivery which is further shared to the end customer.
<br></br>

                      <strong>[3]</strong>In a warehouse, the shipping process leads to the final
steps for the preparation of consignment for shipment to
the customers. Following are the key stages in the
shipping process in the warehouse.
                      </ul>
                    </div>
                    <div className="mt-5 mb-3 px-1">
                      <Link
                        to="/plans"
                        className="btn  btn-sm rounded-pill d-inline-flex align-items-center gap-2"
                      >
                        <span className="d-flex justify-content-center align-item-center bg-primary rounded p-1 text-white">
                          <i className="bi bi-chevron-right"></i>
                        </span>{" "}
                        Explore now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NextStep;
