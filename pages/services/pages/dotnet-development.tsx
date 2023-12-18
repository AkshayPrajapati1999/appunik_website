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

import ServiceInfo from "../../../component/serviceInfo";
import isoSvg from "../../../images/iosInfo.svg";
import AndroidStudio from "../../../images/technology/android-studio-480.svg";
import Adobe from "../../../images/technology/adobe-xd-2-1.svg";
import Figma from "../../../images/technology/Figma.svg";
import TitaniumXd from "../../../images/technology/titaniumXD.png";
import Xcode from "../../../images/list icon/android.svg";
import logo from "../../../images/hire logo/dotnet-logo.svg";
function DotNetDevelopment() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Accelerate Your Success with Top-notch .NET Development`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo:`We offer comprehensive ASP.Net development services to help businesses build robust and scalable web applications. Our team of experienced developers utilizes the latest technologies and best practices to deliver tailored solutions that meet your unique requirements.`
    },
  ];
  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: icon1.src,
          value: `Custom ASP.NET Web `,
          lists: [
            { list: "Expert ASP.NET web development services tailored to your needs. Build scalable, secure, and high-performance web applications with our skilled team" },
          ],
        },
        {
          image: icon2.src,
          value: `Enterprise-Scale  .Net Web `,
          lists: [
            { list: "Powerful and scalable enterprise-level .NET web development solutions, delivering robust and high-performance applications for your business needs." },
          ],
        },
        {
          image: icon3.src,
          value: `Robust ASP.NET CMS Solution`,
          lists: [
            { list: "Discover a robust ASP.NET CMS solution for seamless content management, powerful customization, and effortless scalability." },
          ],
        },
        {
          image: icon4.src,
          value: `Versatile  Cross-Platform `,
          lists: [
            { list: "Build cross-platform applications using ASP.NET, a versatile framework for web and mobile development. Leverage its powerful features and reach a wider audience" },
          ],
        },
        {
          image: icon5.src,
          value: `Seamless ASP.NET Migration`,
          lists: [
            { list: "Effortlessly migrate your ASP.NET applications to the latest version with seamless integration and minimal disruptions. Simplify your upgrade process"},
          ],
        },
        {
          image: icon5.src,
          value: `Trendy ASP.NET Integration`,
          lists: [
            { list: "Integrate the power of ASP.NET into your applications with our trendy and cutting-edge ASP.NET Integration solutions. Boost your productivity and performance today." },
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

export default DotNetDevelopment;
