import React, { useState } from "react";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

const SideFilter = ({ isVisible, toggleVisibility }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [selectedColors, setSelectedColors] = useState([]);

  const categories = ["Saree", "Kurti", "Drases", "T-shirt", "Tops"];
  const colors = [
    "Purple",
    "Black",
    "Red",
    "Orange",
    "Navy",
    "Pink",
    "Green",
    "Yellow",
    "Grey",
    "Blue",
  ];

  const handleColorSelection = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  return (
    <div
      className={`fixed md:sticky md:top-8 inset-y-0 left-0 h-fit border border-themeMidGray bg-white shadow-lg rounded-lg transform max-w-72 ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 z-50 md:relative md:translate-x-0 md:shadow-none md:bg-transparent`}>
      <button
        onClick={toggleVisibility}
        className="block md:hidden text-red-500 font-bold mb-4">
        Close ✖
      </button>

      <div className="flex justify-between items-center font-semibold text-xl text-themeGray border-b border-themeMidGray px-6 py-4">
        <h4>Filter</h4>
        <IoFilter className="text-lg" />
      </div>

      <div className="px-6 py-4 border-b border-themeMidGray">
        <h4 className="font-semibold text-lg mb-3 text-themeBlack">
          Categories
        </h4>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <label className="flex items-center justify-between space-x-2 cursor-pointer">
                <span className="text-gray-700">{category}</span>
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={() => setSelectedCategory(category)}
                  className="form-radio text-blue-600 opacity-0"
                />

                <div
                  className={`h-[18px] w-[18px] flex items-center justify-center rounded-full border-2 ${
                    selectedCategory === category
                      ? "border-themeMain"
                      : "border-themeMidGray"
                  }`}>
                  {selectedCategory === category && (
                    <FaCheck className="text-themeMain" size={10} />
                  )}
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div className="px-6 py-5 border-b border-themeMidGray">
        <h4 className="font-semibold text-lg mb-3 text-themeBlack">
          Price Range
        </h4>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Min"
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange({ ...priceRange, min: Number(e.target.value) })
            }
            className="w-full border border-gray-300 rounded px-2 py-1 focus:border-themeMain focus:ring-0"
          />
          <input
            type="number"
            placeholder="Max"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange({ ...priceRange, max: Number(e.target.value) })
            }
            className="w-full border border-gray-300 rounded px-2 py-1 focus:border-themeMain focus:ring-0"
          />
        </div>
      </div>

      {/* Colors */}
      <div className="px-6 py-5 mb-3">
        <h4 className="font-semibold text-lg mb-3 text-themeBlack">Colors</h4>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => handleColorSelection(color)}
              className={`w-10 h-10 rounded-lg`}
              style={{ backgroundColor: color.toLowerCase() }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideFilter;
