import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
function NewSlider(props: {
  isEven: any;
  parentIndex: any;
  sliderImages: any[];
}) {
  const isEven = props.isEven;
  const parentIndex = props.parentIndex;
  const swiperSlides =  props.sliderImages && props.sliderImages.map(
    (
      sliderImage: { image: string | undefined; name: string | undefined },
      index: any
    ) => (
      <SwiperSlide key={`swiper_newslide_${isEven}_${index}`} style={{margin:'5px'}}>
        <img src={sliderImage.image} alt={sliderImage.name} />
      </SwiperSlide>
    )
  );    

  return (
    <div className="new_single_slider">
      <Swiper
        key={`swiper_${{ parentIndex }}`}
        spaceBetween={15}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={isEven ? "swiper-align" : ""}
      >
        {swiperSlides}
      </Swiper>
    </div>
  );
}

export default NewSlider;
