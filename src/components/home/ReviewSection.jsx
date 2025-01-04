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
            <svg
              aria-hidden="true"
              width="105"
              height="78"
              className="absolute left-6 top-6 fill-themeMain opacity-10">
              <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
            </svg>
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
