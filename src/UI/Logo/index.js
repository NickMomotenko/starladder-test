import React from "react";

import logoIcon from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <a href="#" className="logo__link">
        <img src={logoIcon} alt="logo icon" className="logo__icon" />
      </a>
    </div>
  );
};

export default Logo;
