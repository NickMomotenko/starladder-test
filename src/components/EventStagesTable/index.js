import React from "react";

import { uuid } from "uuidv4";

import "./EventStagesTable.scss";

import urkFlagIcon from "../../assets/icons/flag.svg";

const teams = [
  {
    id: uuid(),
    tableIndex: 353,
    teamName: "Dianne Russell",
    country: "Ukraine",
  },
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
      <div className="event-stages-table__item event-stages-table__item--head">
        <div className="event-stages-table__index">#</div>
        <div className="event-stages-table__team">
          <span className="event-stages-table__team-name">Команда</span>
        </div>
      </div>
      <ul className="event-stages-table__list">
        {teams?.map(({ id, tableIndex, teamName }) => (
          <li key={id} className="event-stages-table__item">
            <a href="#" className="event-stages-table__link">
              <div key={id} className="event-stages-table__index">
                {tableIndex}
              </div>
              <div className="event-stages-table__team">
                <img
                  src={urkFlagIcon}
                  className="event-stages-table__team-flag"
                  alt="team flag"
                />
                <span className="event-stages-table__team-name">
                  {teamName}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventStagesTable;
