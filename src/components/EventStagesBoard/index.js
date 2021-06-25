import React from "react";

import { uuid } from "uuidv4";

import "./EventStagesBoard.scss";

const teams = [
  { id: uuid(), tableIndex: 1, teamName: "Natus Vincere", country: "Ukraine" },
];

const EventStagesBoard = () => {
  return <div className="event-stages-board"></div>;
};

export default EventStagesBoard;
