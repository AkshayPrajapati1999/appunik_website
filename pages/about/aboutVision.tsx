import Image from "next/image";
import img1 from "../../images/illustations/Our Vision 1.png";
import img2 from "../../images/illustations/Our Mission 1.png";

function AboutVision() {
  return (
    <div
      className="about-vision-container"
      data-aos="zoom-out-up"
      // data-aos-offset="150"
      data-aos-easing="ease-out-quart"
      data-aos-once="false" data-aos-anchor-placement="top-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="vision_container">
              <div className="vision_image">
                <Image
                  src={img1}
                  style={{ height: "auto" }}
                  alt="vision icons "
                />
              </div>
              <div className="vision_info">
                <h3>Our Vision</h3>
                <p>
                  Empowering businesses with innovative IT solutions, driving
                  success and growth for our clients, our vision is to be the
                  premier provider in the industry.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="vision_container">
              <div className="vision_image">
                <Image
                  src={img2}
                  style={{ height: "auto" }}
                  alt="vision icons "
                />
              </div>
              <div className="vision_info">
                <h3>Our Mission</h3>
                <p>
                  Our mission is to provide our clients with cutting-edge
                  technology and expert IT solutions that drive success, growth
                  and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default AboutVision;
