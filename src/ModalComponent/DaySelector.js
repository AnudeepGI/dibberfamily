import React from "react";

export const DaySelector = ({ activeDays, toggleDay }) => {
  const days = [
    { id: "M", label: "M" },
    { id: "T1", label: "T" },
    { id: "W", label: "W" },
    { id: "T2", label: "T" },
    { id: "F", label: "F" },
  ];

  return (
    <div className="days-container">
      {days.map((day) => (
        <div
          key={day.id}
          className={`day-circle ${activeDays.includes(day.id) ? "active" : ""}`}
          onClick={() => toggleDay(day.id)}
        >
          {day.label}
        </div>
      ))}
    </div>
  );
};
