import React from "react";

const OtpInput = ({ value, onChange, error }) => {
  const handleInputChange = (e, index) => {
    const newValue = [...value];
    newValue[index] = e.target.value.replace(/\D/g, "");
    onChange(newValue.join(""));

    if (e.target.value && index < 3) {
      e.target.nextSibling?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      const newValue = [...value];
      newValue[index - 1] = "";
      onChange(newValue.join(""));
      e.target.previousSibling?.focus();
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData
      .getData("Text")
      .slice(0, 4)
      .replace(/\D/g, "");
    const newValue = Array(4).fill("");
    [...pasteData].forEach((digit, i) => {
      if (i < 4) newValue[i] = digit;
    });
    onChange(newValue.join(""));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-2">
        {[...Array(4)].map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className={`w-12 h-12 text-center border rounded-md ${
              error ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-themeMain`}
            value={value[index] || ""}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={index === 0 ? handlePaste : undefined}
          />
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default OtpInput;
