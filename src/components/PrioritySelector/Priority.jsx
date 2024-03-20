import React from "react";
import "./Priority.css"; // Import your CSS file

const Priority = () => {
  return (
    <div className="priority-container">
      <div className="preference-section box">
        What do you prefer?
        <div className="button-group">
          <button className="sButton">Distance</button>
          <button className="sButton">Availability</button>
        </div>
      </div>
      <div className="variation-section box">
        <button className="sButton">&lt;&lt;</button>
        <span className="Text">Variation 1</span>
        <button className="sButton">&gt;&gt;</button>
      </div>
    </div>
  );
};

export default Priority;
