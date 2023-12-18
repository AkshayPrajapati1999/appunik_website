import React from "react";
import { IProjects } from "../../models/project.model";
import Slider from "./Slider/Slider";
function ProjectSlider(props: { projects: IProjects[] }) {
  const projectProvide = props.projects;
  const getNewSlider = (sliderImages: any[], parentIndex: number) => {
    return sliderImages ? (
      <div className="project-slider-container">
        <Slider
          key={`new_slider_${parentIndex}`}
          parentIndex={parentIndex}
          isEven={(parentIndex + 1) % 2 === 0}
          sliderImages={sliderImages}
        ></Slider>
      </div>
    ) : null;
  };

  return (
    <div className="slider_container">
      <div className="container">
        {projectProvide && projectProvide.map((project, index) => {
          return (
            <div
              className={
                "row " +
                ((index + 1) % 2 === 0 ? "alignment " : "") +
                "row_spacing"
              }
              key={`project_provided_${index}`}
              id="wrap"
              data-aos="zoom-out-up"
              // data-aos-offset="150"
              data-aos-easing="ease-out-quart"
              data-aos-once="false" data-aos-anchor-placement="top-center"
            >
              <div
                className="col-lg-6"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: `96% 100% `,
                  backgroundRepeat: `no-repeat`,
                  backgroundPosition: `center`,
                }}
              >
                <div
                  className={
                    project.isBackground ? "project-container-border" : ""
                  }
                >
                  {getNewSlider(project.sliderImages, index)}
                </div>
              </div>
              <div
                className="col-lg-6 project-info"
                key={`project-info_${index}`}
              >
                <div className="project-info_wrapper">
                  <h1>{project.title}</h1>
                  <p>{project.text}</p>
                  <div className="shap_style style_2">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectSlider;
