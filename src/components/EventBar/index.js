import React, { useState } from "react";

import { uuid } from "uuidv4";
import classNames from "classnames";

import { useData } from "../../hooks/useData";

import Card from "../../UI/Card";
import Title from "../../UI/Title";

import "./EventBar.scss";

const options = [
  { id: uuid(), name: "Matches", status: "matches" },
  { id: uuid(), name: "Battles", status: "battles" },
];

const EventBar = () => {
  const [activeOption, setActiveOption] = useState(options[1]);

  const { mathes, battles } = useData();

  const changeActiveOption = (item) => {
    setActiveOption(item);
  };

  return (
    <div className="event-bar">
      <div className="event-bar__title">
        <Title text="Расписание и результаты" />
      </div>
      <div className="event-bar__head">
        <ul className="event-bar__list">
          {options?.map((option) => (
            <li
              key={option.id}
              className={classNames("event-bar__item", {
                "event-bar__item--active": activeOption.id === option.id,
              })}
              onClick={() => changeActiveOption(option)}
            >
              <div className="event-bar__item-title">{option.name}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="event-bar__cards">
        <ul className="event-bar__cards-list">
          {activeOption.status === "matches" ? (
            mathes?.map((match) => (
              <Card
                key={match.id}
                title={match.matchName}
                status={match.matchStatus}
                teams={match.teams}
                partners={match.partners}
                time={match.matchTime}
                systemData={match.systemOfСonducting}
                mapScore={match.gameScore}
                option={activeOption?.status}
              />
            ))
          ) : activeOption.status === "battles" ? (
            battles?.map((battle, index) => (
              <Card
                key={battle.id}
                title={battle.groupName}
                status={battle.groupStatus}
                teams={battle.groups}
                logos={battle.groupIcon}
                time={battle.groupTime}
                systemData={battle.map}
                option={activeOption?.status}
                winner={battle.winner}
                index={index}
              />
            ))
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
};

export default EventBar;
