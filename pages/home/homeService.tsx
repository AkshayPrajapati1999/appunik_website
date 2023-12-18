import Image from "next/image";
import Link from "next/link";
// import mobile from "../../images/icons/mobile D.svg";
// import uiux from "../../images/icons/UiUx D.svg";
// import web from "../../images/icons/Web D.svg";

import mobile from "../../images/home page/mobile.svg";
import web from "../../images/home page/website.svg";
import uiux from "../../images/home page/uiux.svg";

function HomeService() {
  return (
    <section
      className="services_area "
      data-aos="zoom-out-up"
      // data-aos-offset="150"
      data-aos-easing="ease-out-quart"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="shap_style ss_2 wow zoomIn">
        <span></span>
      </div>
      <div className="container">
        <div className="title">
          <h1>Services</h1>
          {/*<h2>Creative AppUnik Team & AppUnik services</h2>*/}
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 wow fadeInUp">
            <div className="services_items">
              <div className="icons">
                <Image
                  className="mobile-img"
                  src={mobile}
                  alt="mobile development icon"
                />
                <span></span>
              </div>
              <Link href="/services/pages/app-development">
                Mobile App Development
              </Link>
              <p>
                Top-tier mobile app development, dedicated team—realize your
                business goals with our expertise.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="services_items">
              <div className="icons">
                <Image
                  src={web}
                  alt="website development icon"
                  className="icon_2"
                />
                <span></span>
              </div>
              <Link href="/">Website Development</Link>
              <p>
                Experts in diverse web development—tailored or standard, we
                deliver exceptional, custom solutions.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <div className="services_items">
              <div className="icons">
                <Image
                  src={uiux}
                  alt="ui/ux development icon"
                  className="icon_3"
                />
                <span className="icon3_span"></span>
              </div>
              <Link href="/">UI/UX Design</Link>
              <p>
                We excel in designing captivating UI/UX, boosting business
                impact. Rely on us for an enhanced online presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    // </Parallax>
  );
}
export default HomeService;
