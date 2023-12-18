
import React from 'react'
import { IServiceInfo } from '../models/service.model';
interface ServiceProps {
    serviceInfo: IServiceInfo[];
  }
function ServiceInfo({serviceInfo} :ServiceProps) {
  return (
    <div className='service_info_container'     data-aos="zoom-out-up"
    // data-aos-offset="150"
    data-aos-easing="ease-out-quart"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
      {serviceInfo.map((infoList: any, index: number) => {
        return (
          <section className="" key={index}>
            <div className="container" key={index}>
              <div className="row">
                <div className="col-lg-6">
                    <h3>{infoList.title}</h3>
                    <p>{infoList.subTitle}</p>
                    {/* <button className='theme_btn'>{infoList.buttonInfo}</button> */}
                </div>
                <div
                  className="col-lg-6 image_wrapper"
                >
                <img src={infoList.image } alt='service illustrations'/>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  )
}

export default ServiceInfo

