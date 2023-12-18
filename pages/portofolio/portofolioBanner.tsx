import React from "react";
import Image from "next/image";
import illustration from "../../images/illustations/Portfolio 2.png";
import illustration2 from "../../images/illustations/Portfolio 1.png";

function PortfolioBanner() {
  return (
    <section className="pages_banner banner_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
          <div className="col-lg-6 banner_ai wow zoomIn mobile_screen" data-wow-delay="0.4s">
            <Image
              src={illustration2}
              style={{ width: "95%", height: "auto" }}
              className="portofolio_art"
              alt="portfolio side vector art"
            />
          </div>
            <ol className="breadcrumb">
              <li>
                <h1>Portfolio</h1>
              </li>
            </ol>
            <h3 className="projectbanner_title">
              Our portfolio showcases our expertise in delivering projects for
              clients from various industries, including healthcare, finance,
              retail, and more. Our focus is on understanding our clients needs
              and delivering customized solutions that meet their specific
              requirements.
            </h3>
            <figure className="wow zoomIn">
              <Image
                src={illustration}
                style={{ width: "80px", height: "auto" }}
                alt="portfolio banner art"
                className="banner-lamp"
              />
            </figure>
          </div>

          <div className="col-lg-6 banner_ai wow zoomIn web_screen" data-wow-delay="0.4s">
            <Image
              src={illustration2}
              style={{ width: "95%", height: "auto" }}
              className="portofolio_art"
              alt="portfolio side vector art"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioBanner;
