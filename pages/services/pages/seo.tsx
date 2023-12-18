import Banner from "../../../component/banner";
import ServiceCounter from "../../../component/serviceCounter";
import {  IServiceBanner, IServiceCounter, IServiceInfo } from "../../../models/service.model";
import img2 from "../../../images/pages illustration/Popular SEO and Digital Marketing Company.png";
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
import logo from "../../../images/hire logo/seo-logo.svg";

function Seo() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Boost Your Online Presence with Expert SEO Services`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo: `Our SEO services focus on improving your website's search engine rankings, which helps increase organic traffic and generate more leads. Our team will conduct thorough keyword research, optimize your website's content, and implement effective link building strategies to improve your website's search engine ranking.`,
    },
  ];
  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: icon1.src,
          value: `On-Page Optimization`,
          lists: [
            {
              list: "Improve website ranking with on-page SEO services: meta tags, keyword optimization, content enhancement & more. Boost online visibility!",
            },
          ],
        },
        {
          image: icon2.src,
          value: `Identify Your Target Audience`,
          lists: [
            {
              list: "Boost online visibility with expert keyword research & analysis for effective SEO strategies. ",
            },
          ],
        },
        {
          image: icon3.src,
          value: `Brand Awareness`,
          lists: [
            {
              list: "Boost brand recognition and recall with our targeted digital marketing strategies.",
            },
          ],
        },
        {
          image: icon4.src,
          value: `Social Media Marketing
          `,
          lists: [
            {
              list: "Boost your brand's reach and engagement with our expert social media marketing services.",
            },
          ],
        },
        {
          image: icon5.src,
          value: `Technical SEO`,
          lists: [
            {
              list: "Optimizing website structure, content, and code to improve search engine rankings and drive organic traffic.",
            },
          ],
        },
        {
          image: icon5.src,
          value: `Analytics & Reporting`,
          lists: [
            {
              list: "Analyze and report digital marketing data to optimize campaigns, improve ROI, and make data-driven decisions.",
            },
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
        <title>Top SEO and Digital Marketing Services | AppUnik</title>
        <meta
          name="description"
          content="Our SEO and digital marketing services help businesses increase their online visibility and drive more traffic to their website. From keyword research to content creation and social media management, our team of experts will develop a customized strategy to help your company reach its digital marketing goals."
        ></meta>
        <meta
          name="keyword"
          content="Best SEO Services In India,seo digital marketing,digital marketing,online marketing,
    digital marketing company,digital marketing services,seo,seo services,backlinks,seo marketing"
        ></meta>
      </Head>

      <Banner banner={banner}></Banner>
      <ServiceCounter counters={counters} />
      {/* <ServiceApp serviceApp={serviceApp}/> */}
      <ServiceInfo serviceInfo={serviceInfo} /> 
    </>
  );
}

export default Seo;
