import classNames from "classnames";
import React, { useState } from "react";
import { uuid } from "uuidv4";

import "./EventBar.scss";

const options = [
  { id: uuid(), name: "Matches" },
  { id: uuid(), name: "Battles" },
];

const EventBar = () => {
  const [activeOption, setActiveOption] = useState(options[0]);

  const changeActiveOption = (id) => {
    setActiveOption(options.find((item) => item.id === id));
  };

  return (
    <div className="event-bar">
      <ul className="event-bar__list">
        {options?.map(({ id, name }) => (
          <li
            key={id}
            className={classNames("event-bar__item", {
              "event-bar__item--active": activeOption.id === id,
            })}
            onClick={() => changeActiveOption(id)}
          >
            <div className="event-bar__title">{name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventBar;
