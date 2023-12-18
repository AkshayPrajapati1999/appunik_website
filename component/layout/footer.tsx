import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import TopButton from "topButton";
interface Props {}

function Footer(props: Props) {
  const {} = props;

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer_area">
        <div className="container">
          <div className="footer_inner row">
            <div className="col-xl-7 col-lg-6 col-md-6 footer_widget footer_address wow fadeIn">
              <h4>Contact Info</h4>
              <a className="footer-address" href="https://maps.app.goo.gl/SkdCV8uKmzt3duXc8?g_st=ic">
                1018, Shivalik Shilp,
                <br /> Iskcon Cross Road, Ahmadabad,
                <br /> Gujarat-380015
              </a>
              <address>
                <span className="number">
                  <a className="phone-number" href="tel:+91 7435047427">+91 7435047427</a>
                </span>
                <span><a className="email" href="mailto:info@appunik.com">info@appunik.com </a></span>
              </address>
                <span className="skype_details">Skype:- Appunik:1024195 </span>  
              <ul className="footer_social">
                <li>
                  <Link href="https://www.facebook.com/AppUnikIn" target="_blank">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/appunik/" target="_blank">
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/app_unik" target="_blank">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/appunik_company/" target="_blank">
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="footer_widget col-md-3 col-sm-6 wow fadeIn"
              data-wow-delay="0.2s"
            >
              <h4>Navigation</h4>
              <ul className="footer_nav">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/portofolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="/service">Services</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/career">Career</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="footer_social_mobile">
                <li>
                  <Link href="https://www.facebook.com/AppUnikIn" target="_blank">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/appunik/" target="_blank">
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/app_unik" target="_blank">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/appunik_company/" target="_blank">
                    <FaInstagram />
                  </Link>
                </li>
          </ul>
          <div className="row copy_right">
            <div className="col-xl-4 col-md-6 wow zoomIn">
              <ul className="copyright_wrapper">
                <li>
                  <p>&copy; APPUNIK {currentYear}</p>
                </li>
              </ul>
            </div>
            <div className="col-xl-4 col-md-6 wow slideInRight"></div>
            <div className="col-xl-4 order-xl-first  wow slideInLeft">
              <p></p>
            </div>
          </div>
        </div>
        <TopButton />
      </footer>
    </>
  );
}

export default Footer;
