import Head from "next/head";
import ContactForm from "contact/contactForm";
import ContactInfo from "contact/contactInfo";
import  ContactBanner  from "./contact/contactBanner";
function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | AppUnik</title>
        <meta
          name="description"
          content="Get in touch with us at AppUnik by visiting our contact page. Here you can find our phone number, email address, and a contact form to send us a message. We're always happy to hear from you!"
        />
        <meta name="keyword" content="contact" />
        <link rel="canonical" href="https://www.appunik.com/"></link>
      </Head>
      <ContactBanner />
      <ContactInfo />
      <ContactForm />
    </>
  );
}

export default Contact;
