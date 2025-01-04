import React from "react";

const ProductCard = ({ title, description, price, image }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white group cursor-pointer">
      <div className="relative w-full overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-themeBlack line-clamp-1">
          {title}
        </h3>
        <p className="text-themeGray text-sm line-clamp-2 mt-2">
          {description}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-themeBlack">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
