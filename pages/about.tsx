import discover from "../images/illustations/Discover.png";
import design from "../images/illustations/Design.png";
import build from "../images/illustations/Build.png";
import deliver from "../images/illustations/Deliver.png";
import AboutBanner from "./about/aboutBanner";
import AboutStory from "./about/aboutStory";
import AboutWork from "./about/aboutWork";
import AbountCount from "./about/abountCount";
import AboutVision from "./about/aboutVision";
import { IAboutUsWorks } from "../models/about.model";
import Head from "next/head";
import AboutSlider from "about/aboutSlider";
import tech1 from "../images/technology/1.svg";
import tech2 from "../images/technology/2.svg";
import tech3 from "../images/technology/3.svg";
import tech4 from "../images/technology/4.svg";
import tech5 from "../images/technology/5.svg";
import tech6 from "../images/technology/6.svg";
import tech7 from "../images/technology/7.svg";
import tech8 from "../images/technology/8.svg";
import tech9 from "../images/technology/9.svg";
import tech10 from "../images/technology/10.svg";
import tech11 from "../images/technology/11.svg";
function About() {
  const works: IAboutUsWorks[] = [
    {
      image: discover.src,
      title: `Discover`,
      detail: `Understanding your business needs to delivering innovative IT solutions for your success.  `,
      name: `discover art`,
    },
    {
      title: `Design`,
      detail: `Designing bespoke IT solutions tailored to your business needs, our team of experts deliver results that drive your success.
      `,
      image: design.src,
      name: `design art`,
    },
    {
      title: `Build`,
      detail: `Building innovative IT solutions with precision and expertise, our team delivers results that drive your business forward.`,
      image: build.src,
      name: `build art`,
    },
    {
      title: `Deliver`,
      detail: `  We deliver excellence by following an iterative approach to our
    work. We are always looking to improve our way of work.`,
      image: deliver.src,
      name: `deliver art`,
    },
  ];
  // for (let index = 0; index < 5; index++) {
  //   works.push({
  //     detail:
  //       "Vero nostrum sed dignissimos doloremque, voluptates reiciendis et autem voluptas exercitationem distinctio rem. Aliquid natus accusamus minus iure, repellat dolorum ratione nostrum.",
  //     image: "",
  //     id: index,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //   });
  // }

  return (
    <>
      <Head>
        <title>About | AppUnik</title>
        <meta
          name="description"
          content="Custom app development company - AppUnik offers custom application development services for web, mobile app & Cloud solutions."
        />
        <meta name="keyword" content="about" />
        <link rel="canonical" href="https://www.appunik.com/"></link>
      </Head>
      <AboutBanner />
      <AboutStory />
      <AboutWork works={works} />
      <AbountCount />
      <AboutVision />
      <AboutSlider sliderImages={sliderImages} />
    </>
  );
}

export default About;

const sliderImages = [
  { image: tech1 ,name:`technology icons` },
  { image: tech2 ,name:`technology icons`},
  { image: tech3 ,name:`technology icons`},
  { image: tech4 ,name:`technology icons`},
  { image: tech5 ,name:`technology icons`},
  { image: tech6 ,name:`technology icons`},
  { image: tech7 ,name:`technology icons`},
  { image: tech8 ,name:`technology icons`},
  { image: tech9 ,name:`technology icons`},
  { image: tech10 ,name:`technology icons`},
  { image: tech11 ,name:`technology icons`},
];
