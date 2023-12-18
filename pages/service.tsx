import Head from "next/head";
import ServiceBanner from "./services/serviceBanner";
import ServiceDetail from "./services/serviceDetails";
import { IServiceDetail } from "../models/service.model";
import illustration1 from "../images/illustations/QA/Mobile App Development.png";
import illustration2 from "../images/illustations/QA/Web Development.png";
import illustration3 from "../images/illustations/QA/ECommerce WooCommerce.png";
import illustration4 from "../images/illustations/QA/Hybrid App Development.png";
import illustration5 from "../images/illustations/QA/UI UX Designing.png";
import illustration6 from "../images/illustations/QA/BlockChain - NFT.png";
import illustration7 from "../images/illustations/QA/SEO and Digital Marketing.png";
import illustration8 from "../images/illustations/QA/QA.png";

function Service() {
  const panels: IServiceDetail[] = [
    {
      image: illustration1.src,
      imageInfo: `app development image `,
      title: `Mobile App Development `,
      info1: `Native iOS App Development`,
      info2: `Native Android App Development`,
      info3: `Cross-platform App Development`,
      info4: `React Native App Development`,
      info5: `Flutter App Develop`,
      to: "/services/pages/app-development",
    },
    {
      image: illustration2.src,
      imageInfo: `website devlpomnent image`,
      title: ` Website Development`,
      info1: `Web Design`,
      info2: `Custom Web Development`,
      info3: `Third-Party Integrations`,
      info4: `Quality Assurance`,
      info5: `Maintenance & Support`,
      to: "/services/pages/website-development",
    },
    {
      image: illustration3.src,
      imageInfo: `ecommerce/woocommerce and shopify development image`,
      title: `ECommerce/WooCommerce  Shopify Development`,
      info1: `Enterprise Level Ecommerce`,
      info2: `Multiple Business Models`,
      info3: `E-commerce Product Marketplace`,
      info4: `Multi-Vendor E-commerce Development`,
      info5: `SEO Friendly`,
      to: "/services/pages/e-commerce",
    },
    {
      image: illustration4.src,
      imageInfo: `hybrid development`,
      title: `Hybrid App Development `,
      info1: `Web Design`,
      info2: `Custom Web Development`,
      info3: `Third-Party Integrations`,
      info4: `Quality Assurance`,
      info5: `Maintenance & Support`,
      to: "/services/pages/hybrid-app",
    },
    {
      image: illustration5.src,
      imageInfo: `ui and ux design image`,
      title: ` UI UX Designing `,
      info1: `Wireframes Designing`,
      info2: `UI Design`,
      info3: `Mobile App Design`,
      info4: `Responsive Web Design`,
      info5: `Information Architecture`,
      to: "/services/pages/app-designing",
    },
    {
      image: illustration6.src,
      imageInfo: `blockchain and nft development image`,
      title: `BlockChain / NFT Development `,
      info1: `Web Design`,
      info2: `Custom Web Development`,
      info3: `Third-Party Integrations`,
      info4: `Quality Assurance`,
      info5: `Maintenance & Support`,
      to: "/services/pages/block-chain",
    },
    {
      image: illustration7.src,
      imageInfo: `seo and digital marketing image`,
      title: `SEO & Digital Marketing`,
      info1: `Web Design`,
      info2: `Custom Web Development`,
      info3: `Third-Party Integrations`,
      info4: `Quality Assurance`,
      info5: `Maintenance & Suppoyrt`,
      to: "/services/pages/seo",
    },
    {
      image: illustration8.src,
      imageInfo: `quality assuerance image `,
      title: `QA `,
      info1: `Web Design`,
      info2: `Custom Web Development`,
      info3: `Third-Party Integrations`,
      info4: `Quality Assurance`,
      info5: `Maintenance & Support`,
      to: "/services/pages/qa",
    },
  ];
  return (
    <>
      <Head>
        <title>
          AppUnik Portfolio - Best web & Mobile Application Development Company
        </title>
        <meta
          name="description"
          content="Our app development service offers professional and personalized solutions for businesses and individuals. From concept to launch, we create user-friendly apps for various platforms including iOS and Android."
        />
        <meta
          name="keyword"
          content="company portfolio,projects,web application,company portfolio"
        />
        <link rel="canonical" href="https://www.appunik.com/"></link>
      </Head>
      <ServiceBanner />
      <ServiceDetail panels={panels} />
    </>
  );
}

export default Service;

