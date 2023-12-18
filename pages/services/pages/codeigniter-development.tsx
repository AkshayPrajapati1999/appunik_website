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
import logo from "../../../images/hire logo/codeIgniter-logo.svg";
function CodeigniterDevelopment() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Expert CodeIgniter Development Services`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo: `Our IT company offers comprehensive CodeIgniter development services to help businesses create powerful and dynamic web applications. Our expert team of developers leverages the robust features of the CodeIgniter framework to deliver high-performance, scalable, and secure solutions. `
    },
  ];

  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: icon1.src,
          value: "Scalable Codeigniter Web ",
          lists: [
            {
              list: "Build scalable web applications with CodeIgniter, a powerful PHP framework. Leverage its flexibility and performance for efficient web development",
            },
          ],
        },
        {
          image: icon2.src,
          value: `Relevant Codeigniter Plugin `,
          lists: [
            {
              list: "Develop custom plugins for the CodeIgniter framework to enhance functionality and extend capabilities. Efficiently build powerful web applications.",
            },
          ],
        },
        {
          image: icon3.src,
          value: `Powerful E-Commerce `,
          lists: [
            {
              list: "Unlock the potential of your online business with our powerful Codeigniter e-commerce development services.",
            },
          ],
        },
        {
          image: icon4.src,
          value: `Support & Maintenance`,
          lists: [
            {
              list: "Reliable and professional support and maintenance services for your Codeigniter projects, ensuring their longevity and uninterrupted functionality.",
            },
          ],
        },
        {
          image: icon5.src,
          value: `Codeigniter Migration Solution`,
          lists: [
            {
              list: "A smooth CodeIgniter migration solution provides a hassle-free process to seamlessly transition your CodeIgniter application.",
            },
          ],
        },
        {
          image: icon5.src,
          value: `CodeIgniter Upgrade`,
          lists: [
            {
              list: "Upgrade your CodeIgniter application effortlessly with our upfront CodeIgniter upgradation solution.",
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

export default CodeigniterDevelopment;
