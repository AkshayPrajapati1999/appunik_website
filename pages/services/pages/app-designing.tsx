import Banner from "../../../component/banner";
import ServiceCounter from "../../../component/serviceCounter";
import {  IServiceBanner, IServiceCounter, IServiceInfo } from "../../../models/service.model";
import img2 from "../../../images/pages illustration/Get the Best UI-UX Designing Company.png";
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
import logo from "../../../images/hire logo/app-design.svg";
function AppDesign() {
  const banner: IServiceBanner[] =  [
    {
      image1: img1.src,
      title: `Expert Shopify Development Services for Seamless E-Commerce Solutions`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo:`Our IT company specializes in UI/UX development, creating seamless and intuitive user experiences. With a team of skilled designers and developers, we craft visually appealing interfaces that enhance user engagement and satisfaction. From wireframing to prototyping and implementation, we deliver innovative solutions tailored to our client's needs.`
    },
  ];

  const counters: IServiceCounter[] = [
    {
      title: `Get The Best And Powerful Shopify Development Solution`,
      columns: [
        {
          image: icon1.src,
          value: `UI/UX Design Proficiency`,
          lists: [
            { list: "Crafting seamless designs with expertise in Figma, XD, and Sketch. Elevate your brand's visual appeal and user experience with our innovative design services." },
          ],
        },
        {
          image: icon2.src,
          value: `Technical Strategy`,
          lists: [
            { list: "Optimise performance with our expert Technical Strategy services. Streamline operations, enhance efficiency, and drive innovation." },
          ],
        },
        {
          image: icon3.src,
          value: `Visual Design`,
          lists: [
            { list: "Visual design is the art of creating compelling and effective visual communication using typography, color, and imagery." },
          ],
        },
        {
          image: icon4.src,
          value: `Web  UI/UX`,
          lists: [
            { list: "Designing intuitive, user-friendly interfaces that enhance user experience and engagement with a website or application." },
          ],
        },
        {
          image: icon5.src,
          value: `Mobile App UI/UX`,
          lists: [
            { list: "Efficient and intuitive user interface/experience design for seamless mobile app interactions." },
          ],
        },
        {
          image: icon5.src,
          value: `Wireframing`,
          lists: [
            { list: "Wireframing is a visual of a website or app's layout, structure, and functionality." },
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
      <Head>
        <title>Creative UI/UX Web Design Service | AppUnik</title>
        <meta
          name="description"
          content="At our company, we specialize in providing top-notch UI/UX web design services to help businesses create a stunning and user-friendly online presence. Our team of experts uses cutting-edge techniques and tools to design visually appealing and intuitive websites that drive conversions and enhance the user experience."
        />
        <meta
          name="keyword"
          content="ui ux design company , ui ux ,graphic design,best graphic design company
            best UI / UX Design company,"
        />
        
      </Head>
      <Banner banner={banner}></Banner>
      <ServiceCounter counters={counters} />
      {/* <ServiceApp serviceApp={serviceApp}/> */}
      <ServiceInfo serviceInfo={serviceInfo} />
    </>
  );
}

export default AppDesign;

