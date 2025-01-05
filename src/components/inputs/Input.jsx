import React from "react";

const classes = {
  root: "py-2 px-4 w-full appearance-none transition duration-150 ease-in-out border text-input text-13px lg:text-sm font-body rounded-lg placeholder-[#B3B3B3] min-h-12 transition duration-200 ease-in-out text-brand-dark focus:ring-0",
  normal:
    "bg-gray-100 border-themeMain focus:shadow focus:text-brand-light focus:border-themeMain",
  solid:
    "text-brand-dark border-border-two focus:border-2 focus:outline-none focus:border-themeMain h-11 md:h-12",
  outline: "border-gray-300 focus:border-themeMain",
  shadow: "focus:shadow",
};

const Input = React.forwardRef(
  (
    {
      className = "block",
      label,
      name,
      error,
      placeholder,
      variant = "normal",
      shadow = false,
      type = "text",
      inputClassName,
      labelClassName,
      ...rest
    },
    ref
  ) => {
    const rootClassName = `${classes.root} ${
      variant === "normal"
        ? classes.normal
        : variant === "solid"
        ? classes.solid
        : classes.outline
    } ${shadow ? classes.shadow : ""} ${inputClassName || ""}`;

    return (
      <div className={className}>
        {label && (
          <label
            htmlFor={name}
            className={`block font-normal text-sm leading-none mb-3 cursor-pointer ${
              labelClassName || "text-themeBlack text-opacity-70"
            }`}>
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          ref={ref}
          placeholder={placeholder || ""}
          className={rootClassName}
          autoComplete="off"
          spellCheck="false"
          aria-invalid={error ? "true" : "false"}
          {...rest}
        />
        {error && (
          <p className="my-2 text-13px text-errorCol text-opacity-70">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
