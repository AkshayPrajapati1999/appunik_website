import Service1 from "../../images/illustations/Service 1.png";
import Service2 from "../../images/illustations/Service 2.png";
import Image from "next/image";
function ServiceBanner() {
  return (
    <section className="pages_banner banner_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
          <div className="col-lg-6 banner_ai wow anime mobile_screen" data-wow-delay="0.4s">
            <Image
              src={Service2}
              className="service_art"
              style={{ width: "90%", height: "auto" }}
              alt="service banner side art "
            />
          </div>
            <ol className="breadcrumb">
              <li>
                <h1>Service</h1>
              </li>
            </ol>
            <h3 className="projectbanner_title">
              Our IT company offers a wide range of services to help businesses
              optimize their technology infrastructure. our team has the
              expertise to deliver reliable and effective IT solutions tailored
              to your unique needs. Let us help you achieve your business goals
              through technology
            </h3>
            <figure className="wow zoomIn">
              <Image
                src={Service1}
                style={{ width: "100px", height: "auto" }}
                alt="service banner art"
                className="banner-lamp"
              />
            </figure>
          </div>

          <div className="col-lg-6 banner_ai wow anime web_screen" data-wow-delay="0.4s">
            <Image
              src={Service2}
              className="service_art"
              style={{ width: "90%", height: "auto" }}
              alt="service banner side art "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceBanner;
