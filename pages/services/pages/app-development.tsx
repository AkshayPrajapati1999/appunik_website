import { IServiceBanner, IServiceCounter } from "../../../models/service.model";
import Banner from "../../../component/banner";
import ServiceCounter from "../../../component/serviceCounter";
import img2 from "../../../images/pages illustration/Group 8469.png";
import img1 from "../../../images/illustations/Portfolio 2.png";
import icon1 from "../../../images/icons/Icons.png";
import icon2 from "../../../images/icons/Icons-1.png";
import icon3 from "../../../images/icons/industry-40.png";
import icon4 from "../../../images/icons/layer1.png";
import icon5 from "../../../images/icons/on-time.png";
import Head from "next/head";
import logo from "../../../images/hire logo/mobile-application-development-logo.svg";
function AppDevelopmentBanner() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Expert Mobile App Development Company`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo:` Are you looking for mobile app development services that can take your business to the next level? Look no further than our team of expert app developers. Our mobile app development services are designed to help you create engaging and intuitive apps that will delight your users and drive business growth.`,
    },
  ];
   const counters: IServiceCounter[] = [
    {
      title: `Custom Mobile-App Solutions For Every Business Models`,
      columns: [
        {
          image: icon1.src,
          value: `Business Analysis Services`,
          lists: [
            { list: "Strategic insights, data-driven solutions. Elevate your business with expert analysis and app consulting services" },
          ],
        },
        {
          image: icon2.src,
          value: `Building Across Platforms`,
          lists: [
            { list: "Empower your business with seamless mobile experiences. Choose our expert Native, Hybrid, or Cross-Platform app development services today!" },
          ],
        },
        {
          image: icon3.src,
          value: `Apps And API Integration`,
          lists: [
            { list: "We tailor our expertise to your needs. Elevate your user experience with cutting-edge technology and personalised solutions." },
          ],
        },
        {
          image: icon4.src,
          value: `Enterprise Mobility Solutions`,
          lists: [
            { list: "Empower your workforce and enhance productivity with our cutting-edge Enterprise Mobility Solutions." },
          ],
        },
        {
          image: icon5.src,
          value: `App Maintenance Services`,
          lists: [
            { list: "We specialise in proactive monitoring, timely updates, and comprehensive support to keep your app running smoothly." },
          ],
        },
        {
          image: icon5.src,
          value: `Mobile App UI/UX Designing`,
          lists: [
            { list: "We specialise in crafting visually stunning and intuitively functional mobile app interfaces that captivate users from the first glance." },
          ],
        },
       
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Top Mobile App Development Services</title>
        <meta
          name="description"
          content="We provides mobile app development services to both Android and iOS platforms. Get in touch today and let us know what you need!"
        />
        <meta
          name="keyword"
          content="app development ,mobile app development ,ios mobile app development
            Top Mobile App Development Companies,top mobile app developers"
        />
      </Head>

      <Banner banner={banner}></Banner>
      <ServiceCounter counters={counters} />
    </>
  
  );
}

export default AppDevelopmentBanner;
