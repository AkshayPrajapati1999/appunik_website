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
import Head from "next/head";
import isoSvg from "../../../images/iosInfo.svg";
import ServiceInfo from "../../../component/serviceInfo";

import AndroidStudio from "../../../images/technology/android-studio-480.svg";
import Adobe from "../../../images/technology/adobe-xd-2-1.svg";
import Figma from "../../../images/technology/Figma.svg";
import TitaniumXd from "../../../images/technology/titaniumXD.png";
import Xcode from "../../../images/list icon/android.svg";
import logo from "../../../images/hire logo/cloud-application-logo.svg";
function CloudAppDevelopment() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Empowering Growth Through Expert Cloud App Development`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo:`Our IT company specializes in cloud app development, providing cutting-edge solutions tailored to meet the unique needs of businesses. Our skilled team of developers utilizes the latest technologies to create scalable and secure cloud applications that enhance productivity, streamline processes, and drive innovation.`,
    },
  ];

  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: icon1.src,
          value: `Native App Development`,
          lists: [
            { list: "Cloud Native App Development refers to the process of building and deploying applications designed specifically for cloud environments." },
          ],
        },
        {
          image: icon2.src,
          value: `App Modernization & Migration`,
          lists: [
            { list: "App modernization & migration involves updating and transferring applications to newer platforms, technologies, or cloud environments ." },
          ],
        },
        {
          image: icon3.src,
          value: `Strategy & Roadmap`,
          lists: [
            { list:" A strategy and roadmap describe the planned course of action and milestones to achieve specific goals and objectives within an organization." },
          ],
        },
        {
          image: icon4.src,
          value: `Containers & Microservice `,
          lists: [
            { list: "They are lightweight and self-contained, making them easy to move around and deploy." },
          ],
        },
        {
          image: icon5.src,
          value: `Cloud Migration Services`,
          lists: [
            { list: "Cloud Migration Services help businesses transition their applications, data, and infrastructure from on-premises systems to cloud environments. " },
          ],
        },
        {
          image: icon5.src,
          value: `Cloud Serverless App `,
          lists: [
            { list: "Cloud serverless app development refers to the process of creating and deploying applications that run on serverless computing platforms." },
          ],
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
    <>
      <Banner banner={banner}></Banner>
      <ServiceCounter counters={counters} />
      {/* <ServiceApp serviceApp={serviceApp}/> */}
      <ServiceInfo serviceInfo={serviceInfo} />
    </>
  );
}

export default CloudAppDevelopment;
