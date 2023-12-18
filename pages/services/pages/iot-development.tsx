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
import icon1 from "../../../images/icons/Icons.png";
import icon2 from "../../../images/icons/Icons-1.png";
import icon3 from "../../../images/icons/industry-40.png";
import icon4 from "../../../images/icons/layer1.png";
import icon5 from "../../../images/icons/on-time.png";
import isoSvg from "../../../images/iosInfo.svg";
import ServiceInfo from "../../../component/serviceInfo";

import AndroidStudio from "../../../images/technology/android-studio-480.svg";
import Adobe from "../../../images/technology/adobe-xd-2-1.svg";
import Figma from "../../../images/technology/Figma.svg";
import TitaniumXd from "../../../images/technology/titaniumXD.png";
import Xcode from "../../../images/list icon/android.svg";
import logo from "../../../images/hire logo/iot-logo.svg";
function IotDevelopment() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Transforming Ideas into Smart Realities: Our IoT Development Services`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo: `We specialize in IoT development, creating cutting-edge solutions that connect devices, collect data, and enable seamless communication. Our expert team harnesses the power of IoT technology to drive innovation, improve operational efficiency, and enhance user experiences.`,
    },
  ];

  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: icon1.src,
          value: `Equipment Tracking App`,
          lists: [
            {
              list: "Streamline asset management with our efficient Equipment Tracking App. Real-time monitoring, instant updates.",
            },
          ],
        },
        {
          image: icon2.src,
          value: `IoT Integration`,
          lists: [
            {
              list: "Seamless IoT integration services for a connected future. Elevate your business with our cutting-edge solutions.",
            },
          ],
        },
        {
          image: icon3.src,
          value: `Smart House Solution`,
          lists: [
            {
              list: "Revolutionise living with our Smart House Solutions—seamless automation for comfort, security, and energy efficiency.",
            },
          ],
        },
        {
          image: icon4.src,
          value: `IoT Wearable Connectivity
          `,
          lists: [
            {
              list: "Empower your IoT wearables with seamless connectivity services for enhanced functionality and user experience.",
            },
          ],
        },
        {
          image: icon5.src,
          value: ` IoT Cloud Platform`,
          lists: [
            {
              list: "Empower your IoT projects with our cloud platform's seamless connectivity, real-time data analytics, and secure management.",
            },
          ],
        },
        {
          image: icon5.src,
          value: ` IoT Sensor Development`,
          lists: [
            {
              list: "Empower your devices with cutting-edge IoT sensor development for seamless connectivity and data insights.",
            },
          ],
        },
        {
          image: icon5.src,
          value: ` Warehouse Automation`,
          lists: [
            {
              list: "Revolutionize logistics with our cutting-edge warehouse automation solutions, enhancing efficiency and accuracy seamlessly.",
            },
          ],
        },
        {
          image: icon5.src,
          value: `  Assets Monitoring`,
          lists: [
            {
              list: "Real-time asset monitoring for optimized performance and security. Stay informed, react swiftly. Your assets, our priority.",
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
      title: "Our Expertise With Iot Development Technology ",
      appheading: "Iot Development Tools",
      serviceImages: [
        {
          image: AndroidStudio.src,
          info:"Android Studio"
        },{
          image: Xcode.src,
          info:"Android SDK"
        },{
          image: Adobe.src,
          info:"Adobe XD"
        },{
          image: Figma.src,
          info:"Figma"
        },{
          image: TitaniumXd.src,
          info:" Titanium Mobile SDK"
        }
      
      ],
    },
  ];
  return (
    <div>
      <Banner banner={banner}></Banner>
      <ServiceCounter counters={counters} />
      {/* <ServiceApp serviceApp={serviceApp}/> */}
      <ServiceInfo serviceInfo={serviceInfo} />
    </div>
  );
}

export default IotDevelopment;
