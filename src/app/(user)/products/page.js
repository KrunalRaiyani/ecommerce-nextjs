"use client";
import ProductGrid from "@/components/product/ProductGrid";
import SideFilter from "@/components/product/SideFilter";
import Wrapper from "@/components/Wrapper";
import { dresesData } from "@/utils/data";
import React, { useState } from "react";
import { IoFilter } from "react-icons/io5";

const page = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilterVisibility = () => {
    setIsFilterVisible((prev) => !prev);
  };
  return (
    <Wrapper className="flex gap-12 justify-between mt-10">
      <SideFilter
        isVisible={isFilterVisible}
        toggleVisibility={toggleFilterVisibility}
      />
      <div className="w-full mx-auto">
        <ProductGrid
          title={"New Arrival"}
          data={dresesData}
          renderContent={
            <button
              onClick={toggleFilterVisibility}
              className="visible md:hidden">
              <IoFilter className="text-lg" />
            </button>
          }
        />
      </div>
    </Wrapper>
  );
};

export default page;
