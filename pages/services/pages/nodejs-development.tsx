import Banner from "../../../component/banner";
import ServiceCounter from "../../../component/serviceCounter";
import {
  
  IServiceBanner,
  IServiceCounter,
  IServiceInfo,
} from "../../../models/service.model";
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
import logo from "../../../images/hire logo/nodejs-logo.svg";

function NodejsDevelopment() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Unleashing Potential with Our Node.js Development Services`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo: `We are an IT company specializing in Node.js development services. Our team of skilled developers excels in creating robust and scalable web applications using the power of Node.js.
      With Node.js, we can build efficient server-side applications that are lightweight and highly performant.`,
    },
  ];

  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: icon1.src,
          value: `User Authentication Service`,
          lists: [
            {
              list: "Secure and reliable user authentication service that verifies user identities, ensuring secure access .",
            },
          ],
        },
        {
          image: icon2.src,
          value: `Payment Gateway Service`,
          lists: [
            {
              list: "Secure and reliable payment gateway service for seamless online transactions. Accept payments easily and efficiently.",
            },
          ],
        },
        {
          image: icon3.src,
          value: `Real-time Chat Service`,
          lists: [
            {
              list: "Experience seamless and instant communication with our real-time chat service. ",
            },
          ],
        },
        {
          image: icon4.src,
          value: `Data Streaming Applications
          `,
          lists: [
            {
              list: "Data streaming applications enable real-time processing and analysis of large-scale data.",
            },
          ],
        },
        {
          image: icon5.src,
          value: `Serverless Application`,
          lists: [
            {
              list: "Discover the power of serverless application development. Build scalable, efficient, and cost-effective solutions without managing infrastructure. ",
            },
          ],
        },
        {
          image: icon5.src,
          value: `WebScraping & DataExtraction`,
          lists: [
            {
              list: "Web scraping and data extraction refer to the process of extracting information from websites automatically.",
            },
          ],
        },
      ],
    },
  ];
  const serviceInfo: IServiceInfo[] = [
    {
      title:
        "For Hassle Free Business Growth, Schedule A Call With Our Experts To Get A FREE Consultation And Development Quote.",
      subTitle: "",
      buttonInfo: "Hire our Dedicated Devlopers",
      image: isoSvg.src,
    },
  ];
  return (
    <>
      <Banner banner={banner}></Banner>
      <ServiceCounter counters={counters} />
      {/* <ServiceApp serviceApp={serviceApp} /> */}
      <ServiceInfo serviceInfo={serviceInfo} />
    </>
  );
}

export default NodejsDevelopment;
