import Head from "next/head";
import ExperiencedDesigners from "portofolio/hireDevelopers/experiencedDesigners";
import HireDedicate from "portofolio/hireDevelopers/hireDedicate";
import MobileApp from "portofolio/hireDevelopers/mobileApp";
import WebApp from "portofolio/hireDevelopers/webApp";
function HireDeveloper() {
  return (
    <>
      <Head>
        <title>Hire Mobile App Developers | AppUnik</title>
        <meta
          name="description"
          content="Our Dedicated mobile app developers use the trending technologies such as React Native, Flutter, iOS, Android And Kotlin to deliver you secure, scalable and interactive mobile applications. Contact Us."
        />
        <meta name="keyword" content="hire developers" />
        <link rel="canonical" href="https://www.appunik.com/"></link>
      </Head>
      {/* <section className="pages_banner banner_area"> */}
      <HireDedicate />
      <MobileApp />
      <WebApp />
      <ExperiencedDesigners />
      {/* </section> */}
    </>
  );
}

export default HireDeveloper;
