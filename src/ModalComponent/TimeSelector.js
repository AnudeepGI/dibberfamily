import React from "react";
import { CustomDropdown } from "./CustomDropdown";

export const TimeSelector = ({ startTime, setStartTime, endTime, setEndTime }) => {
  const startTimeOptions = [
    { value: "08:00", label: "08:00" },
    { value: "09:00", label: "09:00" },
  ];

  const endTimeOptions = [
    { value: "11:00", label: "11:00" },
    { value: "12:00", label: "12:00" },
  ];

  const handleStartTimeChange = (option) => {
    setStartTime(option.value);
  };

  const handleEndTimeChange = (option) => {
    setEndTime(option.value);
  };

  return (
    <div className="form-row custom-start-end">
      <label htmlFor="startTime" className="form-label">
        Time
      </label>
      <div className="form-column">
        <CustomDropdown
          options={startTimeOptions}
          selectedOption={startTimeOptions.find(
            (option) => option.value === startTime
          )}
          onSelectOption={handleStartTimeChange} />
      </div>
      <div className="form-column-xsm">to</div>
      <div className="form-column">
        <CustomDropdown
          options={endTimeOptions}
          selectedOption={endTimeOptions.find(
            (option) => option.value === endTime
          )}
          onSelectOption={handleEndTimeChange} />
      </div>
    </div>
  );
};
