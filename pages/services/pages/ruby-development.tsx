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
import logo from "../../../images/hire logo/ruby-logo.svg";
function RubyDevelopment() {
    const banner: IServiceBanner[] = [
        {
          image1: img1.src,
          title: `Innovate and Grow with Our Comprehensive Ruby Development`,
          detail: ``,
          image2: img2.src,
          logo: logo,
          info: "",
          titleInfo: `Our IT company specializes in Ruby development, offering top-notch solutions tailored to your business needs. Our team of skilled Ruby developers excels in creating robust and scalable web applications, APIs, and automation tools. With a deep understanding of Ruby's frameworks and libraries. `,
        },
      ];

      const counters :IServiceCounter[]=[
        {
            title: `What We Do`,
            columns: [
              {
                image: "",
                value: `ROR Web Development`,
                lists: [{ list: "ROR Web Development: Create robust and dynamic websites using Ruby on Rails. Leverage the power of this popular framework for seamless development." }],
              },
              {
                image: "",
                value: `Ruby Application Development`,
                lists: [{ list: "Ruby application development empowers developers to build powerful and efficient web and software applications with ease and flexibility" }],
              },
              {
                image: "",
                value: `Optimize Performance`,
                lists: [{ list: "Boost Ruby code performance with optimization techniques: profiling, algorithm improvements, memory management, and more for faster execution. " }],
              },
              {
                image: "",
                value: `Security Audit`,
                lists: [{ list: "Ruby security analysis and vulnerability assessment services to identify and mitigate potential risks in your Ruby applications" }],
              },
              {
                image: "",
                value: `Deploy & Infrastructure Setup`,
                lists: [{ list: "Ruby cloud deployment and infrastructure setup is the process of deploying and configuring Ruby applications." }],
              },
              {
                image: "",
                value: `Database Integration  `,
                lists: [{ list: "Ruby database integration allows Ruby developers to connect and interact with databases." }],
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

export default RubyDevelopment