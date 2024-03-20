import React from "react";
import "./Priority.css"; // Import your CSS file

const Priority = () => {
  return (
    <div className="priority-container">
      <div className="preference-section box">
        What do you prefer?
        <div className="button-group">
          <button>Distance</button>
          <button>Availability</button>
        </div>
      </div>
      <div className="variation-section box">
        <button>&lt;&lt;</button>
        <span>Variation 1</span>
        <button>&gt;&gt;</button>
      </div>
    </div>
  );
};

export default Priority;
