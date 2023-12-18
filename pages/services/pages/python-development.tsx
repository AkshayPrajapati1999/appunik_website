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
import isoSvg from "../../../images/iosInfo.svg";
import AndroidStudio from "../../../images/technology/android-studio-480.svg";
import Adobe from "../../../images/technology/adobe-xd-2-1.svg";
import Figma from "../../../images/technology/Figma.svg";
import TitaniumXd from "../../../images/technology/titaniumXD.png";
import Xcode from "../../../images/list icon/android.svg";
import ServiceInfo from "../../../component/serviceInfo";

import logo from "../../../images/hire logo/python-logo.svg";
function PythonDevelopment() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Innovate with Confidence: Our Python Development Services`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo:`Our IT company offers top-notch Python development services to cater to your business needs. Our expert Python developers deliver efficient and scalable solutions, leveraging the power of this versatile programming language. Whether it's web development, data analysis, or automation, we have the expertise to deliver exceptional result
      `,
    },
  ];

  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: icon1.src,
          value: `Automation & Scripting`,
          lists: [
            { list: "Python automation and scripting empower users to automate repetitive tasks, streamline workflows, and enhance productivity efficiently." },
          ],
        },
        {
          image: icon2.src,
          value: `Python Application`,
          lists: [
            { list: "Crafting powerful Python applications for seamless user experiences. Elevate your website with our innovative and reliable services." },
          ],
        },
        {
          image: icon3.src,
          value: `Python Web Development`,
          lists: [
            { list: "Powerful Python application for efficient and scalable solutions. Boost productivity and streamline processes with our advanced features." },
          ],
        },
        {
          image: icon4.src,
          value: `Python Hybrid Programming
          `,
          lists: [
            { list: "Empower your projects with our Python Hybrid Programming services, seamlessly blending the best of web and desktop applications." },
          ],
        },
        {
          image: icon5.src,
          value: ` Migration to The Python`,
          lists: [
            { list: "Improve the performance of your apps by migrating them from another platform to Python or by upgrading them to the most recent release of Python with the help of Python developers. " },
          ],
        },
        {
          image: icon5.src,
          value: `Support & Maintenance`,
          lists: [
            { list: "To maintain the excellent performance of your Python-based applications, our python developers provide cost-effective support and maintenance services at a professional level." },
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
      title: "Our Expertise With Python Development Technology ",
      appheading: "Python Development Tools",
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

export default PythonDevelopment;
