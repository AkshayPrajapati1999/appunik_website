import Image from "next/image";
import img1 from "../../images/illustations/Our Story.png";

 function AboutStory() {
  return (

      <div className="aboutservice_container"    
      data-aos="zoom-out-up"
    // data-aos-offset="150"
    data-aos-easing="ease-out-quart"
    // data-aos-once="false" data-aos-anchor-placement="top-center"
      >
        <section className="banner_area  aboutservice">
          <div className="container">
            <div className="row">
            <div className="col-lg-5 order-lg-first wow zoomIn animated mobile_screen">
                <Image
                  src={img1}
                  alt="story vector art"
                  className="illustration-1 "
             
                />
              </div>
              <div className="col-lg-7 banner_contant">
                <h2 className="wow fadeInUp animated">Our Story</h2>
                <p className="para_align wow fadeInUp animated" data-wow-delay="0.3s">
                  Since the beginning of our journey, 2018 we have been working
                  to make this dream into a reality which seems to be happening
                  after long 3 years a bit of what we have in our dreams.Like
                  life goes, there are always ups & downs, we have lost
                  sometimes and have won many times, that makes our journey
                  special as we have always learnt where we were wrong and tried
                  to improve ourselves each day a bit
                </p>
              </div>
              <div className="col-lg-5 order-lg-first wow zoomIn animated web_screen">
                <Image
                  src={img1}
                  alt="story vector art"
                  className="illustration-1 "
             
                />
              </div>
            </div>
          </div>
        </section>
      </div>

  );
}

export default AboutStory