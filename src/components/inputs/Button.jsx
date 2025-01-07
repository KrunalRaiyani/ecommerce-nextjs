import React, { forwardRef } from "react";
import { ImSpinner2 } from "react-icons/im";

const Button = forwardRef((props, ref) => {
  const {
    className,
    variant = "primary",
    children,
    active,
    loading = false,
    disabled = false,
    ...rest
  } = props;

  const rootClassName = `
    group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded-lg placeholder-white focus-visible:outline-none focus:outline-none
    ${
      variant === "primary"
        ? "bg-themeMain text-themeSubGray tracking-widest px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90"
        : ""
    }
    ${
      variant === "border"
        ? "bg-themeSubGray text-themeMain border border-themeMain tracking-widest px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4"
        : ""
    }
    ${
      variant === "formButton"
        ? "h-11 md:h-[50px] bg-themeMain text-themeSubGray px-5 lg:px-6 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 focus:bg-opacity-70"
        : ""
    }
    ${variant === "link" ? "text-themeMain" : ""}
    ${
      disabled
        ? "cursor-not-allowed hover:cursor-not-allowed bg-opacity-50 hover:bg-opacity-50"
        : ""
    }
    ${className}
  `;

  return (
    <button
      aria-pressed={active}
      data-variant={variant}
      ref={ref}
      className={rootClassName}
      disabled={disabled}
      {...rest}>
      {children}
      {loading && (
        <ImSpinner2 className="animate-spin ltr:-mr-1 rtl:-ml-1 ltr:ml-3 rtl:mr-3" />
      )}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
