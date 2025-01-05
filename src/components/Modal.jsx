import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[1001] flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => {
        onClose();
        e.stopPropagation();
      }}>
      <div
        className={`bg-white rounded-xl shadow-lg transform transition-transform ${
          isOpen ? "scale-100" : "scale-90"
        }`}>
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 h-6 w-6"
          onClick={onClose}
          aria-label="Close Modal">
          <AiOutlineClose size={20} />
        </button>
        <div className="p-6" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
