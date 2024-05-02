import React, { useState } from "react";
import "./Priority.css";

const Priority = () => {
  const [selectedPriority, setSelectedPriority] = useState("Distance");

  const handlePriorityChange = (priority) => {
    setSelectedPriority(priority);
  };

  return (
    <div className="priority-container">
      <div className="preference-section box">
        What do you prefer?
        <div className="button-group">
          <button className={selectedPriority === "Distance" ? "sButton active" : "sButton"} onClick={() => handlePriorityChange("Distance")}>Distance</button>
          <button className={selectedPriority === "Availability" ? "sButton active" : "sButton"} onClick={() => handlePriorityChange("Availability")}>Availability</button>
          <button className={selectedPriority === "Price" ? "sButton active" : "sButton"} onClick={() => handlePriorityChange("Price")}>Price</button>
        </div>
      </div>
    </div>
  );
};

export default Priority;