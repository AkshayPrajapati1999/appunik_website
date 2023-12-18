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
import AndroidStudio from "../../../images/technology/android-studio-480.svg";
import Adobe from "../../../images/technology/adobe-xd-2-1.svg";
import Figma from "../../../images/technology/Figma.svg";
import TitaniumXd from "../../../images/technology/titaniumXD.png";
import Xcode from "../../../images/list icon/android.svg";

import isoSvg from "../../../images/iosInfo.svg";
import ServiceInfo from "../../../component/serviceInfo";
import logo from "../../../images/hire logo/php-logo.svg";
function PHPDevelopment() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Powerful PHP Development Services for Business Growth`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo:`Our IT company offers professional PHP development services to cater to your business needs. Our team of experienced developers is skilled in creating robust and scalable PHP applications, websites, and e-commerce solutions. Partner with us to harness the power of PHP and elevate your online presence.`,
    },
  ];


  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: icon1.src,
          value: `Full-Stack PHP Development`,
          lists: [
            { list: "Experienced Full-Stack PHP developer proficient in creating dynamic web applications with expertise in frontend and backend technologies" },
          ],
        },
        {
          image: icon2.src,
          value: `Custom PHP Web App`,
          lists: [
            { list: "Get high-quality custom PHP web app development services tailored to your unique business needs." },
          ],
        },
        {
          image: icon3.src,
          value: `PHP CMS Development`,
          lists: [
            { list: "Create dynamic and user-friendly websites with our PHP CMS development services. Customizable, scalable, and efficient solutions for your business" },
          ],
        },
        {
          image: icon4.src,
          value: `PHP API Development
          `,
          lists: [
            { list: "Efficient and secure PHP API development services for seamless integration, enhanced data communication, and reliable web applications." },
          ],
        },
        {
          image: icon5.src,
          value: `Web Support & Maintenance`,
          lists: [
            { list: "Reliable and comprehensive PHP web support and maintenance services to keep your website running smoothly and efficiently." },
          ],
        },
        {
          image: icon5.src,
          value: `Apps & E-commerce Solutions`,
          lists: [
            { list: "Discover interactive PHP apps and e-commerce solutions for your business. Boost online sales and enhance user experience with our innovative solutions." },
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

export default PHPDevelopment;
