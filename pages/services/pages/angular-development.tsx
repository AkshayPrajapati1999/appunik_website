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
import logo from "../../../images/hire logo/angular-logo.svg";
function AngularDevelopment() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Transform Your Ideas With Angular Development Solutions`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo:`We specialize in providing top-notch Angular development services tailored to meet the unique requirements of IT companies. With our extensive expertise and cutting-edge technology, we empower businesses to build robust, scalable, and high-performance web applications.`,
    },
  ];

  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: icon1.src,
          value: `Custom Business Application`,
          lists: [
            { list: "Expert Angular development for custom business applications, tailored to your needs." },
          ],
        },
        {
          image: icon2.src,
          value: `Progressive Web Application`,
          lists: [
            { list: "Build powerful Progressive Web Applications using Angular for seamless user experiences across devices. Boost performance and engagement." },
          ],
        },
        {
          image: icon3.src,
          value: `Convert Html to AngularJs`,
          lists: [
            { list: "Our top angular development company is adept at converting bland HTML templates to where you can scale the potential of your business app." },
          ],
        },
        {
          image: icon4.src,
          value: `E-Commerce Website`,
          lists: [
            { list: "E-commerce websites require powerful software to bring the potential of the site and impress customers to make a profitable purchase " },
          ],
        },
        {
          image: icon5.src,
          value: `Social & Dynamic Web`,
          lists: [
            { list: "There are a lot of scopes to get customer attention from social platforms and web apps." },
          ],
        },
        {
          image: icon5.src,
          value: `Angular Web & Mobile App`,
          lists: [
            { list: "Create powerful and responsive web and mobile applications with Angular. Leverage its robust framework for seamless development experiences" },
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

export default AngularDevelopment;
