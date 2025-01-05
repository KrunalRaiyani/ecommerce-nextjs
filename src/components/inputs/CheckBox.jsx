import React from "react";

export const CheckBox = React.forwardRef(({ label, ...rest }, ref) => {
  return (
    <label className="group flex items-center justify-between text-brand-dark text-sm md:text-15px cursor-pointer transition-all hover:text-opacity-80 border-b border-border-base py-3.5 last:border-b-0 last:pb-0 first:pt-0">
      <span className="ltr:mr-3.5 rtl:ml-3.5 -mt-0.5">{label || ""}</span>
      <input
        type="checkbox"
        className="form-checkbox text-themeMain w-[22px] h-[22px] border-2 border-border-four rounded-full cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-themeMain focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-themeMain hover:checked:bg-themeMain"
        ref={ref}
        {...rest}
      />
    </label>
  );
});

CheckBox.displayName = "CheckBox";
