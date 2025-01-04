import React from "react";

const SearchSuggestion = ({ image, title, description }) => {
  return (
    <div className="flex items-center p-4 border-b hover:bg-themeSubGray transition cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-16 h-16 rounded-lg object-cover mr-4"
      />
      <div className="flex-1">
        <h3 className="text-sm font-medium text-themeBlack">{title}</h3>
        <p className="text-xs text-themeGray line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default SearchSuggestion;
