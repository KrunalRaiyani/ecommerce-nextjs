import React from "react";

const ProfileTItle = ({ title, className }) => {
  return (
    <h4 className={`text-themeBlack text-2xl font-semibold ${className}`}>
      {title}
    </h4>
  );
};

export default ProfileTItle;
