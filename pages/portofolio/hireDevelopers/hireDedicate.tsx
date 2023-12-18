import HireDialog from "../../../component/dialog";

function HireDedicate() {
  return (
    <section className="pages_banner banner_area">
      <div className="hire-developers-container">
        <section className="section hero bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-9 m-auto col-md-12 col-sm-12">
                <div className="text-center">
                  <div>
                    <div className="hero__img-heading">
                      <h1>Hire Dedicated Developers for Mobile and Web</h1>
                    </div>
                    <div>
                      <p className="text-dark-gray">
                        We provide dedicated developers teams to help businesses
                        grow digitally. The right and skilled resources are
                        pivotal for the success of any project. Our proficient
                        mobile app developers hold mastery in leveraging a wide
                        range of technologies like Android, iOS, React Native,
                        Flutter, Ionic, etc. Hire a dedicated web and mobile app
                        developers with iCoderz solutions who are experienced
                        and committed to delivering quality results within the
                        deadline.
                      </p>
                    </div>
                    <ul className="point point--dark point--check | mt-5 d-flex flex-wrap column-gap-5">
                      <li className="point__item text-secondary">
                        Fast hiring within 24 hours
                      </li>
                      <li className="point__item text-secondary">
                        Simple &amp; Transparent Pricing
                      </li>
                      <li className="point__item text-secondary">
                        Fully Signed NDA &amp; Code Security
                      </li>
                      <li className="point__item text-secondary">
                        Regular Reporting &amp; Transparent Communication
                      </li>
                      <li className="point__item text-secondary">
                        Easy Exit Policy
                      </li>
                    </ul>
                    <div className="btn-arrow | d-inline-flex flex-column align-items-center">
                      {/* <a
                        href="#"
                        className="btn btn-hire btn--hvr-shadow redirect-form"
                        data-bs-toggle="modal"
                        data-bs-target="#contactModal"
                      >
                        Hire Developers Now
                      </a> */}
                      <HireDialog />
                      <span className="button-subtxt | fs-200 d-block mt-3">
                        100% risk-free, 1 weeks trial period.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default HireDedicate;
