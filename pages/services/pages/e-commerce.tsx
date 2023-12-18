import Banner from "../../../component/banner";
import ServiceCounter from "../../../component/serviceCounter";
import { IServiceApp, IServiceBanner, IServiceCounter, IServiceInfo } from "../../../models/service.model";
import img2 from "../../../images/pages illustration/Get the best ECommerce-WooCommerce Shopify.png";
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
import logo from "../../../images/hire logo/woocommerce-logo.svg";
function EcommerceBanner() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Building Brands, Boosting Sales: Our Proven eCommerce Development Expertise`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo:`At our IT company, we offer top-notch eCommerce and Woo Commerce Shopify development services to help businesses grow their online presence and increase sales. Our team of skilled developers specializes in building custom, user-friendly, and responsive eCommerce websites.`,
    },
  ];
  const counters: IServiceCounter[] = [
    {
      title: `Get the best ECommerce/WooCommerce Shopify Development Companys`,
      columns: [
        {
          image: icon1.src,
          value: `Theme Customization`,
          lists: [
            { list: "Customizing themes for E-commerce/Woo Commerce & Shopify Development to enhance functionality and user experience." },
          ],
        },
        {
          image: icon2.src,
          value: `Analytics & Reporting`,
          lists: [
            { list: "E-commerce store setup using Shopify or WooCommerce with custom Shopify development services." },
          ],
        },
        {
          image: icon3.src,
          value: `Shopify Store Setup`,
          lists: [
            { list: "Elevate your online business with seamless design, secure payment integration, and optimal functionality." },
          ],
        },
        {
          image: icon4.src,
          value: `Payment Gateway Integration `,
          lists: [
            { list: "Efficient payment gateway integration & Shopify dev services for a seamless E-commerce experience " },
          ],
        },
        {
          image: icon5.src,
          value: `Structure & Development`,
          lists: [
            { list: "Expert services for creating and managing online stores." },
          ],
        },
        {
          image: icon5.src,
          value: `Team Up With Customers`,
          lists: [
            { list: "Conducting surveys and focus groups to gather feedback on existing products and services, as well as ideas for new ones" },
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
      title: "Our Expertise With E-commerce Development Technology ",
      appheading: "E-commerce Development Tools",
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
      <Head>
        <title>
          Ecommerce Website Development Services | Shopify Development
        </title>
        <meta
          name="description"
          content="Looking for professional e-commerce website development services? Our company specializes in creating custom online stores tailored to your specific needs."
        />
        <meta
          name="keyword"
          content="shopify dev,Top Ecommerce Platforms,eCommerce Development Services,ecommerce platform"
        />
      </Head>
      <Banner banner={banner}></Banner>
      <ServiceCounter counters={counters} />
      <ServiceInfo serviceInfo={serviceInfo} />
      {/* <ServiceApp serviceApp={serviceApp}/> */}
    </>
  );
}

export default EcommerceBanner;
