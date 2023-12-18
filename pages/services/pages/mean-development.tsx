import React from 'react'
import img2 from "../../../images/illustations/Portfolio 1.png";
import img1 from "../../../images/illustations/Portfolio 2.png";
import Banner from '../../../component/banner';
import ServiceCounter from '../../../component/serviceCounter';
import {  IServiceBanner, IServiceCounter, IServiceInfo } from '../../../models/service.model';
import isoSvg from "../../../images/iosInfo.svg";
import ServiceInfo from "../../../component/serviceInfo";
import AndroidStudio from "../../../images/technology/android-studio-480.svg";
import Adobe from "../../../images/technology/adobe-xd-2-1.svg";
import Figma from "../../../images/technology/Figma.svg";
import TitaniumXd from "../../../images/technology/titaniumXD.png";
import Xcode from "../../../images/list icon/android.svg";

import logo from "../../../images/hire logo/mean-logo.svg";
function MeanDevelopment() {
    const banner: IServiceBanner[] = [
        {
          image1: img1.src,
          title: `Next-Level Web Solutions: MEAN Stack Development Excellence`,
          detail: ``,
          image2: img2.src,
          logo: logo,
          info: "",
          titleInfo: `We are an innovative IT company specializing in cutting-edge solutions. Our team of skilled professionals leverages the latest technologies to develop robust software applications, deliver seamless cloud services, and provide comprehensive IT support With a customer-centric approach.`,
        },
      ];

      const counters :IServiceCounter[]=[
        {
            title: `What We Do`,
            columns: [
        
              {
                image: "",
                value: `Real-Time Web Applications `,
                lists: [{ list: "Real-time web applications enable instant data updates and interactive experiences for users, enhancing engagement and efficiency" }],
              },
              {
                image: "",
                value: `Consulting & Planning`,
                lists: [{ list: "Need expert guidance for your MEAN stack project? Get comprehensive consulting and custom architecture design for your application." }],
              },
              {
                image: "",
                value: `Testing & Quality Assurance`,
                lists: [{ list: "Ensure the reliability and functionality of your MEAN stack applications with rigorous testing and quality assurance processes" }],
              },
              {
                image: "",
                value: `Deployment & Hosting`,
                lists: [{ list: "The stack includes its own web server so it can be deployed easily, and the database can be scaled on demand to accommodate temporary usage spikes." }],
              },
              {
                image: "",
                value: `Real-Time Application`,
                lists: [{ list: "Real-time application development involves creating software systems that process and display data instantly, enabling seamless user experiences." }],
              },
              {
                image: "",
                value: `Database Design & Integration`,
                lists: [{ list: "Database Design and Integration is the process of creating efficient and organized databases and integrating them into existing systems." }],
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
  return (
    <>
    <Banner banner={banner}/>
    <ServiceCounter counters={counters}/>
    {/* <ServiceApp serviceApp={serviceApp}/> */}
    <ServiceInfo serviceInfo={serviceInfo} />
    </>
  )
  }

export default MeanDevelopment