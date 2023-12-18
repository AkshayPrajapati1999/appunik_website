import Image from "next/image";
import img1 from "../../images/illustations/Contact 1.png";
import img2 from "../../images/illustations/Contact.png";

 function ContactBanner() {
  return (
    <section
      className="pages_banner banner_area"
 data-aos="zoom-out-up"
    // data-aos-offset="150"
    data-aos-easing="ease-out-quart"
    data-aos-once="false" data-aos-anchor-placement="top-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
          <div className="col-lg-6 banner_ai wow zoomIn mobile_screen" data-wow-delay="0.4s">
            <Image
              src={img2}
              style={{ width: "100%", height: "auto" }}
              alt="contact standing art"
            />
          </div>
            <ol className="breadcrumb">
              <li>
                <h1>Contact</h1>
              </li>
            </ol>
            <h3 className="projectbanner_title">
              Our IT company specializes in delivering top-quality technology
              solutions to businesses of all sizes. We offer a range of services
              to help our clients maximize their productivity and stay ahead of
              the competition.
            </h3>
            <figure className="wow zoomIn">
              <Image
                src={img1}
                style={{ width: "60px", height: "auto" }}
                alt="contact banner vector art"
                className="banner-lamp"
              />
            </figure>
          </div>

          <div className="col-lg-6 banner_ai wow zoomIn web_screen" data-wow-delay="0.4s">
            <Image
              src={img2}
              style={{ width: "100%", height: "auto" }}
              alt="contact standing art"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactBanner