import React from "react";

const variantClasses = {
  normal:
    "bg-white border border-border-two focus:shadow focus:outline-none focus:border-heading",
  solid:
    "border border-border-two focus:bg-white focus:border-2 focus:border-brand",
  outline: "border border-gray-300 focus:border-primary",
};

const TextArea = React.forwardRef((props, ref) => {
  const {
    className,
    label,
    name,
    placeholder,
    error,
    variant = "normal",
    shadow = false,
    inputClassName,
    labelClassName,
    ...rest
  } = props;

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={name}
          className={`block ${
            labelClassName || "text-brand-dark opacity-70"
          } font-normal text-13px lg:text-sm leading-none mb-3 cursor-pointer`}>
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        className={`px-4 py-3 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-themeBlack text-13px lg:text-sm focus:outline-none focus:ring-0 placeholder-themeGray${
          shadow && "focus:shadow"
        } ${variantClasses[variant]} ${inputClassName}`}
        autoComplete="off"
        spellCheck="false"
        rows={4}
        ref={ref}
        placeholder={placeholder}
        {...rest}
      />
      {error && (
        <p className="my-2 text-13px text-errorCol text-opacity-70">{error}</p>
      )}
    </div>
  );
});

TextArea.displayName = "TextArea";

export default TextArea;
