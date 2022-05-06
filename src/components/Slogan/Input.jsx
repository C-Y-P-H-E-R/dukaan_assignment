import React from "react";
import "../../css/Input.css";
import Cross from "../../assets/home/input/cross.png";

function Input() {
  return (
    <div
      className="input-container"
    >
      <input
        type="text"
        placeholder="cozy"
      />
      <img src={Cross} alt="cancel" />
    </div>
  );
}

export default Input;
