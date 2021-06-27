import React from "react";

import { uuid } from "uuidv4";

import "./EventStagesBoard.scss";

import timeIcon from "../../assets/icons/time-end-date.png";
import toolsIcon from "../../assets/icons/tools.png";
import trophyIcon from "../../assets/icons/trophy.png";
import classNames from "classnames";

const options = [
  { id: uuid(), title: "Support" },
  { id: uuid(), title: "Rules" },
  { id: uuid(), title: "FAQ" },
];

const team = {
  name: "Natus Vincere",
  positionNumber: 353,
};

const steps = [
  {
    id: 1,
    title: "Registration",
    icon: trophyIcon,
    date: {
      from: "29 sep, 19:00",
      to: "20 nov, 10:00",
    },
  },
  {
    id: 2,
    title: "Check-in",
    icon: toolsIcon,
    date: {
      from: "29 sep, 19:00",
      to: "20 nov, 10:00",
    },
  },
  {
    id: 3,
    title: "Scheduling:",
    icon: timeIcon,
    date: {
      from: "29 sep, 19:00",
      to: "20 nov, 10:00",
    },
  },
];

const EventStagesBoard = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="event-stages-board">
      <div className="event-stages-board__steps">
        <ul className="event-stages-board__steps-list">
          {steps?.map(({ id, title, icon, date }, index) => (
            <li
              key={id}
              className={classNames("event-stages-board__steps-item", {
                "event-stages-board__steps-item--active": index === activeStep,
              })}
            >
              <div className="event-stages-board__steps-icon">
                <div className="event-stages-board__steps-icon-inner">
                  <img
                    src={icon}
                    alt={`step-${title}`}
                    className="event-stages-board__steps-icon-img"
                  />
                </div>
              </div>
              <div className="event-stages-board__steps-info">
                <div className="event-stages-board__steps-info-title">
                  {title}
                </div>
                <div className="event-stages-board__steps-info-date">{`${date.from} -- ${date.to}`}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="event-stages-board__registration">
        <button className="event-stages-board__registration-button">
          <div className="event-stages-board__registration-button-block">
            <div className="event-stages-board__registration-button-label event-stages-board__registration-button-label--bold">
              Вы зарегистрированы
            </div>
            <div className="event-stages-board__registration-button-label">{`Team ${team.name} (#${team.positionNumber})`}</div>
          </div>
        </button>
      </div>
      <ul className="event-stages-board__options">
        {options?.map(({ id, title }) => (
          <li key={id} className="event-stages-board__options-item">
            <a href="#" className="event-stages-board__options-link">
              <span className="event-stages-board__options-title">{title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventStagesBoard;
