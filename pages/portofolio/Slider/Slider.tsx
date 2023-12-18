/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import Image from "next/image";

const NewSlider = (props: { isEven: any; parentIndex: any; sliderImages: any[]; }) => {
  const isEven = props.isEven;
  const parentIndex = props.parentIndex;

  const swiperSlide = props.sliderImages &&props.sliderImages.map((sliderImage: { image: string | undefined; name: string | undefined; }, index: any) => (
    <SwiperSlide key={`swiper_slide_${isEven}_${index}`}>
      <img src={sliderImage.image} alt={sliderImage.name}  />
    </SwiperSlide>
  )); 

  return (
    <div className="slider_wrapper" >
      <Swiper
        key={`swiper_${{ parentIndex }}`}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        speed={3500}
        rewind={true}
        navigation={true}
        slidesPerView={2}
        centeredSlides={false}
        slidesPerGroupSkip={100}
        freeMode={true}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        spaceBetween={25}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Keyboard, Scrollbar, Navigation, Pagination]}
        className={isEven ? "swiper-align" : ""}
      >
        {swiperSlide}
      </Swiper>
    </div>
  );
};

export default NewSlider;
