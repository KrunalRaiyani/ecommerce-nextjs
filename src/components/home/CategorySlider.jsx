import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import CategoryCard from "./CategoryCard";
import TitleHead from "../TitleHead";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const CategorySlider = () => {
  const categroyData = [
    {
      category: "Kurti",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQq7VKWKZpnNdGyPC-sYQT54LyQ859KlV8s8tT5f-Bs93XfsYzKAg-AWPR7Nqf-tRl3JM&usqp=CAU",
      id: 1,
    },
    {
      category: "Saree",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTQThNx_g7BGW-zv7Q_suieOzalcmT-k3iw1kS8yPiD7vQLwngUUluBfaC0-IbpFupos&usqp=CAU",
      id: 2,
    },
    {
      category: "Tops",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8HoVSLM0cbktd6jCBuw2sEa9bPmHkEmT9kuGNnioL7EYl5YaV4ijXAbIOxGeQe9PCDkc&usqp=CAU",
      id: 3,
    },
    {
      category: "Dreses",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZbGOmRVFueEyAa_fnC7La61fHhPNng6fj_TaXVUA1Sd3ySD5inJlUwVQPkdDYiBJVMm0&usqp=CAU",
      id: 4,
    },
    {
      category: "Kurti",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQq7VKWKZpnNdGyPC-sYQT54LyQ859KlV8s8tT5f-Bs93XfsYzKAg-AWPR7Nqf-tRl3JM&usqp=CAU",
      id: 5,
    },
    {
      category: "Saree",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTQThNx_g7BGW-zv7Q_suieOzalcmT-k3iw1kS8yPiD7vQLwngUUluBfaC0-IbpFupos&usqp=CAU",
      id: 6,
    },
    {
      category: "Tops",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8HoVSLM0cbktd6jCBuw2sEa9bPmHkEmT9kuGNnioL7EYl5YaV4ijXAbIOxGeQe9PCDkc&usqp=CAU",
      id: 7,
    },
    {
      category: "Dreses",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZbGOmRVFueEyAa_fnC7La61fHhPNng6fj_TaXVUA1Sd3ySD5inJlUwVQPkdDYiBJVMm0&usqp=CAU",
      id: 8,
    },
  ];

  return (
    <div>
      <div className="mb-10">
        <TitleHead title={"Categories"} />
      </div>
      <Swiper
        className="mySwiper overflow-hidden sm:h-full"
        navigation={true}
        spaceBetween={1}
        slidesPerView={5}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}>
        {categroyData?.map((item) => (
          <SwiperSlide className="h-full overflow-hidden" key={item?.id}>
            <CategoryCard img={item?.img} category={item?.category} />
          </SwiperSlide>
        ))}

        <div className="swiper-btn-wraper">
          <div className="swiper-button-next block!"></div>
          <div className="swiper-button-prev block!"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default CategorySlider;
