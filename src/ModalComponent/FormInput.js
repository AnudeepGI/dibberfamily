import React from "react";

export const FormInput = ({
  id, label, placeholder, maxLength = 20, value, setValue,
}) => {
  const handleChange = (event) => {
    if (event.target.value.length <= maxLength) {
      setValue(event.target.value);
    }
  };

  return (
    <div className="form-column">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        className="form-input custom-cursor"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        maxLength={maxLength} />
      {value && (
        <label className="form-label-below">
          {maxLength - value.length} character
          {maxLength - value.length === 1 ? "" : "s"} remaining
        </label>
      )}
    </div>
  );
};
