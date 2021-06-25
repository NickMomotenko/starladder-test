import React from "react";

const Button = ({ text, icon }) => {
  return (
    <button className="button">
      <span className="button__text">{text}</span>
      {icon && <img src="" alt="button icon" className="button__icon" />}
    </button>
  );
};

export default Button;
