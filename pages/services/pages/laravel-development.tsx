import React from 'react'
import Banner from '../../../component/banner'
import ServiceCounter from '../../../component/serviceCounter'
import { IServiceApp, IServiceBanner, IServiceCounter, IServiceInfo } from "../../../models/service.model";
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

import logo from "../../../images/hire logo/laravel-logo.svg";
function LaravelDevelopment() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Crafting Exceptional Web Experiences: Laravel Development Services`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo: `We offer professional Laravel development services tailored to meet your business needs. Our skilled team of developers leverages the power of Laravel's robust framework to deliver scalable and efficient web applications. From custom module development to API integration and performance optimization.`,
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
  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: icon1.src,
          value: `Custom Laravel Development`,
          lists: [
            { list: "Need a custom Laravel web development solution? Our team of experts can build scalable, secure, and high-performing websites tailored to your specific requirements." },
          ],
        },
        {
          image: icon2.src,
          value: `Extension Development`,
          lists: [
            { list: "Learn the essentials of extension development and create powerful browser add-ons and plugins to enhance user experience and functionality" },
          ],
        },
        {
          image: icon3.src,
          value: `API Development`,
          lists: [
            { list: "Build powerful APIs with ease using our API development services. Accelerate your application development and integration processes today!" },
          ],
        },
        {
          image: icon4.src,
          value: ` E-Commerce Services
          `,
          lists: [
            { list: "Power your online store with our Laravel e-commerce services. Seamlessly manage products, orders, and payments for a successful online business" },
          ],
        },
        {
          image: icon5.src,
          value: `Laravel Migration`,
          lists: [
            { list: "A Laravel migration is a way to manage database schema changes. It allows you to define and modify database tables, columns, and indexes using PHP code." },
          ],
        },
        {
          image: icon5.src,
          value: `Maintenance & Support `,
          lists: [
            { list: "The Laravel app is managed and updated regularly since we know how important it is to have a smooth-running, bug-free app" },
          ],
        },
       
      ],
    },
  ];
  const serviceApp: IServiceApp[] = [
    {
      title: "Our Expertise With Laravel Development Technology ",
      appheading: "Laravel Development Tools",
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
    <div>
    <Banner banner={banner}></Banner>
    <ServiceCounter counters={counters} />
    {/* <ServiceApp serviceApp={serviceApp}/> */}
    <ServiceInfo serviceInfo={serviceInfo} />
    </div>
  )
}

export default LaravelDevelopment