import { useEffect } from "react";
import type { AppProps } from "next/app";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/services.scss";
import "../styles/newSlider.scss";
import "../styles/new.scss";
// import "../styles/animation.css";
import "../styles/slider.scss";
import "../css/style.css";
import "../styles/home.scss";
import "../styles/header.scss";
// import "../css/header.scss";
import Script from "next/script";
import Header from "../component/layout/header";
import Footer from "../component/layout/footer";
import jQuery from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/serviceinfo.scss"
import "../styles/serviceApp.scss"
import { ParallaxProvider } from "react-scroll-parallax";
declare const window: any;
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      debounceDelay: 0,
      easing: "ease-out-cubic",
      offset: 50,
      once: false,
      mirror: true,
      disable: function () {
        var maxWidth = 980;
        return window.innerWidth < maxWidth;
      },
    });
    if (typeof module === "object" && typeof module.exports === "object") {
    } else {
      window;
    }

    window.addEventListener('scroll', () => {
      AOS.refresh()
    }, false)
    window.jQuery = window.$ = require("jquery");
  }, []);

  

  return (
    <>

      <Script
        src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
        crossOrigin="anonymous"
        
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossOrigin="anonymous"
        
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js"
        integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+"
        crossOrigin="anonymous"
        
      ></Script>
      
      <ParallaxProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ParallaxProvider>
    </>
  );
}
