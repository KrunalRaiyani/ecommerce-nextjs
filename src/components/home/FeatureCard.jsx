import React from "react";

const FeatureCard = ({ icon, title, description, bgColor }) => {
  return (
    <div
      className={`flex flex-col items-center p-6 ${bgColor} rounded-lg shadow-lg w-full`}>
      <div className="bg-white p-2 rounded-full mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-center text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
