import Banner from "../../../component/banner";
import ServiceCounter from "../../../component/serviceCounter";
import { IServiceBanner, IServiceCounter } from "../../../models/service.model";
import img2 from "../../../images/illustations/Portfolio 1.png";
import img1 from "../../../images/illustations/Portfolio 2.png";
import icon1 from "../../../images/icons/Icons.png";
import icon2 from "../../../images/icons/Icons-1.png";
import icon3 from "../../../images/icons/industry-40.png";
import icon4 from "../../../images/icons/layer1.png";
import icon5 from "../../../images/icons/on-time.png";
import Head from "next/head";
import logo from "../../../images/hire logo/website-logo.svg";
// interface ServiceProps {
//   banner : IServiceBanner[];

// }
function AppDevelopmentBanner() {
  const banner: IServiceBanner[] = [
    {
      image1: img1.src,
      title: `Innovative Website Development Company`,
      detail: ``,
      image2: img2.src,
      logo: logo,
      info: "",
      titleInfo: `Our team of experienced developers and designers will work closely with you to understand your business needs and goals, and create a website that reflects your brand image and resonates with your target audience. We use the latest web development technologies to ensure that your website is fast, responsive, and user-friendly, providing a seamless user experience for your visitors.`,
    },
  ];

  const counters: IServiceCounter[] = [
    {
      title: `Innovative Website Development Company`,
      columns: [
        {
          image: icon1.src,
          value: `User-Centric Solutions`,
          lists: [
            { list: "Website development at Prismetric aims to ease the user experience. We put forth users the best interface that speaks to your business objectives and convinces them to avail services." },
          ],
        },
        {
          image: icon2.src,
          value: `Objective-specific`,
          lists: [
            { list: "Our web design and development company assures you that the website built for your business adheres to the company’s goal and meets specific purpose pre defined by you." },
          ],
        },
        {
          image: icon3.src,
          value: `Compatible Websites`,
          lists: [
            { list: "Our web design company caters to the grave need for mobile compatibility by building responsive web designs." },
          ],
        },
        {
          image: icon4.src,
          value: `Appealing Web Designs`,
          lists: [
            { list: "Our research and development teams go hand-in-hand to render the top-notch web development that is visually appealing and functionally smooth." },
          ],
        },
        {
          image: icon5.src,
          value: `Quality web development`,
          lists: [
            { list: "Prismetric provides custom website development services at affordable costs without compromising on quality" },
          ],
        },
        {
          image: icon5.src,
          value: `Accurate reporting`,
          lists: [
            { list: "As an owner, you are kept up-to-date with your project and its milestones. Track the progress live and get regular reports" },
          ],
        },
       
      ],
    },
  ];
 
  //   {
  //     title: `Innovative Website Development Company`,
  //     image1: icon1.src,
  //     image2: icon2.src,
  //     image3: icon3.src,
  //     image4: icon4.src,
  //     image5: icon5.src,
  //     value1: `5+`,
  //     value2: `100%`,
  //     value3: `5+`,
  //     value4: `10+`,
  //     value5: `90%`,
  //     info1: `Year of Experience`,
  //     info2: `Client Satisfaction`,
  //     info3: `Developed Mobile App`,
  //     info4: `Industries Served`,
  //     info5: `On-Time Delivery`,
  //   },
  // ];
  return (
    <>
      <Head>
        <title>Web Development Services </title>
        <meta
          name="description"
          content="Elevate your online presence with our professional website development services. Our team of expert designers and developers create SEO-friendly websites that drive traffic and convert visitors into customers. "
        />
        <meta
          name="keyword"
          content="web development,web development service,web development company,top web development company"
        />
      </Head>

      <Banner banner={banner}></Banner>
      <ServiceCounter counters={counters} />
    </>
  );
}

export default AppDevelopmentBanner;
