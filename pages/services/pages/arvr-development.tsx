import Banner from "../../../component/banner";
import ServiceCounter from "../../../component/serviceCounter";
import { IServiceApp, IServiceBanner, IServiceCounter, IServiceInfo } from "../../../models/service.model";
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
import logo from "../../../images/hire logo/vr-logo.svg";
function ARVRDevelopment() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Immersive Experiences Unleashed: AR/VR Development Services for a Virtual Tomorrow`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo:`We specialize in AR/VR development, offering cutting-edge solutions for immersive experiences. Our expert team combines advanced technologies and creative expertise to deliver captivating virtual reality applications. With a focus on innovation, we create interactive AR solutions that enhance user engagement.
      `,
    },
  ];
  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: icon1.src,
          value: `  Marker-based AR App`,
          lists: [
            { list: "Create engaging AR experiences with our marker-based app development services. Boost user engagement and interactivity " },
          ],
        },
        {
          image: icon2.src,
          value: `Markerless AR App     `,
          lists: [
            { list: "Developing AR apps without markers, enhancing user experience." },
          ],
        },
        {
          image: icon3.src,
          value: `Location-based AR App`,
          lists: [
            { list: "Create immersive AR experiences with our location-based app development services." },
          ],
        },
        {
          image: icon4.src,
          value: `VR App Development`,
          lists: [
            { list: "Expert VR app development services for immersive experiences, delivered by experienced developers " },
          ],
        },
        {
          image: icon5.src,
          value: ` 3D modeling and animation`,
          lists: [
            { list: "Creating lifelike digital models and animations for games, films, and advertising using advanced software and design techniques. " },
          ],
        },
        {
          image: icon5.src,
          value: ` VR Game Development`,
          lists: [
            { list: "Custom VR game dev services for immersive experiences" },
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
  const serviceApp: IServiceApp[] = [
    {
      title: "Our Expertise With AR/VR Development Technology ",
      appheading: "AR/VR Development Tools",
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
      <Banner banner={banner}></Banner>
      <ServiceCounter counters={counters} />
      {/* <ServiceApp serviceApp={serviceApp}/> */}
      <ServiceInfo serviceInfo={serviceInfo} />
    </>
  );
}

export default ARVRDevelopment;
