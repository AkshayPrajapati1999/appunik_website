import { ICareerWorks } from "../models/career.model";
import CareerBanner from "career/careerBanner";
import CareerOpning from "career/careerOpening";
import job from "../images/job/Job-Career.jpg";
import job2 from "../images/job/job2-Career.jpg";
import Head from "next/head";
import CareerFlow from "career/careerFlow";
import { ICareerFlow } from "../models/career.model";
import flow1 from "../images/flow icons/icon 1.png";
import flow2 from "../images/flow icons/icon 2.png";
import flow3 from "../images/flow icons/icon 3.png";
import flow4 from "../images/flow icons/icon 4.png";
import flow5 from "../images/flow icons/icon 5.png";

import mobileFlow1 from "../images/flow icons/mobileFlow1.svg";
import mobileFlow2 from "../images/flow icons/mobileFlow2.svg";
import mobileFlow3 from "../images/flow icons/mobileFlow3.svg";
import mobileFlow4 from "../images/flow icons/mobileFlow4.svg";
import mobileFlow5 from "../images/flow icons/mobileFlow5.svg";


function Career() {  
  const careers: ICareerWorks[] = [
    {
      image: job.src,
      imageInfo: `ios job image`,
      title: `IOS Devloper`,
      opening: `1`,
      experience: ` 1 to 2 years`,
      details: `We are seeking a highly skilled and motivated individual to join our team and play a key role in designing, developing, and maintaining cutting-edge technology solutions for our clients.`,
    },
    {
      image: job2.src,
      imageInfo: `ios job image`,
      title: `Dot Net Devloper`,
      opening: `1`,
      experience: ` 1 to 2 years`,          
      details: `We are seeking a highly skilled and motivated individual to join our team and play a key role in designing, developing, and maintaining cutting-edge technology solutions for our clients.`,
    },
  ];

  const careerflow: ICareerFlow[] = [
    {
      image: flow1.src,
      mobileImage: mobileFlow1.src,
      info:'Apply to Relavent Profile',
      text:'Apply to Relavent Profile icon'
    },  
    {
      image: flow2.src,
      mobileImage: mobileFlow2.src,
      info:'Online Interview/Evalution',
      text:'Online Interview/Evalution icon'
    },
    {
      image: flow3.src,
      mobileImage: mobileFlow3.src, 
      info:'Final Offer',
      text:'Final Offer icon'
    },
    {
      image: flow4.src,
      mobileImage: mobileFlow4.src,
      info:'Pre Joining Engagement',
      text:'Pre Joining Engagement icon'
    },  
    {
      image: flow5.src,
      mobileImage: mobileFlow5.src,
      info:'Onboarding A-board',
      text:'Onboarding A-board icon'
    },
  ];
  return (
    <>

      <Head>
        <title>Career | AppUnik</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at our company and join a team of dedicated professionals working towards a common goal. Apply now to be a part of our dynamic and innovative workforce."
        />
        <meta
          name="keyword"
          content="Hiring,Hire developer,hire web developer,Hire Dedicated Developers India"
        />
            <link rel="canonical" href="https://www.appunik.com/"></link>
      </Head>
      <CareerBanner />
      <CareerFlow careerflow={careerflow} />
      <CareerOpning careers={careers} />
    </>
  );
}

export default Career;
