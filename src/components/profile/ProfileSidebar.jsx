"use client";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagCheckOutline, IoLogOutOutline } from "react-icons/io5";
import TitleHead from "../TitleHead";
import { usePathname } from "next/navigation";

export default function ProfileSidebar() {
  const path = usePathname();

  const tabs = [
    {
      name: "My orders",
      href: "/profile/orders",
      icon: <IoBagCheckOutline size={21} />,
    },
    {
      name: "Wishlist",
      href: "/profile/wishlist",
      icon: <IoMdHeartEmpty size={21} />,
    },
    {
      name: "My info",
      href: "/profile/account-details",
      icon: <AiOutlineUser size={21} />,
    },
    {
      name: "Sign out",
      href: "/",
      icon: <IoLogOutOutline size={23} />,
    },
  ];

  return (
    <div className="w-[350px]">
      <div className="ps-6">
        <TitleHead title="Hello Jhanvi" />
        <p className="mt-3 mb-6 text-xs text-themeGray font-semibold">
          Welcome to your Account
        </p>
      </div>
      <nav className="space-y-2">
        {tabs.map((tab) =>
          tab.name !== "Sign out" ? (
            <Link
              key={tab.name}
              href={tab.href}
              className={`flex items-center gap-3 px-6 py-2.5 font-semibold rounded-r-lg text-themeGray hover:text-themeBlack hover:bg-themeSubGray border-l-2 border-transparent hover:border-themeBlack transition-all duration-300 ease-in-out
              ${
                path.includes(tab.href)
                  ? "!text-themeBlack !border-themeBlack !bg-themeSubGray"
                  : ""
              }
              `}>
              <span className="text-lg">{tab.icon}</span>
              {tab.name}
            </Link>
          ) : (
            <button
              key={tab.name}
              onClick={() => alert(tab.name)}
              className="w-full flex items-center gap-3 px-6 py-2.5 font-semibold rounded-r-lg text-themeGray hover:text-themeBlack hover:bg-themeSubGray border-l-2 border-transparent hover:border-themeBlack transition-all duration-300 ease-in-out">
              <span className="text-lg">{tab.icon}</span>
              {tab.name}
            </button>
          )
        )}
      </nav>
    </div>
  );
}
