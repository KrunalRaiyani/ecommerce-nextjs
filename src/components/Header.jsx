"use client";
import React from "react";
import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Wrapper from "./Wrapper";
import Search from "./Search";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { openLoginModal } from "@/Redux/slice/modals/login-popup";

const Header = ({ showSubHeader }) => {
  const dispatch = useDispatch();

  const handleLoginPopup = () => {
    dispatch(openLoginModal());
  };

  return (
    <div className="relative">
      <header className="bg-white border-b border-themeMidGray">
        <Wrapper className="flex justify-between items-center py-3 gap-8">
          <div className="text-2xl font-bold">
            <Link href="/">Euphoria</Link>
          </div>

          {/* Search Component */}
          <Search />

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg bg-themeSubGray text-themeGray hover:bg-themeMain hover:text-white transition-colors duration-200 ease-in-out">
              <AiOutlineHeart size={20} />
            </button>
            <button
              className="p-2 rounded-lg bg-themeSubGray text-themeGray hover:bg-themeMain hover:text-white transition-colors duration-200 ease-in-out"
              onClick={handleLoginPopup}>
              <AiOutlineUser size={20} />
            </button>
            <button className="p-2 rounded-lg bg-themeSubGray text-themeGray hover:bg-themeMain hover:text-white transition-colors duration-200 ease-in-out">
              <AiOutlineShoppingCart size={20} />
            </button>
          </div>
        </Wrapper>
      </header>

      {showSubHeader && (
        <div className="border-b border-themeMidGray py-4">
          <Wrapper className="flex space-x-6">
            <a
              href="#shop"
              className="text-themeBlack hover:text-themeMain font-medium">
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
      )}
    </div>
  );
};

export default Header;
