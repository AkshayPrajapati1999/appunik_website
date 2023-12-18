import React from "react";
import Banner from "../../../component/banner";
import ServiceCounter from "../../../component/serviceCounter";
import {  IServiceBanner, IServiceCounter, IServiceInfo } from "../../../models/service.model";
import img2 from "../../../images/illustations/Portfolio 1.png";
import img1 from "../../../images/illustations/Portfolio 2.png";
import icon1 from "../../../images/icons/Icons.png";
import icon2 from "../../../images/icons/Icons-1.png";
import icon3 from "../../../images/icons/industry-40.png";
import icon4 from "../../../images/icons/layer1.png";
import icon5 from "../../../images/icons/on-time.png";
import isoSvg from "../../../images/iosInfo.svg";
import ServiceInfo from "../../../component/serviceInfo";

import Zeplin from "../../../images/technology/Zeplin.svg";
import Adobe from "../../../images/technology/adobe-xd-2-1.svg";
import Figma from "../../../images/technology/Figma.svg";
import TitaniumXd from "../../../images/technology/titaniumXD.png";
import Xcode from "../../../images/list icon/android.svg";
import logo from "../../../images/hire logo/android-logo.svg"
function androidDevelopment() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Expert Android Development Services for Innovative Mobile Solutions`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo: `We develop cutting-edge android projects to cater to the global business needs of our clients. Our team excels in leveraging efficient working systems, ensuring prompt responses and seamless management.
      `,
    },
  ];
  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: icon1.src,
          value: `Android Game Development`,
          lists: [{ list: "We offer professional Android game development services tailored to meet your unique gaming needs." }],
        },
        {
          image: icon2.src,
          value: `Custom App Development`,
          lists: [{ list: "Tailored app solutions for your needs, from ideation to launch." }],
        },
        {
          image: icon3.src,
          value: `IoT-Based App Development`,
          lists: [{ list: "IoT app dev services: innovative, connected experiences. Custom solutions for smart homes, cities, industries." }],
        },
        {
          image: icon4.src,
          value: `WearOS App Development `,
          lists: [{ list: "Professional wearOS app development services for smartwatches and wearables." }],
        },
        {
          image: icon5.src,
          value: `Android App UI/UX Design`,
          lists: [{ list: "Expert UI/UX design for Android apps, creating intuitive, visually appealing and user-friendly experiences." }],
        },
        {
          image: icon5.src,
          value: `Framework Development`,
          lists: [{ list: "Crafting powerful frameworks for seamless digital experiences. Elevate your projects with our expert framework development services." }],
        },
      ],
    },
  ];
  const serviceInfo: IServiceInfo[] = [
    {
      title: "For Hassle Free Business Growth, Schedule A Call With Our Experts To Get A FREE Consultation And Development Quote.",
      subTitle:"",
      buttonInfo: "Hire our Dedicated Devlopers",
      image: isoSvg.src,
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

export default androidDevelopment;
