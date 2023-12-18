import React from "react";
import Banner from "../../../component/banner";
import ServiceCounter from "../../../component/serviceCounter";
import {
  IServiceApp,
  IServiceBanner,
  IServiceCounter,
  IServiceInfo,
} from "../../../models/service.model";
import img2 from "../../../images/illustations/Portfolio 1.png";
import img1 from "../../../images/illustations/Portfolio 2.png";
import isoSvg from "../../../images/iosInfo.svg";
import ServiceInfo from "../../../component/serviceInfo";
import Zeplin from "../../../images/technology/Zeplin.svg";
import Adobe from "../../../images/technology/adobe-xd-2-1.svg";
import Figma from "../../../images/technology/Figma.svg";
import TitaniumXd from "../../../images/technology/titaniumXD.png";
import Xcode from "../../../images/technology/icons8-xcode-240.svg";
import logo from "../../../images/hire logo/ios-logo.svg";

function iosDevelopment() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Leading iOS Development Services for Next-Level Apps`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo: `We develop cutting-edge iOS projects to cater to the global business needs of our clients. Our team excels in leveraging efficient working systems, ensuring prompt responses and seamless management.
      We ensure regular updates throughout the work process client input to ensure their app reaches the target audience effectively. `,
    },
  ];

  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: "",
          value: `iPhone App Development`,
          lists: [
            {
              list: "Professional iPhone app development services to build custom, high-quality applications for iOS devices.",
            },
          ],
        },
        {
          image: "",
          value: `iPad App Development`,
          lists: [
            {
              list: "Custom iPad app development services for iOS, designed to meet your unique business needs.",
            },
          ],
        },
        {
          image: "",
          value: `WatchOS App Development`,
          lists: [
            {
              list: "Develop WatchOS apps with user-centric design & features, optimized for performance and compatibility.",
            },
          ],
        },
        {
          image: "",
          value: `Mac App Development`,
          lists: [
            {
              list: "Professional Mac app development services for seamless user experience and optimized performance.",
            },
          ],
        },
        {
          image: "",
          value: `AR App Development`,
          lists: [
            {
              list: "Creating AR apps for immersive experiences using cutting-edge technology and expertise.",
            },
          ],
        },
        {
          image: "",
          value: `IoT App Development`,
          lists: [
            {
              list: "IoT app dev services create software solutions for connected devices & enable seamless data communication .",
            },
          ],
        },
      ],
    },
  ];
  const serviceInfo: IServiceInfo[] = [
    {
      title:
        "For Hassle Free Business Growth, Schedule A Call With Our Experts To Get A FREE Consultation And Development Quote.",
      subTitle: "",
      buttonInfo: "Hire our Dedicated Devlopers",
      image: isoSvg.src,
    },
  ];
  const serviceApp: IServiceApp[] = [
    {
      title: "Our Expertise With Ios Development Technology ",
      appheading: "Ios Development Tools",
      serviceImages: [
        {
          image: Zeplin.src,
          info:"Zeplin"
        },{
          image: Xcode.src,
          info:"Xcode"
        },{
          image: Adobe.src,
          info:"Adobe XD"
        },{
          image: Figma.src,
          info:"Figma"
        },{
          image: TitaniumXd.src,
          info:"Titanium SDK"
        }
      
      ],
    },
  ];
  return (
    <>
      <Banner banner={banner} />
      <ServiceCounter counters={counters} />
      {/* <ServiceApp serviceApp={serviceApp} /> */}
      <ServiceInfo serviceInfo={serviceInfo} />
    </>
  );
}

export default iosDevelopment;
