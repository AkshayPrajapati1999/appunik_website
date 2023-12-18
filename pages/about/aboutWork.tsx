/* eslint-disable @next/next/no-img-element */
import { IAboutUsWorks } from "../../models/about.model";
interface AboutUsWorksProps {
  works: IAboutUsWorks[];
}

function AboutWork(props: AboutUsWorksProps) {
  return (
    <div>
      <div
        className="container"
        data-aos="zoom-out-up"
        // data-aos-offset="150"
        data-aos-easing="ease-out-quart"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="row">
          <div className="col-lg-12">
            <h3 className="aboutwork_title">How We Work?</h3>
          </div>
        </div>

        {props.works &&
          props.works.map((work: IAboutUsWorks, index: number) => {
            return (
              <div
                className={index === props.works.length - 1 ? "last" : ""}
                key={index}
              >
                <div
                  className={
                    "row " + ((index + 1) % 2 === 0 ? "alignment " : "")
                  }
                  key={index}
                >
                  <div className="col-lg-6 col-md-6 mt-5 mobile_screen">
                    <img
                      src={work.image}
                      className="vector_art_flow"
                      alt="work flow "
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div
                      className={
                        (index + 1) % 2 === 0 ? "left-arrow " : "right-arrow"
                      }
                    ></div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="aboutwork_wrapper">
                      <h2 className="about_wrapper_title">{work.title}</h2>
                      <h6 className="about_wrapper_info">{work.detail}</h6>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 web_screen">
                    <img
                      src={work.image}
                      className="vector_art_flow"
                      alt="work flow "
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div
                      className={
                        (index + 1) % 2 === 0 ? "left-arrow " : "right-arrow"
                      }
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AboutWork;
