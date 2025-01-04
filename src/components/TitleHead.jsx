import React from "react";

const TitleHead = ({ title, className }) => {
  return (
    <div className={`${className} flex items-center`}>
      <div className="w-1.5 h-6 min-h-full rounded-md bg-themeMain mr-3"></div>
      <h4 className="text-themeBlack text-2xl font-semibold">{title}</h4>
    </div>
  );
};

export default TitleHead;
