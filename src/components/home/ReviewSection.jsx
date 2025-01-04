import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";

const reviews = [
  {
    name: "Sheryl Berge",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    quote:
      "I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.",
  },
  {
    name: "Leland Kiehn",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    quote:
      "As a professional athlete, I rely on high-performance gear for my training. This site offers a great selection of top-notch.",
  },
  {
    name: "Peter Renolds",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    quote:
      "The fitness apparel I bought here fits perfectly and feels amazing. I highly recommend this store to anyone quality.",
  },
  {
    name: "Sheryl Berge",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    quote:
      "I love the fitness apparel and gear I purchased from this site. The quality is exceptional and the prices are unbeatable.",
  },
  {
    name: "Leland Kiehn",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    quote:
      "As a professional athlete, I rely on high-performance gear for my training. This site offers a great selection of top-notch.",
  },
  {
    name: "Peter Renolds",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    quote:
      "The fitness apparel I bought here fits perfectly and feels amazing. I highly recommend this store to anyone quality.",
  },
];

const ReviewSection = () => {
  return (
    <Swiper
      className="mySwiper overflow-hidden"
      navigation={true}
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      //   autoplay={{
      //     delay: 3000,
      //     disableOnInteraction: false,
      //   }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Navigation, Pagination]}>
      {reviews.map((review, index) => (
        <SwiperSlide key={index} className="flex justify-centers">
          <figure className="relative flex flex-col justify-between rounded-lg p-6 border border-themeMidGray ">
            <blockquote className="relative flex-grow">
              <p className="text-lg tracking-tight text-themeBlack">
                {review.quote}
              </p>
            </blockquote>
            <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
              <div>
                <div className="font-display text-base text-themeBlack">
                  {review.name}
                </div>
              </div>
              <div className="overflow-hidden rounded-full bg-themeSubGray">
                <img
                  alt=""
                  className="h-14 w-14 object-cover"
                  src={review.image}
                />
              </div>
            </figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSection;
