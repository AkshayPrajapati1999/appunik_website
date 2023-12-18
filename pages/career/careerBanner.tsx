import illustration from "../../images/illustations/Career 1.png";
import illustration2 from "../../images/illustations/Career.png";
import Image from "next/image";
 function CareerBanner() {
  return (
    <section className="pages_banner banner_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
          <div className="col-lg-6 banner_ai wow zoomIn mobile_screen" data-wow-delay="0.4s">
            <Image
              src={illustration2}
              style={{ width: "100%", height: "auto" }}
              alt="career standing art"
            />
          </div>
            <ol className="breadcrumb">
              <li>
                <h1>Career</h1>
              </li>
            </ol>
            <h3 className="projectbanner_title">
              Our IT company is seeking skilled professionals to join our team.
              We offer a dynamic work environment and opportunities for growth
              in a variety of positions. Come be a part of our innovative team!
            </h3>
            <figure className="wow zoomIn">
              <Image
                src={illustration}
                style={{ width: "80px", height: "auto" }}
                alt="career banner vector art"
                className="banner-lamp"
              />
            </figure>
          </div>

          <div className="col-lg-6 banner_ai wow zoomIn web_screen" data-wow-delay="0.4s">
            <Image
              src={illustration2}
              style={{ width: "100%", height: "auto" }}
              alt="career standing art"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default CareerBanner