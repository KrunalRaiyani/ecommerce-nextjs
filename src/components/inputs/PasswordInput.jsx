import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const PasswordInput = React.forwardRef(
  (
    {
      className = "block",
      inputClassName,
      label,
      name,
      error,
      shadow = false,
      ...rest
    },
    ref
  ) => {
    const [show, setShow] = useState(false);

    const rootClassName = `${
      inputClassName || ""
    } py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-themeBlack text-13px lg:text-sm rounded-lg placeholder-[#B3B3B3] transition duration-200 ease-in-out border-border-two focus:border-2 focus:outline-none focus:ring-0 focus:border-themeMain h-11 md:h-12`;

    return (
      <div className={className}>
        {label && (
          <label
            htmlFor={name}
            className="block mb-3 text-sm font-normal leading-none cursor-pointer text-themeBlack opacity-70">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            id={name}
            name={name}
            type={show ? "text" : "password"}
            ref={ref}
            className={rootClassName}
            autoComplete="off"
            spellCheck="false"
            {...rest}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-themeBlack text-opacity-50"
            onClick={() => setShow((prev) => !prev)}>
            {show ? (
              <IoEyeOffOutline className="w-6 h-6" />
            ) : (
              <IoEyeOutline className="w-6 h-6" />
            )}
          </button>
        </div>
        {error && (
          <p className="my-2 text-13px text-errorCol text-opacity-70">
            {error}
          </p>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
export default PasswordInput;
