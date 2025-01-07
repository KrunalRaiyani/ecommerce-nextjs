"use client";
import ProfileTItle from "@/components/profile/ProfileTItle";
import React, { useState } from "react";

const OrderSection = () => {
  const [activeTab, setActiveTab] = useState("active");

  const renderContent = () => {
    switch (activeTab) {
      case "active":
        return <div className="p-4">Active orders will be displayed here.</div>;
      case "complete":
        return (
          <div className="p-4">Completed orders will be displayed here.</div>
        );
      case "canceled":
        return (
          <div className="p-4">Canceled orders will be displayed here.</div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="">
      <ProfileTItle title="My Orders" className={"mb-6"} />
      <div className="flex border-b-[3px] border-themeSubGray mb-4">
        <button
          className={`px-10 py-2 font-medium border-b-2 ${
            activeTab === "active"
              ? "border-themeMain text-themeMain bg-themeSubGray rounded-t-lg"
              : "text-gray-500 hover:text-themeMain border-transparent"
          }`}
          onClick={() => setActiveTab("active")}>
          Active
        </button>
        <button
          className={`px-6 py-2 font-medium border-b-2 ${
            activeTab === "complete"
              ? "border-themeMain text-themeMain bg-themeSubGray rounded-t-lg"
              : "text-gray-500 hover:text-themeMain border-transparent"
          }`}
          onClick={() => setActiveTab("complete")}>
          Complete
        </button>
        <button
          className={`px-8 py-2 font-medium border-b-2 ${
            activeTab === "canceled"
              ? "border-themeMain text-themeMain bg-themeSubGray rounded-t-lg"
              : "text-gray-500 hover:text-themeMain border-transparent"
          }`}
          onClick={() => setActiveTab("canceled")}>
          Canceled
        </button>
      </div>
      <div className="bg-white shadow rounded-lg">{renderContent()}</div>
    </div>
  );
};

export default OrderSection;
