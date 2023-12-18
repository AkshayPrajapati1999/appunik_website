import React from 'react'
import Banner from '../../../component/banner'
import ServiceCounter from '../../../component/serviceCounter'
import { IServiceBanner, IServiceCounter } from "../../../models/service.model";
import img2 from "../../../images/illustations/Portfolio 1.png";
import img1 from "../../../images/illustations/Portfolio 2.png";
import icon1 from "../../../images/icons/Icons.png";
import icon2 from "../../../images/icons/Icons-1.png";
import icon3 from "../../../images/icons/industry-40.png";
import icon4 from "../../../images/icons/layer1.png";
import icon5 from "../../../images/icons/on-time.png";
import logo from "../../../images/hire logo/custom-logo.svg";
  
function CustomSoftwareDevelopment() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Custom Software Development`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo: ``,
    },
  ];

  const counters: IServiceCounter[] = [
    {
      title: `Innovative Website Development Company`,
      columns: [
        {
          image: icon1.src,
          value: `5+`,
          lists: [
            { list: "Year of Experience" },
          ],
        },
        {
          image: icon2.src,
          value: `100%`,
          lists: [
            { list: "Client Satisfaction" },
          ],
        },
        {
          image: icon3.src,
          value: `5+`,
          lists: [
            { list: "Developed Mobile App" },
          ],
        },
        {
          image: icon4.src,
          value: `10+
          `,
          lists: [
            { list: "Industries Served" },
          ],
        },
        {
          image: icon5.src,
          value: `90%`,
          lists: [
            { list: "On-Time Delivery" },
          ],
        },
        {
          image: icon5.src,
          value: `90%`,
          lists: [
            { list: "On-Time Delivery" },
          ],
        },
       
      ],
    },
  ];
  return (
    <div>
    <Banner banner={banner}></Banner>
    <ServiceCounter counters={counters} /></div>
  )
}

export default CustomSoftwareDevelopment