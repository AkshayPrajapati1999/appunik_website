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

import logo from "../../../images/hire logo/unity-logo.svg";
function UnityDevelopment() {
    const banner: IServiceBanner[] = [
        {
          image1: img1.src,
          title: `Elevate Your Vision: Unity Game and App Development`,
          detail: ``,
          image2: img2.src,
          logo: logo,
          info: "",
          titleInfo: `Our company boasts a team of highly skilled and imaginative Unity developers who possess extensive experience and comprehensive knowledge in Unity development. Over the years, we have partnered with numerous small and large businesses to bring their game development visions to life. `,
        },
      ];

      const counters :IServiceCounter[]=[
        {
            title: `What We Do`,
            columns: [
              {
                image: "",
                value: ` Unity Analytics`,
                lists: [{ list: "Unity Analytics provides actionable insights on user behavior, engagement, and monetization for game developers to optimize their experiences." }],
              },
              {
                image: "",
                value: `Unity Cloud Build`,
                lists: [{ list: "Accelerate your game development with Unity Cloud Build. Build, test, and deploy games seamlessly across multiple platforms with ease" }],
              },
              {
                image: "",
                value: `Unity LiveOps`,
                lists: [{ list: "Optimize and enhance player experiences with Unity LiveOps. Drive engagement, retention, and monetization in your games through data-driven strategies" }],
              },
              {
                image: "",
                value: `In-App Purchases`,
                lists: [{ list: "Enhance your mobile app monetization with Unity Services for In-App Purchases. Maximize revenue and engage users with seamless and secure transactions" }],
              },
              {
                image: "",
                value: `Unity Machine Learning Agents`,
                lists: [{ list: "Unity Machine Learning Agents is  open-source toolkit that enables researchers and developers to train intelligent agents using Unity's  game engine" }],
              },
              {
                image: "",
                value: `Unity XR`,
                lists: [{ list: "Empower your virtual reality experiences with Unity XR, the leading platform for creating immersive and interactive XR content " }],
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
          title: "Our Expertise With Unity Development Technology ",
          appheading: "Unity Development Tools",
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

export default UnityDevelopment