import Button from "@/components/inputs/Button";
import ProfileTItle from "@/components/profile/ProfileTItle";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <ProfileTItle title="Wishlist" className={"mb-6"} />
      <div className="grid gap-4">
        {[
          {
            title: "Blue Flower Print Crop Top",
            color: "Yellow",
            quantity: 1,
            price: 29,
          },
          {
            title: "Yellow Flower Print Dress",
            color: "Yellow",
            quantity: 1,
            price: 78,
          },
          {
            title: "White Hoodie long sleeve",
            color: "White",
            quantity: 1,
            price: 134,
          },
          {
            title: "Brown men's long sleeve T-shirt",
            color: "Brown",
            quantity: 1,
            price: 93,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-between p-4 py-6 border-b-2 border-themeSubGray">
            <div className="flex gap-4">
              <img
                src={`//rmkv.com/cdn/shop/files/Rmkv_13Dec1060_165x.webp?v=1735817700`}
                alt={item.title}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-themeBlack">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 font-semibold">
                  <span className="text-themeBlack">Color:</span> {item.color}
                </p>
                <p className="text-sm text-gray-500 font-semibold">
                  <span className="text-themeBlack">Quantity:</span>
                  {item.quantity}
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <p className="text-lg font-bold text-themeGray mr-2">
                ${item.price}.00
              </p>
              <Button className="bg-themeMain text-white !py-3 !px-6 rounded-lg">
                Add to cart
              </Button>
              <button className="cursor-pointer text-red-600">
                <FaTrashAlt size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
