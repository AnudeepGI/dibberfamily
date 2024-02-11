import React, { useState } from "react";
import "./ModalComponent.css";
import {
  Event,
  Celebration,
  Trip,
  Cross,
} from "./Icons";
import { CustomDropdown } from "./CustomDropdown";
import { TimeSelector } from "./TimeSelector";
import { Textarea } from "./Textarea";
import { DaySelector } from "./DaySelector";
import { FormInput } from "./FormInput";

function ModalComponent({ isOpen, toggleModal, activeDays, toggleDay }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("08:00");
  const [endTime, setEndTime] = useState("11:00");
  const [allDay, setAllDay] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      title,
      type,
      description,
      startTime,
      endTime,
      activeDays,
      allDay,
    };
    console.log(formData);
    toggleModal();
  };

  const handleTypeChange = (selectedOption) => {
    console.log(selectedOption.value);
    setType(selectedOption.value); // Update the type state
  };

  const options = [
    { value: "event", label: "Event", icon: <Event /> },
    { value: "celebration", label: "Celebration", icon: <Celebration /> },
    { value: "trip", label: "Trip", icon: <Trip /> },
  ];

  const handleAllDayChange = (event) => {
    setAllDay(event.target.checked);
  };

  return (
    <div className="modal-container" style={{ display: "flex" }}>
      <div className="modal-content">
        <div className="header">
          <button
            className="close-btn"
            onClick={toggleModal}
            aria-label="Close modal"
          >
            <Cross />
          </button>
          <h2>New recurring activity</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row first-row">
            <FormInput
              id="title"
              label="Title"
              placeholder="E.g. Breakfast, Playtime"
              value={title}
              setValue={setTitle}
            />
            <div className="form-column">
              <label className="form-label">Type</label>
              <CustomDropdown
                options={options}
                onSelectOption={handleTypeChange}
              />
            </div>
          </div>
          <Textarea
            id="description"
            label="Description"
            placeholder="Optional description"
            value={description}
            setValue={setDescription}
          />
          <TimeSelector
            startTime={startTime}
            setStartTime={setStartTime}
            endTime={endTime}
            setEndTime={setEndTime}
          />
          <div className="form-row reduce-top-margin">
            <label>
              <input
                type="checkbox"
                checked={allDay}
                onChange={handleAllDayChange}
              />{" "}
              All Day
            </label>{" "}
          </div>
          <label className="form-label">
            Repeat every
          </label>
          <DaySelector activeDays={activeDays} toggleDay={toggleDay} />

          <div className="btn-container">
            <button type="button" className="cancel" onClick={toggleModal}>
              Cancel
            </button>

            <button
              type="type"
              className={`add ${
                title.trim() ? "button-enabled" : "button-disabled"
              }`}
              disabled={!title.trim()}
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// function ModalComponent() {

// }

export default ModalComponent;
