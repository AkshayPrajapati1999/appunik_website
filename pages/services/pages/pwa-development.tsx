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
import logo from "../../../images/hire logo/progressive-wep-app-logo.svg";
function PweDevelopment() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `PWA Development Excellence: Explore Our Services for a Better Web Future`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo:`Our IT company specializes in developing progressive web apps (PWAs) that provide a seamless and engaging user experience. We leverage cutting-edge technologies to build highly responsive and interactive web applications that work across all devices and platforms.`,
    },
  ];  

  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: icon1.src,
          value: `Custom PWA Development`,
          lists: [
            { list: "Unlock the power of progressive web apps (PWAs) with our custom development solutions. Enhance user experience and boost engagement on any device." },
          ],
        },
        {
          image: icon2.src,
          value: `Trendy PWA Design`,
          lists: [
            { list: "Discover the power of Progressive Web App (PWA) design trends, combining seamless user experience, responsiveness, and offline functionality. " },
          ],
        },
        {
          image: icon3.src,
          value: `PWA Plugin Development`,
          lists: [
            { list: "Develop powerful Progressive Web App (PWA) plugins to enhance user experiences, boost performance, and deliver seamless cross-platform functionality." },
          ],
        },
        {
          image: icon4.src,
          value: `Seamless PWA Migration
          `,
          lists: [
            { list: "Discover the benefits of seamless Progressive Web App (PWA) migration for your business, improving user experience and engagement" },
          ],
        },
        {
          image: icon5.src,
          value: `Responsive PWA Development`,
          lists: [
            { list: "Create engaging and user-friendly Progressive Web Apps (PWA) with our responsive development services. Deliver exceptional mobile experiences." },
          ],
        },
        {
          image: icon5.src,
          value: `PWA Support & Maintenance`,
          lists: [
            { list: "PWA support and maintenance services ensure optimal performance and continuous updates for Progressive Web Apps, enhancing user experience." },
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

export default PweDevelopment;
