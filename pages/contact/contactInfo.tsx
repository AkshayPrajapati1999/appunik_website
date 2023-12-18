import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "aos/dist/aos.css";
function ContactInfo() {
  return (
    <section
      className="contact_info"
 data-aos="zoom-out-up"
    // data-aos-offset="150"
    data-aos-easing="ease-out-quart"
    data-aos-once="false" data-aos-anchor-placement="top-center"
    >
      <div className="shap_style ss_2 wow zoomIn">
        <span></span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="info_container">
              <div className="info">
                <div className="icons">
                  <i className="flaticon-customer-service cc"></i>
                </div>
                <h4>Contact Number</h4>
                <Link href="tel:+91 7435047427">+91 7435047427</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="info_container">
              <div className="info">
                <div className="icons">
                  <i className="flaticon-paper-plane"></i>
                </div>
                <h4>Email Address</h4>
                <Link href="mailto:info@appunik.com">info@appunik.com</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="info_container">
              <div className="info">
                <div className="icons">
                  <i className="flaticon-route"></i>
                </div>
                <h4>Office Location</h4>
                <Link href="https://maps.app.goo.gl/SkdCV8uKmzt3duXc8?g_st=ic">
                1018, Shivalik Shilp, Iskcon Cross Road, Ahmadabad,
                  Gujarat-380015
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactInfo;
