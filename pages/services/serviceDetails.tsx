/* eslint-disable @next/next/no-img-element */
import { IServiceDetail } from "../../models/service.model";
interface ServiceProps {
  panels: IServiceDetail[];
}
function ServiceDetail({ panels }: ServiceProps) {
  return (
    <>
      <div className="container">
        {panels && panels.map((panel, index) => {
          return (
            <div
              className={
                "row " + ((index + 1) % 2 === 0 ? "alignment " : "") + "my-5  "
              }
              key={index}
              data-aos="zoom-out-up"
              // data-aos-offset="150"
              data-aos-easing="ease-out-quart"
              data-aos-once="false" data-aos-anchor-placement="top-center"
            >
              <div className="col-lg-6" style={{ textAlign: "center" }}>
                <img
                  className="service_panel_image"
                  src={panel.image}
                  alt={panel.imageInfo}
                />
              </div>
              <div className="col-lg-6">
                <div className="service_panel_wrapper">
                  <h1>{panel.title}</h1>
                  <ul>
                    <li>
                      <span>{panel.info1}</span>
                    </li>
                    <li>
                      <span>{panel.info2}</span>
                    </li>
                    <li>
                      <span>{panel.info3}</span>
                    </li>
                    <li>
                      <span>{panel.info4}</span>
                    </li>
                    <li>
                      <span>{panel.info5}</span>
                    </li>
                  </ul>
                  {/* <a className="panel_btn_container theme_btn " href={panel.to}>
                    Know more
                  </a> */}
                  <a className="btn btn-hire btn-hire btn--hvr-shadow redirect-form mt-3 more-btn" href={panel.to}>
                    Know More
                  </a>
                  <div className="shap_style style_3">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ServiceDetail;
