import Image from "next/image";
import ui_ux from "../../../images/hire icons/HireUiUxDesigner.svg";
import qa from "../../../images/hire icons/HireQaEngineers.svg";
import hireData from "../../../data/hireData.json";
import { IHireDataListDetail } from "../../../models/hire.model";
import Link from "next/link";

function ExperiencedDesigners() {
  const hireDataList: IHireDataListDetail[] = hireData.hireDataList.experience;
  return (
    <section className="services-main">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="sec-content">
              <h2 className="experience">Hire Experienced Designers</h2>
              <div className="sec-content__desc mt-3">
                <p>
                  From creative UI/UX designers to quality assurance engineers,
                  choose from the pool of highly proficient resources and take
                  your business to the next level.We work closely with
                  businesses supporting them at each step of the development
                  process.
                </p>
              </div>
            </div>

            <div className="gbox gbox--shadow pt--7">
              {hireDataList &&
                hireDataList.map((listItem: any, listItemIndex: number) => (
                  <div className="gbox__item" key={listItemIndex}>
                    <img
                      src={listItem.image}
                      className="img-fluid gbox__item-img ls-is-cached lazyloaded"
                      alt={listItem.imageInfo}
                    />
                    <h3 className="gbox__item-head">{listItem.title}</h3>
                    <p>
                    {listItem.description}
                    </p>
                    <div className="gbox__item-btn">
                      <Link
                        href="/services/pages/app-designing"
                        className="btn btn-hire btn--hvr-shadow"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                ))}
              {/* <div className="gbox__item">
                <Image
                  src={qa}
                  className="img-fluid gbox__item-img ls-is-cached lazyloaded"
                  alt=""
                />
                <h3 className="gbox__item-head">QA Engineers</h3>
                <p>
                  We offer fast hiring within 24 hours, transparent pricing, and
                  clear communication to enhance customer satisfaction.
                </p>
                <div className="gbox__item-btn">
                  <Link
                    href="/services/pages/qa"
                    className="btn btn-hire btn--hvr-shadow"
                  >
                    View More
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperiencedDesigners;
