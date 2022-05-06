import React from "react";
import "../../css/Button.css"

export default function Button({ text, type, ...rest }) {
  const getButtonClass = () => {
    switch (type) {
    case "secondary":
      return "btn secondary";
    case "outlined":
      return "btn outlined";
    default:
      return "btn primary";
    }
  };
  return (
    <button className={getButtonClass()} {...rest}>
      {text}
    </button>
  );
}
