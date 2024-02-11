import React from "react";

export const Textarea = ({ id, label, placeholder, value, setValue }) => (
  <div className="form-row">
    <label htmlFor={id} className="form-label">
      {label}
    </label>

    <input
      type="text"
      id={id}
      name={id}
      className="form-input custom-cursor"
      rows="4"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)} />
  </div>
);
