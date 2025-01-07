import Button from "@/components/inputs/Button";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";

const CartPage = () => {
  return (
    <div className="my-10">
      <div className="hidden md:flex justify-between items-center bg-themeBlack text-white py-4 px-6 rounded-t-lg">
        <span className="w-1/3 text-center">Product Details</span>
        <span className="w-1/6 text-center">Price</span>
        <span className="w-1/6 text-center">Quantity</span>
        <span className="w-1/6 text-center">Shipping</span>
        <span className="w-1/6 text-center">Subtotal</span>
        <span className="w-1/12 text-center">Action</span>
      </div>
      <div className="bg-white shadow-md rounded-lg">
        {[
          {
            name: "Blue Flower Print Crop Top",
            price: "$29.00",
            shipping: "FREE",
            quantity: 1,
            subtotal: "$29.00",
            image:
              "//rmkv.com/cdn/shop/files/Rmkv_13Dec1060_165x.webp?v=1735817700",
          },
          {
            name: "Lavender Hoodie",
            price: "$89.00",
            shipping: "FREE",
            quantity: 2,
            subtotal: "$178.00",
            image:
              "//rmkv.com/cdn/shop/files/Rmkv_13Dec1060_165x.webp?v=1735817700",
          },
          {
            name: "Black Sweatshirt",
            price: "$130.00",
            shipping: "$5.00",
            quantity: 1,
            subtotal: "$130.00",
            image:
              "//rmkv.com/cdn/shop/files/Rmkv_13Dec1060_165x.webp?v=1735817700",
          },
        ].map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:justify-between py-4 px-4 md:px-6 border-b border-themeMidGray">
            <div className="flex w-full md:w-1/3 mb-4 md:mb-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 rounded-lg mr-4"
              />
              <div className="flex flex-col gap-1">
                <p className="text-themeBlack font-medium">{product.name}</p>
                <p className="text-themeGray text-sm font-medium">Color: Mix</p>
                <p className="text-themeGray text-sm font-medium">Size: M</p>
              </div>
            </div>
            <div className="w-full md:w-1/6 text-center font-semibold text-themeBlack mb-2 md:mb-0">
              {product.price}
            </div>
            <div className="w-full md:w-1/6 flex items-center justify-center mb-2 md:mb-0">
              <button className="p-2 text-themeBlack bg-themeMidGray rounded">
                <FiMinus size={12} />
              </button>
              <span className="px-4">{product.quantity}</span>
              <button className="p-2 text-themeBlack bg-themeMidGray rounded">
                <FiPlus size={12} />
              </button>
            </div>
            <div className="w-full md:w-1/6 text-center text-themeBlack mb-2 md:mb-0">
              {product.shipping}
            </div>
            <div className="w-full md:w-1/6 text-center font-semibold text-themeBlack mb-2 md:mb-0">
              {product.subtotal}
            </div>
            <div className="w-full md:w-1/12 text-center text-red-600 cursor-pointer">
              <FaTrashAlt />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-end">
        <div className="bg-white p-6 border border-themeMidGray shadow-md rounded-lg w-full md:w-1/3">
          <div className="flex justify-between py-2">
            <span className="text-themeBlack">Sub Total</span>
            <span className="text-themeBlack">$513.00</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-themeBlack">Shipping</span>
            <span className="text-themeBlack">$5.00</span>
          </div>
          <div className="flex justify-between py-2 border-t border-themeMidGray">
            <span className="text-themeBlack font-bold">Grand Total</span>
            <span className="text-themeBlack font-bold">$518.00</span>
          </div>
          <Button className="w-full !h-fit mt-4">Proceed To Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
