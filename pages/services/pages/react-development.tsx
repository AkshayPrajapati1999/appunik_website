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
import isoSvg from "../../../images/iosInfo.svg";
import ServiceInfo from "../../../component/serviceInfo";

import AndroidStudio from "../../../images/technology/android-studio-480.svg";
import Adobe from "../../../images/technology/adobe-xd-2-1.svg";
import Figma from "../../../images/technology/Figma.svg";
import TitaniumXd from "../../../images/technology/titaniumXD.png";
import Xcode from "../../../images/list icon/android.svg";
import logo from "../../../images/hire logo/react-logo.svg";
function ReactDevelopment() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Elevate Your Web Presence With Our ReactJS Development Expertise`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo:`We provide comprehensive React JS services to help businesses build highly interactive and dynamic web applications. React JS has emerged as one of the most popular JavaScript libraries for front-end development, and our team of skilled developers excels in harnessing its power to deliver exceptional user experiences.`,
    },
  ];

  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: icon1.src,
          value: `Custom ReactJs Web `,
          lists: [
            { list: "Expert ReactJS developers provide custom web development solutions to build fast, scalable, and interactive applications." },
          ],
        },
        {
          image: icon2.src,
          value: `Custom React Plugin `,
          lists: [
            { list: "Create powerful and customized React plugins with ease using our development services. Boost your app's functionality and user experience." },
          ],
        },
        {
          image: icon3.src,
          value: `React Product `,
          lists: [
            { list: "Develop cutting-edge products with React, the popular JavaScript library for building interactive user interfaces. Create immersive web experiences  " }, ],
        },
        {
          image: icon4.src,
          value: `ReactJs Website Migration
          `,
          lists: [
            { list: "Discover a seamless transition as we migrate our ReactJS website, offering enhanced features and user experience for optimal engagement" },
          ],
        },
        {
          image: icon5.src,
          value: `ReactJs For Enterprise App `,
          lists: [
            { list: "Develop robust enterprise applications with ReactJS. Leverage its powerful components and scalability for efficient, high-performance solutions" },
          ],
        },
        {
          image: icon5.src,
          value: `Support & Maintenance`,
          lists: [
            { list: "Get reliable React.js support and maintenance services. Ensure the smooth functioning of your React applications with expert assistance. " },
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

export default ReactDevelopment;
