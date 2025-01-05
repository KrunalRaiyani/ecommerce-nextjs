"use client";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { dresesData } from "@/utils/data";
import SearchSuggestion from "./SearchSuggestion";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (showSuggestions) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSuggestions]);

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const filteredData = dresesData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full md:max-w-lg group">
      <div className="fixed inset-0 bg-black opacity-0 transition-opacity duration-500 pointer-events-none group-focus-within:opacity-25 group-focus-within:pointer-events-auto z-[999]"></div>

      <div className="relative z-[1000]">
        <FiSearch
          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowSuggestions(e.target.value.length > 0);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={handleBlur}
          className="w-full px-10 py-2 rounded-lg border border-themeMidGray focus:outline-none focus:ring-0 focus:border-themeMain"
        />
      </div>
      {showSuggestions && (
        <div className="absolute z-[999] mt-2 w-full bg-white shadow-lg rounded-lg max-h-80 overflow-y-auto">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <SearchSuggestion
                key={index}
                image={item?.images[0]}
                title={item?.title}
                description={item?.description}
              />
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">
              No results found.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
