import React from "react";

const OfferCard = () => {
  return (
    <div className="flex flex-col lg:flex-row rounded-lg overflow-hidden">
      <div className="flex items-center justify-center bg-themeBlack text-white w-full lg:w-1/2 p-6 md:p-10 lg:p-12">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-3 text-center lg:text-left">
            WE MADE YOUR EVERYDAY FASHION BETTER!
          </h2>
          <p className="text-sm mb-4 text-center lg:text-left">
            In our journey to improve everyday fashion, euphoria presents
            EVERYDAY wear range - Comfortable & Affordable fashion 24/7
          </p>
          <div className="text-center lg:text-left">
            <button className="bg-white p-2 px-6 rounded-lg text-themeBlack">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <img
          src="/images/offerImg.png"
          alt="offer banner"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default OfferCard;
