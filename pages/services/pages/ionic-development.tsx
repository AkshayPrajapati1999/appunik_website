import Banner from "../../../component/banner"
import { IServiceApp, IServiceBanner, IServiceCounter, IServiceInfo } from "../../../models/service.model";
import img2 from "../../../images/illustations/Portfolio 1.png";
import img1 from "../../../images/illustations/Portfolio 2.png";
import ServiceCounter from "../../../component/serviceCounter";
import isoSvg from "../../../images/iosInfo.svg";
import ServiceInfo from "../../../component/serviceInfo";
import AndroidStudio from "../../../images/technology/android-studio-480.svg";
import Adobe from "../../../images/technology/adobe-xd-2-1.svg";
import Figma from "../../../images/technology/Figma.svg";
import TitaniumXd from "../../../images/technology/titaniumXD.png";
import Xcode from "../../../images/list icon/android.svg";

import logo from "../../../images/hire logo/ionic-logo.svg";
function IonicDevelopment() {
    const banner: IServiceBanner[] = [
        {
          image1: img1.src,
          title: `Revolutionize Your App with Top-notch Ionic Services`,
          detail: ``,
          image2: img2.src,
          logo: logo,
          info: "",
          titleInfo: `Our team of Ionic developers possesses extensive years of experience, enabling them to create imaginative, groundbreaking, and high-performing applications. Leveraging advanced technology and abundant resources, we assist businesses in achieving significant growth in the market. `,
        },
      ];

      const counters :IServiceCounter[]=[
        {
            title: `What We Do`,
            columns: [
              {
                image: "",
                value: `Ionic Theme Development`,
                lists: [{ list: "Create stunning and customized Ionic themes with our expert theme development services. Enhance your app's visual appeal and user experience" }],
              },
              {
                image: "",
                value: `Ionic Integration Services`,
                lists: [{ list: "Ionic Integration Services offers seamless integration solutions for businesses. From API integrations to third-party software, we've got you covered." }],
              },
              {
                image: "",
                value: `Ionic Migration Services`,
                lists: [{ list: "Ionic Migration Services provides seamless and efficient migration solutions for businesses to modern technology platforms." }],
              },
              {
                image: "",
                value: `Ionic Framework Enterprise `,
                lists: [{ list: "Ionic Framework Enterprise Edition: Build powerful, cross-platform mobile apps with ease." }],
              },
              {
                image: "",
                value: `Ionic App Store Deployment`,
                lists: [{ list: "Effortlessly publish and distribute your Ionic app on major app stores. Maximize visibility and reach with seamless deployment and management" }],
              },
              {
                image: "",
                value: `Ionic Consultation & Strategy`,
                lists: [{ list: "Ionic Consultation and Strategy provides expert guidance and innovative solutions for businesses, helping them thrive in today's competitive landscape." }],
              },
            ],
          },
      ]
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
          title: "Our Expertise With Ionic Development Technology ",
          appheading: "Ionic Development Tools",
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
    <Banner banner={banner}/>
    <ServiceCounter counters={counters}/>
    {/* <ServiceApp serviceApp={serviceApp}/> */}
    <ServiceInfo serviceInfo={serviceInfo} />
    </>
  )
}

export default IonicDevelopment