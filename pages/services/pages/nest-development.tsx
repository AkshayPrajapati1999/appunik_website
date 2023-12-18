import React from 'react'
import img2 from "../../../images/illustations/Portfolio 1.png";
import img1 from "../../../images/illustations/Portfolio 2.png";
import Banner from '../../../component/banner';
import ServiceCounter from '../../../component/serviceCounter';
import { IServiceApp, IServiceBanner, IServiceCounter, IServiceInfo } from '../../../models/service.model';
import isoSvg from "../../../images/iosInfo.svg";
import ServiceInfo from "../../../component/serviceInfo";

import AndroidStudio from "../../../images/technology/android-studio-480.svg";
import Adobe from "../../../images/technology/adobe-xd-2-1.svg";
import Figma from "../../../images/technology/Figma.svg";
import TitaniumXd from "../../../images/technology/titaniumXD.png";
import Xcode from "../../../images/list icon/android.svg";
import logo from "../../../images/hire logo/nest-logo.svg";
function NestDevelopment() {
    const banner: IServiceBanner[] = [
        {
          image1: img1.src,
          title: `Next-level Living: Explore Our Nest Development Services`,
          detail: ``,
          image2: img2.src,
          logo: logo,
          info: "",
          titleInfo: `Nest Development is a leading IT company specializing in innovative software solutions. We offer custom software development, web and mobile app development, cloud computing services, and IT consulting. With a talented team of developers, designers, and engineers.`,
        },
      ];
      const counters :IServiceCounter[]=[
        {
            title: `What We Do`,
            columns: [
              {
                image: "",
                value: `Secure Alarm System`,
                lists: [{ list: "Nest Secure: A reliable smart home alarm system offering seamless integration, easy setup, and advanced security features for peace of mind" }],
              },
              {
                image: "",
                value: `Aware Subscription Service`,
                lists: [{ list: "Nest Aware is a subscription service that enhances your Nest devices, providing advanced features like continuous video recording and intelligent alerts" }],
              },
              {
                image: "",
                value: `Mobile App Services`,
                lists: [{ list: "NestJS Mobile App Development Services: Harness the power of theNestJS framework for robust and efficient mobile app development." }],
              },
              {
                image: "",
                value: `Web Development Services`,
                lists: [{ list: "Professional NestJS web development services for scalable and efficient backend solutions. Harness the power of TypeScript and Node.js" }],
              },
              {
                image: "",
                value: `UI/UX Development for NextJs`,
                lists: [{ list: "NextJs UI/UX development: Create seamless and intuitive user experiences with NextJs, a powerful framework for building fast and responsive web applications" }],
              },
              {
                image: "",
                value: `Custom NextJs App`,
                lists: [{ list: "Custom Next.js app development for creating high-performance, server-rendered React applications with seamless client-side transitions" }],
              },
            ],
          },
      ]
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
          title: "Our Expertise With Nest Development Technology ",
          appheading: "Nest Development Tools",
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
    <>
    <Banner banner={banner}/>
    <ServiceCounter counters={counters}/>
    {/* <ServiceApp serviceApp={serviceApp}/> */}
    <ServiceInfo serviceInfo={serviceInfo} />
    </>
  )
  }

export default NestDevelopment