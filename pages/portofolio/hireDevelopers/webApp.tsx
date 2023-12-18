import Link from "next/link";
import hireData from "../../../data/hireData.json";
import { IHireDataListDetail } from "../../../models/hire.model";

function WebApp() {
  const hireDataList: IHireDataListDetail[] = hireData.hireDataList.web;
  return (
    <section className="services-main section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="sec-content">
              <h2>Web App Developers</h2>
              <div className="sec-content__desc mt-3">
                <p>
                  Hire dedicated Web developers to create the online presence
                  for your dream business.
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
                    <p>{listItem.description}</p>
                    <div className="gbox__item-btn">
                      <Link
                        href="/services/pages/laravel-development"
                        className="btn btn-hire btn--hvr-shadow"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebApp;
