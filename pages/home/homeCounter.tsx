import React from "react";
import CountUp from "react-countup";
import icon from "../../images/icons/project.png";
import icon2 from "../../images/icons/cup-of-coffee.png";
import icon3 from "../../images/icons/Members.png";
import icon4 from "../../images/icons/Clients.png";

import client from "../../images/home page/client.svg";
import coffee from "../../images/home page/cup-of-coffee.svg";
import experience from "../../images/home page/experience.svg";
import projects from "../../images/home page/projects.svg";
import team from "../../images/home page/team.svg";

import Image from "next/image";
function HomeCounter() {
  return (
    <section className="digital_agency">
      <div
        className="title container "
        data-aos="zoom-out-up"
        // data-aos-offset="150"
        data-aos-easing="ease-out-quart"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="ball">
          <span></span>
        </div>
        <h1>WHY CHOOSE APPUNIK & CREATIVE OUR SERVICES</h1>
        <p className="service_content">
          Our commitment to delivering high-quality IT solutions and services.
          Our team of experienced professionals is dedicated to understanding
          your unique business needs and providing customized solutions to meet
          those needs.
        </p>
      </div>

      <div
        className="agency_count"
        data-aos="zoom-out-up"
        data-aos-offset="150"
        data-aos-easing="ease-out-quart"
        data-aos-once="false"
      >
        {/* Web Screen Start*/}
        <div className="container web_screen">
          <div className="row countarup_area">
            <div className="col-6 col-lg-4">
              <div className="counter_item wow zoomIn">
                <Image
                  src={projects}
                  className="counter_icon"
                  alt="project icon"
                />
                <div>
                  <h2>
                    <span className="counter">
                      <CountUp start={0} end={40} />
                      &#43;
                    </span>
                  </h2>
                  <h4>No. of Projects</h4>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-4">
              <div className="counter_item">
                <Image src={team} className="counter_icon" alt="member icon" />
                <div>
                  <h2>
                    <span className="counter">
                      <CountUp start={0} end={35} />
                      &#43;
                    </span>
                  </h2>
                  <h4>Our Team</h4>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-4">
              <div className="counter_item">
                <Image
                  src={client}
                  className="counter_icon"
                  alt="client icon"
                />
                <div>
                  <h2>
                    <span className="counter">
                      <CountUp start={0} end={20} />
                      &#43;
                    </span>
                  </h2>
                  <h4>Happy Clients</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row countarup_area">
            <div className="offset-2"></div>
            <div className="col-6 col-lg-4 ">
              <div className="counter_item">
                <Image
                  src={coffee}
                  className="counter_icon"
                  alt="coffee icon"
                />
                <div>
                  <h2 className="counter">
                    <CountUp start={0} end={450} />
                    &#43;
                  </h2>
                  <h4>Cups of Coffee</h4>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-4">
              <div className="counter_item">
                <Image
                  src={experience}
                  className="counter_icon"
                  alt="Years Of Experience Icon"
                />
                <div>
                  <h2>
                    <span className="counter">
                      <CountUp start={0} end={5} />
                      &#43;
                    </span>
                  </h2>
                  <h4>Years Of Experience</h4>
                </div>
              </div>
            </div>
            <div className="offset-2"></div>
          </div>
        </div>
        {/* Web Screen End */}

        {/* Mobile Screen Start */}
        <div className="container mobile_screen">
          <div className="Row countarup_area">
            <div className="Column">
              <div className="counter_item wow zoomIn">
                <div className="text-center">
                  <h2>
                    <span className="counter">
                      <CountUp start={0} end={40} />
                      &#43;
                    </span>
                  </h2>
                  <h4>No. of Projects</h4>
                </div>
              </div>
            </div>

            <div className="Column">
              <div className="counter_item">
                <div className="text-center">
                  <h2>
                    <span className="counter">
                      <CountUp start={0} end={35} />
                      &#43;
                    </span>
                  </h2>
                  <h4>Our Team</h4>
                </div>
              </div>
            </div>

            <div className="Column">
              <div className="counter_item">
                <div className="text-center">
                  <h2>
                    <span className="counter">
                      <CountUp start={0} end={20} />
                      &#43;
                    </span>
                  </h2>
                  <h4>Happy Clients</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="Row countarup_area">
            <div className="offset-2"></div>
            <div className="Column">
              <div className="counter_item">
                <div className="text-center">
                  <h2 className="counter">
                    <CountUp start={0} end={450} />
                    &#43;
                  </h2>
                  <h4>Cups of Coffee</h4>
                </div>
              </div>
            </div>

            <div className="Column">
              <div className="counter_item">
                <div className="text-center">
                  <h2>
                    <span className="counter">
                      <CountUp start={0} end={5} />
                      &#43;
                    </span>
                  </h2>
                  <h4>Years Of Experience</h4>
                </div>
              </div>
            </div>
            <div className="offset-2"></div>
          </div>
        </div>
        {/* Mobile Screen End */}
      </div>
    </section>
  );
}
export default HomeCounter;
