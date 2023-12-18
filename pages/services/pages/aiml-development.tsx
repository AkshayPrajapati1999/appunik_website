import React from "react";
import Banner from "../../../component/banner";
import ServiceCounter from "../../../component/serviceCounter";
import { IServiceApp, IServiceBanner, IServiceCounter, IServiceInfo } from "../../../models/service.model";
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
import logo from "../../../images/hire logo/artificial-intelligence-logo.svg";
function AimlDevelopment() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Elevate Your Business with AI/ML Development Excellence`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo: `We are an innovative IT company specializing in AI/ML development. Our team of experts utilizes cutting-edge technologies and advanced algorithms to create intelligent solutions.`,
    },
  ];
  
  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: icon1.src,
          value: `Masterly AI & ML Developers`,
          lists: [{ list: "Masterly AI & ML Developers are highly skilled professionals adept at creating advanced artificial intelligence and machine learning solutions." }],
        },
        {
          image: icon2.src,
          value: `Insights Latest Updates`,
          lists: [{ list: "AI-powered language model trained on diverse data. Generates human-like text, assists with tasks, and adapts to changing trends and information." }],
        },
        {
          image: icon3.src,
          value: `Served a Global Clientele`,
          lists: [{ list: "Serving a global clientele with exceptional services, catering to diverse needs, and delivering top-notch solutions across borders" }],
        },
        {
          image: icon4.src,
          value: `Research & Development`,
          lists: [{ list: "AI/ML research and development involves studying and creating algorithms and models that enable machines to learn and make intelligent decisions." }],
        },
        {
          image: icon5.src,
          value: `Algorithm Optimization`,
          lists: [{ list: "AI/ML algorithm optimization improves the performance and efficiency of machine learning models by fine-tuning parameters and techniques for better results." }],
        },
        {
          image: icon5.src,
          value: `Deployment & Integration`,
          lists: [{ list: "Optimizing AI/ML model deployment and integration for efficient and effective implementation in various applications and systems." }],
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
  const serviceApp: IServiceApp[] = [
    {
      title: "Our Expertise With AI/Ml Development Technology ",
      appheading: "AI/Ml Development Tools",
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

export default AimlDevelopment;
