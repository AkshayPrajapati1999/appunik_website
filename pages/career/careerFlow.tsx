/* eslint-disable @next/next/no-img-element */
import { ICareerFlow } from "../../models/career.model";
interface CareerProps {
  careerflow: ICareerFlow[];
}
 function CareerFlow({ careerflow }: CareerProps) {
  return (
    <div className="career_flow_container"  data-aos="zoom-out-up"
    // data-aos-offset="150"
    data-aos-easing="ease-out-quart"
    data-aos-once="false" data-aos-anchor-placement="top-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="career_flow_title">Recruitment Process</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="icon_container">       
              {careerflow && careerflow.map((flow: ICareerFlow, index: number) => {
                return (
                    <div className="icon_wrapper" key={`flow_${index}`}>
                      <img className="mobile_screen" src={flow.mobileImage} alt={flow.text}/>
                      <img className="web_screen" src={flow.image} alt={flow.text}/>
                      <h4>{flow.info}</h4>
                    </div>
                );
              })}
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}
export default CareerFlow
