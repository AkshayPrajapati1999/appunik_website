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
import logo from "../../../images/hire logo/mern-logo.svg";
function MernDevelopment() {
    const banner: IServiceBanner[] = [
        {
          image1: img1.src,
          title: `Expert MERN Stack Development Services for Seamless Web Solutions`,
          detail: ``,
          image2: img2.src,
          logo: logo,
          info: "",
          titleInfo: `Mern Development is a leading IT company specializing in cutting-edge web application development using the MERN stack. With a team of skilled developers and designers, we deliver innovative and robust solutions tailored to our clients' unique business needs. Our expertise lies in building scalable and efficient web applications. `,
        },
      ];


      const counters :IServiceCounter[]=[
        {
            title: `What We Do`,
            columns: [
              {
                image: "",
                value: `Third-Party Integration`,
                lists: [{ list: "Integrate third-party services seamlessly into your workflow to enhance productivity and efficiency. Connect, automate, and optimize with ease." }],
              },
              {
                image: "",
                value: `Consulting & Planning`,
                lists: [{ list: "Expert MERN stack consultants offering tailored solutions and robust architecture design for efficient and scalable web applications. " }],
              },
              {
                image: "",
                value: `Maintenance & Support `,
                lists: [{ list: "Get reliable maintenance and support services for your MERN stack applications. Ensure seamless performance and uninterrupted functionality." }],
              },
              {
                image: "",
                value: `UI/UX design & prototyping`,
                lists: [{ list: "MERN stack UI/UX design and prototyping services that create visually stunning and intuitive web applications for a seamless user experience" }],
              },
              {
                image: "",
                value: `Real-Time Chat Applications`,
                lists: [{ list: "Build real-time chat applications with MERN stack, combining MongoDB, Express, React, and Node.js for seamless communication." }],
              },
              {
                image: "",
                value: `API Development`,
                lists: [{ list: "MERN stack API development: Build powerful and scalable web applications using MongoDB, Express, React, and Node.js. Harness the full potential of the MERN stack" }],
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
          title: "Our Expertise With Mern Development Technology ",
          appheading: "Mern Development Tools",
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

export default MernDevelopment