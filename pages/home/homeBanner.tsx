import React from "react";
import man from "../../images/illustations/2.png";
import strategy from "../../images/illustations/1.png";
import Image from "next/image";
function homeBanner() {
  return (
    <div>
      <section className="banner_area text-align">
        <div className="shap_style style_1 ">
          <span></span>
        </div>
        <div className="container">
          <h1 className="wow fadeInUp">
            TAKE <span className="span_tag">TECHNOLOGY</span> <br />
            <span className="span_tag">BEYOND</span>  THOUGHTS
          </h1>
          <p className="home_banner_info wow fadeInUp " data-wow-delay="0.3s">
            We strive to provide more than just a product, we aim to deliver a
            complete experience that fosters strong relationships. Our focus is
            on not only providing quality products but also on ensuring customer
            satisfaction at every step of the journey
          </p>
          {/* <ul className="nav strategy_tab wow fadeInUp" data-wow-delay="0.6s">
            <li>
              <a className="active" data-toggle="tab" href="#marketing">
                Design
              </a>
            </li>
            <li>
              <a data-toggle="active" href="#design">
                Development
              </a>
            </li>
          </ul> */}
          <div className="tab-content mt-5">
            <div
              className="tab-pane fade show active"
              id="marketing"
              role="tabpanel"
            >
              <Image
                src={strategy}
                alt="home banner vector art"
                className="image_1 wow zoomIn"
              />
              <figure className="wow slideInRight ">
                <Image
                  src={man}
                  alt="side standing vector art"
                  className="images_2"
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="shap_style style_2">
          <span></span>
        </div>
      </section>
    </div>
  );
}
export default homeBanner;
