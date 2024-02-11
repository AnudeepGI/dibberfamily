import React, { useState } from "react";
import {
  DropdownIcon,
  CheckMark
} from "./Icons";

export const CustomDropdown = ({ options, onSelectOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option) => {
    setSelectedOption(option); // Update local selected option
    setIsOpen(false);
    onSelectOption(option); // Inform parent component of the selection
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>
          {selectedOption ? selectedOption.label : "Select"}
        </span>
        <span className="arrow">
          {isOpen ? (
            <DropdownIcon />
          ) : (
            <div className="rotate-svg">
              <DropdownIcon />
            </div>
          )}
        </span>
      </div>
      {isOpen && (
        <div className="dropdown-list-container">
          {options.map((option) => (
            <div
              key={option.value}
              className={`dropdown-item ${selectedOption && selectedOption.value === option.value
                  ? "selected"
                  : ""}`}
              onClick={() => selectOption(option)}
            >
              <span className="icon">{option.icon}</span>
              <span className="label-option">{option.label}</span>
              {selectedOption && selectedOption.value === option.value && (
                <span className="checkbox">
                  <CheckMark />
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
