"use client";
import ProductDetailHero from "@/components/product/ProductDetailHero";
import ProductGrid from "@/components/product/ProductGrid";
import { dresesData } from "@/utils/data";
import React from "react";

const page = () => {
  const product = dresesData[0];
  return (
    <div>
      <ProductDetailHero images={product.images} product={product} />
      <div className="mt-20">
        <ProductGrid title={"Similar Products"} data={dresesData.slice(0, 8)} />
      </div>
    </div>
  );
};

export default page;
