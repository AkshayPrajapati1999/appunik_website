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

import logo from "../../../images/hire logo/react-logo.svg";
function ReactNativeDevelopment() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Empower Your Business with Cutting-Edge React Native Mobile Solutions`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo: `We boast a highly proficient team of experts who possess exceptional intelligence and a comprehensive understanding of the React Native platform. Our primary objective is to create applications that not only meet client expectations but also provide an unparalleled experience for their customers.`
    },
  ];

  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: icon1.src,
          value: `Migration to React Native`,
          lists: [
            {
              list: "Efficiently migrate your services  and unlock the power of cross-platform development. Enhance user experiences with our expert migration services.",
            },
          ],
        },
        {
          image: icon2.src,
          value: `Custom React Native App `,
          lists: [
            {
              list: "A custom React Native app development service refers to the creation of mobile applications using the React Native framework to specific needs of a client. ",
            },
          ],
        },
        {
          image: icon3.src,
          value: `Support & Maintenance `,
          lists: [
            {
              list: "We offer complete support and maintenance service whenever you face any security, bug, or performance-related issue.",
            },
          ],
        },
        {
          image: icon4.src,
          value: `UI/UX Design  `,
          lists: [
            {
              list: "Crafting intuitive and visually stunning UI/UX designs for your React Native app, delivering seamless and delightful user experiences ",
            },
          ],
        },
        {
          image: icon5.src,
          value: `API Development & Integration `,
          lists: [
            {
              list: "Develop and integrate APIs for React Native apps, enhancing functionality and connectivity. Get started with our comprehensive guide.",
            },
          ],
        },
        {
          image: icon5.src,
          value: `Instant Data Updates`,
          lists: [
            {
              list: "Ensure real-time data synchronization in your React Native apps for seamless updates and smooth user experiences. Learn how to implement it effectively.",
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
      title: "Our Expertise With React-Native Development Technology ",
      appheading: "React-Native Development Tools",
      serviceImages: [
        {
          image: AndroidStudio.src,
          info: "Android Studio",
        },
        {
          image: Xcode.src,
          info: "Android SDK",
        },
        {
          image: Adobe.src,
          info: "Adobe XD",
        },
        {
          image: Figma.src,
          info: "Figma",
        },
        {
          image: TitaniumXd.src,
          info: " Titanium Mobile SDK",
        },
      ],
    },
  ];
  return (
    <div>
      <Banner banner={banner}></Banner>
      <ServiceCounter counters={counters} />
      {/* <ServiceApp serviceApp={serviceApp} /> */}
      <ServiceInfo serviceInfo={serviceInfo} />
    </div>
  );
}

export default ReactNativeDevelopment;
