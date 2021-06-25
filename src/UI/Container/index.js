import React from "react";

import "./Container.module.scss";

const Container = ({ children }) => {
  return <div className={container}>{children}</div>;
};

export default Container;
