import React from "react";
import '../../src/css/EmailNotifications.css';

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="form-check-byemail">
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="email-check-input"
      />
       {""} {label} 
    </label>
  </div>
);

export default Checkbox;