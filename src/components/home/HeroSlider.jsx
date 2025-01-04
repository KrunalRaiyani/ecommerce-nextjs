import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";

const HeroSlider = () => {
  return (
    <Swiper
      className="mySwiper overflow-hidden sm:h-full"
      navigation={true}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Navigation, Pagination]}>
      <SwiperSlide className="h-full overflow-hidden">
        <img
          src="/images/image1.png"
          alt="banner"
          className="object-cover w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="h-full overflow-hidden">
        <img
          src="/images/image2.png"
          alt="banner"
          className="object-cover w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide className="h-full overflow-hidden">
        <img
          src="/images/image3.png"
          alt="banner"
          className="object-cover w-full h-full"
        />
      </SwiperSlide>

      <div className="swiper-btn-wraper">
        <div className="swiper-button-next block!"></div>
        <div className="swiper-button-prev block!"></div>
      </div>
    </Swiper>
  );
};

export default HeroSlider;
