import React from "react";
import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Wrapper from "./Wrapper";

const Header = () => {
  return (
    <div className="relative">
      <header className="bg-white border-b border-themeMidGray">
        <Wrapper className="flex justify-between items-center py-3 gap-8">
          <div className="text-2xl font-bold">
            <a href="/">Euphoria</a>
          </div>

          <div className="relative w-full md:max-w-lg group">
            <div className="fixed inset-0 bg-black opacity-0 transition-opacity duration-500 pointer-events-none group-focus-within:opacity-25 group-focus-within:pointer-events-auto z-10"></div>

            <div className="relative z-20">
              <FiSearch
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search"
                className="w-full px-10 py-2 rounded-lg border border-themeMidGray focus:outline-none focus:ring-0 focus:border-themeMain"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg bg-themeSubGray text-themeGray">
              <AiOutlineHeart size={20} />
            </button>
            <button className="p-2 rounded-lg bg-themeSubGray text-themeGray">
              <AiOutlineUser size={20} />
            </button>
            <button className="p-2 rounded-lg bg-themeSubGray text-themeGray">
              <AiOutlineShoppingCart size={20} />
            </button>
          </div>
        </Wrapper>
      </header>

      <div className="border-b border-themeMidGray py-3">
        <Wrapper className="flex space-x-6">
          <a
            href="#shop"
            className="text-themeBlack hover:text-themeMain  font-medium">
            Shop
          </a>
          <a
            href="#men"
            className="text-themeGray hover:text-themeMain font-medium">
            Men
          </a>
          <a
            href="#women"
            className="text-themeGray hover:text-themeMain font-medium">
            Women
          </a>
          <a
            href="#combos"
            className="text-themeGray hover:text-themeMain font-medium">
            Combos
          </a>
          <a
            href="#joggers"
            className="text-themeGray hover:text-themeMain font-medium">
            Joggers
          </a>
        </Wrapper>
      </div>
    </div>
  );
};

export default Header;
