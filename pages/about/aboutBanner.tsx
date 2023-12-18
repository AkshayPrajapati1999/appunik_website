import img1 from "../../images/illustations/About Us0.png";
import img2 from "../../images/illustations/About Us.png";
import Image from "next/image";
export default function aboutBanner() {
  return (
    // <Parallax  scale={[1.1, 0.8]} easing="easeInOut" speed={10} >
    <section className="pages_banner banner_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">

          <div className="col-lg-6 banner_ai wow zoomIn mobile_screen" data-wow-delay="0.4s">
            <Image
              src={img2}
              style={{ width: "80%", height: "auto" }}
              alt="about standing art"
            />
          </div>

            <ol className="breadcrumb">
              <li>
                <h1>About Us</h1>
              </li>
            </ol>
            <h3 className="aboutbanner_title">
            We are a team of tech enthusiastic dedicated to crafting innovative solutions for your digital needs
            </h3>
            <figure className="wow zoomIn">
              <Image
                src={img1}
                alt="standing man vector art"
                style={{ width: "50px", height: "auto" }}
                className="banner-lamp"
              />
            </figure>
          </div>

          <div className="col-lg-6 banner_ai wow zoomIn web_screen" data-wow-delay="0.4s">
            <Image
              src={img2}
              style={{ width: "80%", height: "auto" }}
              alt="about standing art"
            />
          </div>
        </div>
      </div>
    </section>
    // </Parallax>
  );
}
