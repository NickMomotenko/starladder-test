import classNames from "classnames";
import React from "react";

import "./Container.scss";

const Container = ({ children, main }) => {
  return (
    <div
      className={classNames("container", {
        "container--main": main,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
