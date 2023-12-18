import Head from "next/head";
import PortofolioBanner from "./portofolio/portofolioBanner";
import PortofolioSlider from "./portofolio/portofolioSlider";
import bg1 from "../images/Project/Minte.png";
import bg2 from "../images/Project/staver.png";
import mi from "../images/Project/mi.png";
import mi2 from "../images/Project/mi2.png";
import staver1 from "../images/Project/staver1.png";
import staver2 from "../images/Project/staver2.png";
import music from "../images/Project/Music2.jpg";
import demo2 from "../images/illustations/Landing Page Shot.png";
import { IProjects } from "../models/project.model";
import ProjectSingleSlider from "portofolio/newslider/singlePageSlider";
function Portofolio() {
  const projects: IProjects[] = [
    {
      image: bg1.src,
      title: `Mintee`,
      text: `An education app that provides online and in-house learning opportunities with the best teachers from all over the world.`,
      sliderImages: [
        {
          image: mi.src,
          name: "Lorem ipsum",
        },
        {
          image: mi2.src,
          name: "Lorem ipsum",
        },
      ],
    },
    {
      image: bg2.src,
      title: `Staver`,
      text: `Staver is a project in which a user can go on to search for homes from different cities all over the world. Users can also search for events, they can invite friends, chat there, etc.`,
      sliderImages: [
        {
          image: staver1.src,
          name: "Lorem ipsum",
        },
        {
          image: staver2.src,
          name: "Lorem ipsum",
        },
      ],
    },
    {
      image: bg2.src,
      title: `Vive Guide`,
      text: `Vive Guide is a social media platform that helps users discover the best places to see, eat, stay, and play in any city around the world. It is a resource that provides community-driven feedback & recommendations that are tailored to each user's preferences and interests. The project includes the development of both a
      mobile application and a website that offer advanced search and filtering capabilities, as well as the ability to connect with other users.`,
      sliderImages: [
        {
          image: staver1.src,
          name: "Lorem ipsum",
        },
        {
          image: staver2.src,
          name: "Lorem ipsum",
        },
      ],
    },
    {
      image: bg2.src,
      title: `All Incl`,
      text: `ALL INCL.+ is our search for uncommonness, challenging exclusivity,and making waves instead of riding them.A conceptual approach to the “+" signifies inclusivity. The color ways are a medium to communicate that while we all look different from the outside, we shine equally bright from within. Our mission is to foster an environment where community exists beyond race and binary constructs. Inclusivity, community, and the planet are at the core of everything we do.`,
      sliderImages: [
        {
          image: staver1.src,
          name: "Lorem ipsum",
        },
        {
          image: staver2.src,
          name: "Lorem ipsum",
        },
      ],
    },
    
    // {
    //   isBackground: true,
    //   title: `Tsaro`,
    //   image: "",
    //   text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
    //   tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
    //   eos et accusam et justo duo dolores et ea rebum.`,
    //   sliderImages: [
    //     {
    //       image: music.src,
    //       name: "Lorem ipsum",
    //     },
    //     {
    //       image: music.src,
    //       name: "Lorem ipsum",
    //     },
    //   ],
    // },
    // {
    //   isBackground: true,
    //   title: `Tail Tag`,
    //   image: "",
    //   text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
    //   tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
    //   eos et accusam et justo duo dolores et ea rebum.`,
    //   sliderImages: [
    //     {
    //       image: music.src,
    //       name: "Lorem ipsum",
    //     },
    //     {
    //       image: music.src,
    //       name: "Lorem ipsum",
    //     },
    //   ],
    // },
    
  ];
  const project: IProjects[] = [
    {
      isBackground: true,
      image: bg2.src,
      title: `Ellastein`,
      text: `Ella Stein is a fully integrated brand, producing all our exquisite jewelry in-house in the vibrant city of Mumbai, India. Every stage of our jewelry-making process, from design inception to final production, is meticulously overseen by our highly skilled artisans. With EllaStein, you not only adorn yourself with timeless elegance but also contribute to a more eco-conscious and responsible approach to jewelry.`,
      sliderImages: [
        {
          image: staver1.src,
          name: "Lorem ipsum",
        },
        {
          image: staver2.src,
          name: "Lorem ipsum",
        },
      ],
    },
    {
      isBackground: true,
      title: `lorem Ipsum`,
      image: "website mockup",
      text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
      eos et accusam et justo duo dolores et ea rebum.`,
      sliderImages: [
        {
          image: demo2.src,
          name: "Lorem ipsum",
        },
        {
          image: demo2.src,
          name: "Lorem ipsum",
        },
      ],
    },
    // {
    //   isBackground: true,
    //   title: `lorem Ipsum`,
    //   image: "website mockup",
    //   text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
    //   tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
    //   eos et accusam et justo duo dolores et ea rebum.`,
    //   sliderImages: [
    //     {
    //       image: demo2.src,
    //       name: "Lorem ipsum",
    //     },
    //     {
    //       image: demo2.src,
    //       name: "Lorem ipsum",
    //     },
    //   ],
    // },
  ];
  return (
    <>
      <Head>
        <title>AppUnik | Our Best Web & Mobile Application Projects</title>
        <meta
          name="description"
          content="Explore AppUnik’s success stories as we deliver software products of various complexity to companies across industries."
        />
        <meta
          name="keyword"
          content="company portfolio,projects,web application,company portfolio"
        />
        <link rel="canonical" href="https://www.appunik.com/"></link>
      </Head>

      <div className="portofolio-container">
        <PortofolioBanner />
        <PortofolioSlider projects={projects} />
        <ProjectSingleSlider project={project}></ProjectSingleSlider>
      </div>
    </>
  );
}

export default Portofolio;
