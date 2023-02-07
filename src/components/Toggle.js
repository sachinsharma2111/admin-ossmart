import React from "react";
import "../assets/scss/views/_toggle.scss";

const SwitchToggle = ({ isOn, handleToggle, id, status }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={() => handleToggle(id, status)} //call handleToggle using id
        className="react-switch-checkbox"
        id={`react-switch-new${id}`} // Make it unique by adding id
        type="checkbox"
      />
      <label
        style={{ background: isOn && "#06D6A0" }}
        className="react-switch-label mx-auto"
        htmlFor={`react-switch-new${id}`} // Make it unique by adding id
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default SwitchToggle;
