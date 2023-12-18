import Banner from "../../../component/banner";
import ServiceCounter from "../../../component/serviceCounter";
import { IServiceBanner, IServiceCounter } from "../../../models/service.model";
import img2 from "../../../images/pages illustration/Excellent Hybrid App Development Company.png";
import img1 from "../../../images/illustations/Portfolio 2.png";
import icon1 from "../../../images/icons/Icons.png";
import icon2 from "../../../images/icons/Icons-1.png";
import icon3 from "../../../images/icons/industry-40.png";
import icon4 from "../../../images/icons/layer1.png";
import icon5 from "../../../images/icons/on-time.png";
import Head from "next/head";
import logo from "../../../images/hire logo/hybrid-logo.svg";

function HybridAppBanner() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Bridging Platforms: Our Top-Tier Hybrid App Development Services`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo:` Hybrid app development services offer a cost-effective solution to build mobile apps that work seamlessly across multiple platforms such as iOS and Android. As a leading IT company, we provide hybrid app development services that are customized to meet the unique needs of our clients.`,
    },
  ];
  const counters: IServiceCounter[] = [
    {
      title: `Excellent Hybrid App Development Company`,
      columns: [
        {
          image: icon1.src,
          value: `Hybrid App UI/UX Design`,
          lists: [
            { list: "Elevate your digital presence with our cutting-edge UI/UX design services tailored specifically for hybrid apps" },
          ],
        },
        {
          image: icon2.src,
          value: `3rd Party Api Integration`,
          lists: [
            { list: "Enhance functionality, streamline processes, and elevate user experiences by integrating external APIs tailored to your specific needs." },
          ],
        },
        {
          image: icon3.src,
          value: `Native to Hybrid App Shift`,
          lists: [
            { list: "Migrating from a native to a hybrid application involves transitioning from a platform-specific development approach to one that combines the best of both worlds." },
          ],
        },
        {
          image: icon4.src,
          value: `Application Quality Assurance`,
          lists: [
            { list: "Ensure seamless performance and exceptional user experience with our comprehensive Hybrid Application Quality Assurance services." },
          ],
        },
        {
          image: icon5.src,
          value: `App Consult & Design`,
          lists: [
            { list: "Expert Hybrid App Consultation & Architecture Services: Optimise performance, scalability, and user experience for your digital success" },
          ],
        },
        {
          image: icon5.src,
          value: `Custom App Development`,
          lists: [
            { list: "Elevate your user experience and reach a broader audience with our innovative Hybrid App Development services." },
          ],
        },
       
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
          Hybrid Mobile App Development Company | Hybrid Mobile App Developer
        </title>
        <meta
          name="description"
          content="Our company offers professional hybrid mobile app development services to help businesses enhance their digital presence and reach more customers."
        />
        <meta
          name="keyword"
          content="hybrid app development company, hybrid application development services, hybrid app developers, custom software development, Software development, custom software, application development"
        />
      </Head>

      <Banner banner={banner}></Banner>
      <ServiceCounter counters={counters} />
    </>
  );
}

export default HybridAppBanner;
