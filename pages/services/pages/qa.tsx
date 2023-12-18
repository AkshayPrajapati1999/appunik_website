import Banner from "../../../component/banner";
import ServiceCounter from "../../../component/serviceCounter";
import {  IServiceBanner, IServiceCounter, IServiceInfo } from "../../../models/service.model";
import img2 from "../../../images/pages illustration/Expert Quality Assurance Company for Your Business.png";
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
import logo from "../../../images/hire logo/qa-logo.svg";
function Qa() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Streamlined QA Solutions for Flawless Software and Product Releases`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo:`Our QA services include a wide range of testing techniques, from manual testing to automated testing, to ensure that our clients' software products are of the highest quality. We provide testing services for web applications, mobile applications, desktop applications, and more.`,
    },
  ];


  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: icon1.src,
          value: `Test Automation Framework`,
          lists: [
            { list: "Building reliable and scalable automation frameworks to improve software quality and efficiency in QA services." },
          ],
        },
        {
          image: icon2.src,
          value: `Accelerated Testing `,
          lists: [
            { list: "Efficient testing approach to speed up software delivery by simulating real-world usage scenarios." },
          ],
        },
        {
          image: icon3.src,
          value: `Strategy & Planning`,
          lists: [
            { list: "Design and implement a comprehensive test automation plan for efficient and reliable software testing services" },
          ],
        },
        {
          image: icon4.src,
          value: `Test Case Creation `,
          lists: [
            { list: "Create effective test cases for services using concise criteria, ensuring thorough coverage and optimal functionality." },
          ],
        },
        {
          image: icon5.src,
          value: `Mobile Application Testing`,
          lists: [
            { list: "Mobile app testing ensures optimal performance and user experience, detecting and fixing bugs before release." },
          ],
        },
        {
          image: icon5.src,
          value: `Security Testing Automation`,
          lists: [
            { list: "Automated security testing services for software applications to identify vulnerabilities and improve overall security posture." },
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
        <title>Software Testing and QA Services | AppUnik</title>
        <meta
          name="description"
          content=" We provide comprehensive testing services including functional, performance, and security testing to ensure that your software is reliable and user-friendly"
        />
        <meta
          name="keyword"
          content="qa testing,software tester,automation testing services,Best Software Testing Companies,quality assurance
      manual tester"
        />
      </Head>

      <Banner banner={banner}/>
      <ServiceCounter counters={counters} />
      {/* <ServiceApp serviceApp={serviceApp}/> */}
      <ServiceInfo serviceInfo={serviceInfo} />
    </>
  );
}

export default Qa;
