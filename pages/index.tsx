import Head from "next/head";
import HomeBanner from "./home/homeBanner";
import HomeCounter from "./home/homeCounter";
import HomeService from "./home/homeService";
import HomeAbout from "./home/homeAbout";
import HomeIntroduce from "./home/homeIntroduce";
import HomeSlider from "./home/homeSlider";
import AppunikLogo from "../public/android-chrome-512x512.png"
export default function Home() {
  return (
    <>
      <Head>
        <title>
          {/* Top Web, Mobile App and Custom Software Development Company | AppUnik */}
          Top Web, Mobile App and Custom Software Development Company | AppUnik
        </title>
        <meta
          name="description"
          content="AppUnik is a Leading software development company offering web and mobile app solutions to global clients. Trusted expertise in USA, Canada, UAE, Australia, Singapore, Germany, Spain, and India."
        />
        <meta
          name="keyword"
          content="web development,web applications,web design,AppUnik,mobile app,website development company in india,home page"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AppUnik" />
        <meta name="twitter:title" content="Sammy the Shark" />
        <meta
          name="twitter:description"
          content="Senior Selachimorpha at DigitalOcean"
        />
        <meta
          name="twitter:image"
          content="https://html.sammy-codes.com/images/large-profile.jpg"
        />
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:title" content="AppUnik" />
        <meta
          property="og:image"
          content="http://new.appunik.com/images/appunik.png"
        />
        <meta property="og:site_name" content="AppUnik" />
        <meta
          property="og:description"
          content="AppUnik is a Leading software development company offering web and mobile app solutions to global clients. Trusted expertise in USA, Canada, UAE, Australia, Singapore, Germany, Spain, and India."
        />
        <link rel="canonical" href="https://www.appunik.com/"></link>
      </Head>
      <HomeBanner />
      <HomeService />
      <HomeCounter />
      <HomeAbout />
      <HomeIntroduce />
      <HomeSlider />
    </>
  );
}
