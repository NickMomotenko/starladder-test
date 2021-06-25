import React from "react";

import { uuid } from "uuidv4";

import "./EventStagesTable.scss";

import urkFlagIcon from "../../assets/icons/ukr.png";

const teams = [
  { id: uuid(), tableIndex: 1, teamName: "Natus Vincere", country: "Ukraine" },
  { id: uuid(), tableIndex: 2, teamName: "Natus Vincere", country: "Ukraine" },
  { id: uuid(), tableIndex: 3, teamName: "Natus Vincere", country: "Ukraine" },
  { id: uuid(), tableIndex: 4, teamName: "Natus Vincere", country: "Ukraine" },
  { id: uuid(), tableIndex: 5, teamName: "Natus Vincere", country: "Ukraine" },
  { id: uuid(), tableIndex: 6, teamName: "Natus Vincere", country: "Ukraine" },
  { id: uuid(), tableIndex: 7, teamName: "Natus Vincere", country: "Ukraine" },
  { id: uuid(), tableIndex: 8, teamName: "Dianne Russell", country: "Ukraine" },
];

const EventStagesTable = () => {
  return (
    <div className="event-stages-table">
      <ul className="event-stages-table__list">
        {teams?.map(({ id, tableIndex, teamName }) => (
          <li key={id} className="event-stages-table__item">
            <div key={id} className="event-stages-table__index">
              {tableIndex}
            </div>
            <div className="event-stages-table__team">
              <img
                src={urkFlagIcon}
                className="event-stages-table__team-flag"
                alt="team flag"
              />
              <span className="event-stages-table__team-name">{teamName}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventStagesTable;
