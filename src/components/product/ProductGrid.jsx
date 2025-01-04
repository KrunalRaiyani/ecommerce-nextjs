import React from "react";
import ProductCard from "./ProductCard";
import TitleHead from "../TitleHead";

const ProductGrid = ({ title, data, className, renderContent }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-10">
        {title && <TitleHead title={title} />}
        {renderContent}
      </div>
      <div
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${className}`}>
        {data?.map((item) => (
          <ProductCard
            key={item?.title}
            title={item?.title}
            description={item?.description}
            price={item?.price}
            image={item?.images[0] || item?.images[1]}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
