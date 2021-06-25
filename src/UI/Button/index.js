import React from "react";

import "./Button.scss";

const Button = ({ text, icon }) => {
  return (
    <button className="button">
      <span className="button__text">{text}</span>
      {icon && <img src={icon} alt="button icon" className="button__icon" />}
    </button>
  );
};

export default Button;
