/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { IServiceBanner } from "../models/service.model";
import HireDialog from "./dialog";
interface ServiceProps {
  banner: IServiceBanner[];
}
function Banner({ banner }: ServiceProps) {
  return (
    <div className="services_container">
      {banner.map((item: any, index: number) => {
        return (
          // <section className="pages_banner banner_area" key={index}>
          //   <div className="container" key={index}>
          //     <div className="row">
          //       <div className="col-lg-6">
          //         <ol className="breadcrumb">
          //           <li>
          //             <h1 >{item.title}</h1>
          //           </li>
          //         </ol>
          //         <h3>{item.detail}</h3>

          //         <p className="services_banner_info">{item.titleInfo}</p>
          //         {/* <figure className="wow zoomIn">
          //       <img
          //         src={item.image1}
          //         style={{ width: "80px" }}
          //         alt={item.info}
          //         className="banner-lamp"
          //         loading="lazy"
          //       />
          //     </figure> */}
          //       </div>
          //       <div
          //         className="col-lg-6 banner_ai wow zoomIn "
          //         data-wow-delay="0.4s"
          //       >
          //         <img
          //           src={item.image2}
          //           className="banner_art"
          //           alt=""
          //           loading="lazy"
          //         />
          //       </div>
          //     </div>
          //   </div>
          // </section>
          <section className="pages_banner banner_area" key={index}>
            <section className="section hire-hero hire-hero--ios bg-white">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-9 m-auto col-md-12 col-sm-12">
                    <div className="hero__content text-center">
                      <div className="sec-content">
                        <div className="hero__img-heading">
                          <div className="hero__img-heading-box">
                            <Image
                              src={item.logo}
                              className="img-fluid"
                              alt=""
                            />
                            {/* <Image src="image/ios-logo-3d.svg" className="img-fluid hire-hero__ic" alt="" width="100" height="100"> */}
                          </div>
                          <h1 className="hero__head">{item.title}</h1>
                        </div>
                        <div className="sec-content__desc">
                          <p className="hero__subtxt text-dark-gray">
                            {item.titleInfo}
                          </p>
                          {/* <p className="hero__subtxt text-dark-gray">
                            Hire dedicated iPhone developers from India to
                            convert your unique ideas into innovative iOS mobile
                            apps. Get years of expertise and reliability from a
                            top iOS mobile app development company.
                          </p> */}
                        </div>
                        <ul className="point point--dark point--check | mt-5 d-flex align-items-lg-center justify-content-lg-center flex-wrap column-gap-5 text-lg-center text-start">
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
                        <div className="sec-content__button btn-arrow | d-inline-flex flex-column align-items-center">
                          {/* <a
                            href="#"
                            className="btn btn-hire btn--hvr-shadow redirect-form"
                            data-bs-toggle="modal"
                            data-bs-target="#contactModal"
                          >
                            Hire iOS Developer Now
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
          </section>
        );
      })}
    </div>
  );
}

export default Banner;
