import React from "react";
import Introducing1 from "../../images/illustations/5.png";
import Link from "next/link";
import Image from "next/image";
function HomeIntroduce() {
  return (
    <section
      className="introducing_area"
 data-aos="zoom-out-up"
    // data-aos-offset="150"
    data-aos-easing="ease-out-quart"
    // data-aos-once="false" data-aos-anchor-placement="top-center"
    >
      <div className="container">
        <div className="title">
          {/* <h4>Our selected works </h4> */}
          <h1>Introducing Our Work</h1>
        </div>
        <div className="row pt-5">
          <div className="col-lg-6 wow zoomIn introducing_img">
            <Image src={Introducing1} alt="client vector art" className="up_animat" />
          </div>
          <div className="col-lg-6 introducing">
            <h2></h2>
            <p className="bold_p">
              Introducing our portfolio of IT solutions and services, where you
              can see the breadth and depth of our expertise. From software
              development to network infrastructure and cyber security, we have
              a proven track record of delivering successful projects for a
              diverse range of clients. Our work reflects our commitment to
              quality, attention to detail and customer satisfaction. Browse
              through our portfolio to see how we have helped businesses like
              yours drive growth and achieve their goals.
            </p>

            <Link href="/portofolio" className="theme_btn">
              View More Work
            </Link>
          </div>
        </div>
      </div>
      {/*<figure className="wow zoomIn">
          <img src={Introducing2} alt="" />
  </figure>*/}
      <div className="shap_style ss_2 wow zoomIn">
        <span></span>
      </div>
    </section>
  );
}
export default HomeIntroduce;
