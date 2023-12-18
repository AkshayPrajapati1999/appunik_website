import React from 'react'
import Banner from '../../../component/banner'
import ServiceCounter from '../../../component/serviceCounter'
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
import logo from "../../../images/hire logo/flutter-logo.svg";

function flutterDevelopment() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Flutter Development`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo: `Our company specializes in leveraging business growth through the development of dynamic and secure applications using Flutter. Flutter is a highly accomplished platform that allows us to hire expert Flutter developers who can bring your ideas to life and cater to your specific needs for application development.
      With our expert team.`,
    },
  ];
  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: icon1.src,
          value: `Flexible Engagement Models`,
          lists: [
            { list: "Customer satisfaction is our top-most priority; hence we offer flexible engagement models to help them achieve their goals in minimal time. " },
          ],
        },
        {
          image: icon2.src,
          value: `Flutter App Ideation`,
          lists: [
            { list: "Our Flutter app ideation and consulting services include diverse facets of the process, such as market research, platform selection, feature planning, and more. " },
          ],
        },
        {
          image: icon3.src,
          value: `Flutter App Development
          `,
          lists: [
            { list: "We offer flutter app development services to build scalable and highly functional mobile applications. Hire our Flutter app developers." },
          ],
        },
        {
          image: icon4.src,
          value: `Flutter App Migration `,
          lists: [
            { list: "Successive Digital offers seamless app migration of your existing applications from one platform to multiple spaces." },
          ],
        },
        {
          image: icon5.src,
          value: `Customized Interface`,
          lists: [
            { list: "Create unique and interactive user interfaces with Flutter services for a customized experience. " },
          ],
        },
        {
          image: icon5.src,
          value: `Single Codebase `,
          lists: [
            { list: "Build cross-platform mobile apps with ease using Flutter's single codebase approach and benefit from its powerful widget system and extensive service integration" },
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
    <div>
    <Banner banner={banner}></Banner>
    <ServiceCounter counters={counters} />
    {/* <ServiceApp serviceApp={serviceApp}/> */}
    <ServiceInfo serviceInfo={serviceInfo} />
    </div>
  )
}

export default flutterDevelopment