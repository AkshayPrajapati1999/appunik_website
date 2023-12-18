import Image from "next/image";
import Link from "next/link";
import shape1 from "../../images/shap/skye-shap-1.png";
import shape2 from "../../images/illustations/3.png";
import shape3 from "../../images/illustations/4.png";
function HomeAbout() {
  return (

    <section
      className="about_agency "
 data-aos="zoom-out-up"
    // data-aos-offset="150"
    data-aos-easing="ease-out-quart"
    data-aos-once="false" data-aos-anchor-placement="top-center"
    >
      <div className="shap_bg">
        <Image src={shape1} alt="shape" />
      </div>
      <div className="container">
        <div className="title">
          {/* <h4>About agency</h4> */}
          {/* <h2>Why choose AppUnik &amp; Creative Our services</h2> */}
          {/* <h5>
            Creative Agency <i>studios</i>
          </h5> */}
        </div>
        <div className="row">
          <div className="col-lg-4 wow zoomIn">
            <Image
              src={shape2}
              alt="team work vector art"
              className="up_animat"
            />
          </div>
          <div className="col-lg-5 introducing ">
            <h6 className="wow fadeInUp"></h6>
            <p className="wow fadeInUp" data-wow-delay="0.2s">
              Our commitment to delivering high-quality IT solutions and
              services. Our team of experienced professionals is dedicated to
              understanding your unique business needs and providing customized
              solutions to meet those needs. We stay up-to-date with the latest
              technologies and industry trends to ensure that your business
              stays ahead of the competition. Trust us to provide efficient,
              cost-effective, and innovative solutions that will help your
              business grow.
            </p>
            <Link
              href="/service"
              className="theme_btn"
              data-wow-delay="0.4s"
            >
              Find Out More <i className="fas fa-caret-right"></i>
            </Link>
            
          </div>
        </div>
      </div>
      <Image
        src={shape3}
        alt="working art"
        className="about_bg wow zoomIn up_animat"
      />
    </section>
  );
}
export default HomeAbout;
