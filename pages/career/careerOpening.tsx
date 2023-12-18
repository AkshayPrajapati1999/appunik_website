import { useRouter } from "next/router";
import { FaChair, FaBuffer } from "react-icons/fa";
import Image from "next/image";
import { ICareerWorks } from "../../models/career.model";
interface CareerProps {
  careers: ICareerWorks[];
}
function CareerOpning({ careers }: CareerProps) {
  const router = useRouter();
  const handleClick = (e: { preventDefault: () => void }) => {
    // e.preventDefault()
    router.push("/applyForm");
  };

  return (
    <section className="career_area pa_3 "  data-aos="zoom-out-up"
    // data-aos-offset="150"
    data-aos-easing="ease-out-quart"
    data-aos-once="false" data-aos-anchor-placement="top-center">
      <div className="container">
        {careers && careers.map((career: ICareerWorks, index: number) => {
          return (
            <div
              className={
                "row " + ((index + 1) % 2 === 0 ? "alignment" : "") + "height"
              }
              key={index}
        
            >
              <div className="col-md-4 wow zoomIn animated">
                <Image
                  src={career.image}
                  alt={career.imageInfo}
                  className="pt career_image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="col-md-8">
                <div className="opning_topbar">
                  <div>
                    <h4>{career.title}</h4>
                    <div className="opning_position">
                      <FaChair />
                      <div className="opning_position_info">
                        <p>
                          No. of Openings:
                          {career.opening}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="opning_position_wrapper">
                    <div className="opning_position margin_top">
                      <FaBuffer />
                      <div className="opning_position_info">
                        <p>Experience required:</p>
                      </div>
                      {career.experience}
                    </div>
                  </div>
                </div>
                <p className="first_p mt-2">{career.details}</p>
                <div className="career_area_appy-wrapper">
                  <button className="theme_btn" onClick={handleClick}>
                    Apply
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CareerOpning;
