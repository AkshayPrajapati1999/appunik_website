import React from "react";
import NewSlider from "./singleSlider";
import  { IProjects }  from "../../../models/project.model";
function ProjectSingleSlider(props: { project: IProjects[] }) {
  const projectnewProvide = props.project;
  const getNewSlider = (
    sliderImages: any[], parentIndex: number) => {
    return sliderImages ? (
      <div className="project-slider-container">
        <NewSlider
          key={`new_slider_${parentIndex}`}
          parentIndex={parentIndex}
          isEven={(parentIndex + 1) % 2 === 0}
          sliderImages={sliderImages}
        ></NewSlider>
      </div>
    ) : null;
  };

  return (
    <div className="slider_container">
      <div className="container">
        {projectnewProvide && projectnewProvide.map((projects, index) => {
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
                  backgroundImage: `url(${projects.image})`,
                  backgroundSize: `96% 100% `,
                  backgroundRepeat: `no-repeat`,
                  backgroundPosition: `center`,
                }}
              >
                <div
                  className={
                    projects.isBackground ? "project-container-border" : ""
                  }
                >
                  {getNewSlider(projects.sliderImages, index)}
                </div>
              </div>
              <div
                className="col-lg-6 project-info"
                key={`project-info_${index}`}
              >
                <div className="project-info_wrapper">
                  <h1>{projects.title}</h1>
                  <p>{projects.text}</p>
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

export default ProjectSingleSlider;
