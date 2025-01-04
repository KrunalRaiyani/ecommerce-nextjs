import React from "react";
import {
  FaCreditCard,
  FaShieldAlt,
  FaShippingFast,
  FaUndoAlt,
} from "react-icons/fa";
import FeatureCard from "./FeatureCard";

const ServicesSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-6">
      <FeatureCard
        icon={<FaShippingFast className="text-2xl text-black" />}
        title="Free Shipping"
        description="Free shipping on all orders."
        bgColor="bg-[#FDEFE6]"
      />
      <FeatureCard
        icon={<FaCreditCard className="text-2xl text-black" />}
        title="Safe Payment"
        description="Payments are processed securely."
        bgColor="bg-[#CEEBE9]"
      />
      <FeatureCard
        icon={<FaShieldAlt className="text-2xl text-black" />}
        title="Secure Payment"
        description="Your transactions are safe with us."
        bgColor="bg-[#E2F2B2]"
      />
      <FeatureCard
        icon={<FaUndoAlt className="text-2xl text-black" />}
        title="Back Guarantee"
        description="Satisfaction guaranteed or money back."
        bgColor="bg-[#D6E5FB]"
      />
    </div>
  );
};

export default ServicesSection;
