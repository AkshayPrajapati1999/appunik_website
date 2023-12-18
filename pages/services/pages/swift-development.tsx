import React from 'react'
import Banner from '../../../component/banner'
import ServiceCounter from '../../../component/serviceCounter';
import { IServiceApp, IServiceBanner, IServiceCounter, IServiceInfo } from '../../../models/service.model';
import img2 from "../../../images/illustations/Portfolio 1.png";
import img1 from "../../../images/illustations/Portfolio 2.png";
import isoSvg from "../../../images/iosInfo.svg";
import ServiceInfo from "../../../component/serviceInfo";
import AndroidStudio from "../../../images/technology/android-studio-480.svg";
import Adobe from "../../../images/technology/adobe-xd-2-1.svg";
import Figma from "../../../images/technology/Figma.svg";
import TitaniumXd from "../../../images/technology/titaniumXD.png";
import Xcode from "../../../images/list icon/android.svg";

import logo from "../../../images/hire logo/swift-logo.svg";

function SwiftDevelopment() {
    const banner: IServiceBanner[] = [
        {
          image1: img1.src,
          title: `Accelerate Your App Journey with Our Swift Development Expertise`,
          detail: ``,
          image2: img2.src,
          logo: logo,
          info: "",
          titleInfo: `We develop a Swift application that is adaptable, dynamic, widely used, customizable, and optimized for our clients. We dedicate ourselves to building an app that aligns with our client's vision, enhancing its capabilities to ensure it excels in the market and becomes a trendsetter.`,
        },
      ];

      const counters :IServiceCounter[]=[
        {
            title: `What We Do`,
            columns: [
              {
                image: "",
                value: `Swift Framework Development`,
                lists: [{ list: " Build efficient, scalable, and high-performance applications for iOS, macOS, and beyond." }],
              },
              {
                image: "",
                value: `Code Review & Debugging`,
                lists: [{ list: "Need a Swift code review and debugging? Get expert help to optimize your Swift code for efficiency to identify & fix any bugs." }],
              },
              {
                image: "",
                value: `Swift Backend Development`,
                lists: [{ list: "Swift backend development enables developers to build robust and efficient server-side applications ." }],
              },
              {
                image: "",
                value: `Third-Party Integration`,
                lists: [{ list: "Integrate third-party services into your Swift app for enhanced functionality and seamless user experiences." }],
              },
              {
                image: "",
                value: `Analytics & Reporting`,
                lists: [{ list: "Powerful app analytics and reporting for Swift applications. Gain valuable insights, track user behavior, and optimize your app's performance." }],
              },
              {
                image: "",
                value:"Enhanced Features",
                lists: [{ list: "Stay up-to-date with the latest features and improvements for your Swift app and Enhance user experience " }],
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
          title: "Our Expertise With Swift Development Technology ",
          appheading: "Swift Development Tools",
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

export default SwiftDevelopment