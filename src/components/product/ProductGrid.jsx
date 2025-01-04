import React from "react";
import ProductCard from "./ProductCard";
import TitleHead from "../TitleHead";

const ProductGrid = ({ title, data }) => {
  return (
    <div>
      {title && <TitleHead title={title} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
