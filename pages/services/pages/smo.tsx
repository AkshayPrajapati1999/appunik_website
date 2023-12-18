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

import logo from "../../../images/hire logo/smo-logo.svg";
function Smo() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Social Brilliance: Transforming Your Brand with SMO Excellence`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo:`Enhance your online presence and engage with your target audience effectively through our comprehensive social media optimization services. Our IT company specializes in leveraging cutting-edge strategies and industry insights to optimize your social media profiles, drive organic traffic, and boost brand visibility.`,
    },
  ];

  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: icon1.src,
          value: `Brand Awareness`,
          lists: [
            { list: "Boost brand awareness with targeted strategies, captivating content, and effective marketing campaigns to reach and engage your target audience" },
          ],
        },
        {
          image: icon2.src,
          value: `A Mindful Analysis`,
          lists: [
            { list: "A Mindful Analysis is a practice of observing and examining thoughts, emotions, and sensations with present-moment awareness and non-judgment." },
          ],
        },
        {
          image: icon3.src,
          value: `Quality Enhancement`,
          lists: [
            { list: "Quality Enhancement aims to improve the overall quality of a product or service through various strategies, processes, and continuous improvement initiatives." },
          ],
        },
        {
          image: icon4.src,
          value: `Availability/Interaction
          `,
          lists: [
            { list: "Sharing moments, connecting lives. Join us to discover, engage, and inspire through the power of social media" },
          ],
        },
        {
          image: icon5.src,
          value: `Social Media Posting`,
          lists: [
            { list: "Page optimization is the process of enhancing a webpage's elements to improve its search engine rankings and user experience." },
          ],
        },
        {
          image: icon5.src,
          value: `Page Optimization`,
          lists: [
            { list: "Maximizing brand recognition and exposure through strategic marketing tactics to enhance consumer awareness and engagement" },
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

export default Smo;
