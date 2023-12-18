import Banner from "../../../component/banner";
import ServiceCounter from "../../../component/serviceCounter";
import {  IServiceBanner, IServiceCounter, IServiceInfo } from "../../../models/service.model";
import img2 from "../../../images/pages illustration/Expert Blockchain and NFT Development Company.png";
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

import logo from "../../../images/hire logo/block-chain-logo.svg";
function BlockChain() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Revolutionize Your Future with Expert Blockchain Development Services`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo:`Our team of expert developers is dedicated to providing you with cutting-edge solutions for your Blockchain and NFT needs. We specialize in developing decentralized applications (dApps) and smart contracts that run on the Blockchain network. Our services also  including the creation of unique NFTs for digital assets.
      `,
    },
  ];
  const counters: IServiceCounter[] = [
    {
      title: `What We Do`,
      columns: [
        {
          image: icon1.src,
          value: `Cryptocurrency Development`,
          lists: [
            { list: "Developing secure and efficient cryptocurrency solutions for businesses and individuals." },
          ],
        },
        {
          image: icon2.src,
          value: `Blockchain Integration`,
          lists: [
            { list: "Blockchain technology to provide secure, decentralized, and transparent solutions for various industries and applications." },
          ],
        },
        {
          image: icon3.src,
          value: `Wallet App Development`,
          lists: [
            { list: "Custom wallet app development for transactions, secure storage, and user-friendly experience." },
          ],
        },
        {
          image: icon4.src,
          value: `NFT Collection Design`,
          lists: [
            { list: "NFT collection designs for digital assets & art, tailored to your brand, vision and unique style." },
          ],
        },
        {
          image: icon5.src,
          value: `NFT Portal Development`,
          lists: [
            { list: "NFT portal development for buying, selling, and trading unique digital assets with blockchain technology integration." },
          ],
        },
        {
          image: icon5.src,
          value: `Audit & security services`,
          lists: [
            { list: "Protect your business with audit and security services: risk assessment, compliance checks, vulnerability testing, and threat management." },
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
        <title>
          Blockchain App Development Services | Top Blockchain Development
          Company
        </title>
        <meta
          name="description"
          content="Looking for top-quality blockchain app development services? Look no further! Our team of expert developers specializes in creating secure and scalable blockchain-based and nft based applications for businesses and organizations of all sizes"
        />
        <meta
          name="keyword"
          content="nft marketplace development,nft,blockchain,nft development company
            NFT service provider,blockchain services provider
            blockchain development company,blockchain technology"
        />
      </Head>

      <Banner banner={banner}></Banner>
      <ServiceCounter counters={counters} />
      {/* <ServiceApp serviceApp={serviceApp}/> */}
      <ServiceInfo serviceInfo={serviceInfo} />
    </>
  );
}

export default BlockChain;
