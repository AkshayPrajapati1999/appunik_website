import Link from "next/link";
import hireData from "../../../data/hireData.json";
import { IHireDataListDetail } from "../../../models/hire.model";

function MobileApp() {
  const hireDataList: IHireDataListDetail[] = hireData.hireDataList.mobile;

  return (
    // <section className="pages_banner banner_area">
    <div className="hire-developers-container">
      <section className="services-main">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="sec-content">
                <h2>Mobile App Developers</h2>
                <div className="sec-content__desc mt-3">
                  <p>
                    Be it native or hybrid, the certified mobile app developers
                    at iCoderz can serve you with the best mobile app
                    development services.
                  </p>
                </div>
              </div>

              <div className="gbox gbox--shadow pt--7D">
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
                          href="/services/pages/ios-development"
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
    </div>
    // </section>
  );
}

export default MobileApp;
