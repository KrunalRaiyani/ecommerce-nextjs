"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Button from "../inputs/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoShieldOutline, IoSyncSharp } from "react-icons/io5";
import { LuCircleCheckBig } from "react-icons/lu";

const ProductDetailHero = ({ images, product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sizes = ["S", "M", "L", "XL"];
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3F3F3"];
  const keyFeatures = [
    {
      icon: <MdOutlineLocalShipping className="text-themeGray text-xl" />,
      text: "Free Shipping",
    },
    {
      icon: <IoShieldOutline className="text-themeGray text-xl" />,
      text: "Secure Payment",
    },
    {
      icon: <IoSyncSharp className="text-themeGray text-xl" />,
      text: "Easy Returns",
    },
    {
      icon: <LuCircleCheckBig className="text-themeGray text-xl" />,
      text: "Quality Assurance",
    },
  ];

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2">
        <div className="float-left mr-8 flex h-full items-center">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            direction="vertical"
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="product-slider-thumbs  h-[620px]">
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-full h-full rounded-lg border transition-all duration-300 
                  border-gray-200 ${
                    activeIndex === index ? "border-2 border-themeMain" : ""
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" flex h-full items-center">
          <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#000",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="product-slider-main"
            initialSlide={activeIndex} // Set the initial slide to the active thumbnail index
            onSlideChange={handleSlideChange} // Update the active index on slide change
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className="w-full object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-1/2 p-6">
        <h1 className="text-3xl font-semibold text-themeBlack">
          {product.title}
        </h1>
        <p className="text-xl text-themeGray mt-2 font-semibold">
          {product.price}
        </p>
        <p className="mt-4">{product.description}</p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-themeBlack">
            Available Sizes
          </h3>
          <div className="flex gap-4 mt-2">
            {sizes.map((size, index) => (
              <button
                key={index}
                className="border border-gray-300 px-4 py-2 rounded hover:border-themeMain">
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-themeBlack">
            Available Colors
          </h3>
          <div className="flex gap-4 mt-2">
            {colors.map((color, index) => (
              <button
                key={index}
                className={`w-10 h-10 rounded-full border-2 ${
                  color === product.selectedColor
                    ? "border-themeMain"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => product.setSelectedColor(color)}></button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex gap-2 items-center">
          <Button className="!h-12 flex gap-2 items-center !bg-themeBlack">
            <AiOutlineShoppingCart size={22} />
            Add to Cart
          </Button>
          <Button className="!h-12 flex gap-2 items-center">
            <GrMoney size={22} />
            Buy Now
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="bg-themeSubGray p-4 rounded-full">
                {feature.icon}
              </div>
              <span className="text-themeGray text-lg">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailHero;
