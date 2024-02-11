import ModalComponent from './ModalComponent/ModalComponent';
import React, { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDays, setActiveDays] = useState([]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleDay = (day) =>
    setActiveDays((currentDays) =>
      currentDays.includes(day)
        ? currentDays.filter((d) => d !== day)
        : [...currentDays, day]
    );

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      <ModalComponent
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        activeDays={activeDays}
        toggleDay={toggleDay}
      />
    </div>
  );
}

export default App;
