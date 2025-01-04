import React from "react";

const CategoryCard = ({ img, category }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2">
        <img
          src={img}
          alt={category}
          className="h-56 w-56 object-cover object-top rounded-lg"
        />
        <p className="text-themeBlack text-md font-semibold">{category}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
