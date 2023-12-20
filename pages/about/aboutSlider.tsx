import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

import Image from "next/image";
 function AboutSlider(props: { sliderImages: any[] }) {
  const swiperSlide = props.sliderImages && props.sliderImages.map((sliderImage, index) => (
    <SwiperSlide key={`about_swiper_slide__${index}`}>
      <Image src={sliderImage.image} alt={sliderImage.name} />
    </SwiperSlide>
  ));

  return (
    <div
      className="about-vision-container"
      data-aos="zoom-out-up"
      // data-aos-offset="150"
      data-aos-easing="ease-out-quart"
      // data-aos-once="false" data-aos-anchor-placement="top-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="about-technology-title">Technology we use</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="about_slider_container">
              <Swiper
                slidesPerView={8}
                speed={3000}
                spaceBetween={30}
                slidesPerGroup={1}
                slidesPerGroupSkip={2}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                  },
                  580: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 8,
                    spaceBetween: 30,
                  },
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
              >
                {swiperSlide}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutSlider