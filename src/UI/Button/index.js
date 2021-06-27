import classNames from "classnames";
import React from "react";

import "./Button.scss";

const Button = ({ text, icon, border }) => {
  return (
    <button
      className={classNames("button", {
        "button--border": border,
      })}
    >
      <span className="button__text">{text}</span>
      {icon && <img src={icon} alt="button icon" className="button__icon" />}
    </button>
  );
};

export default Button;
