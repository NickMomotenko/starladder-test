import React from "react";

import Title from "../../UI/Title";
import EventStagesTable from "../EventStagesTable";
import EventStagesBoard from "../EventStagesBoard";

import "./EventStages.scss";

const EventStages = () => {
  const registrationCounter = 24;

  return (
    <div className="event-stages">
      <div className="event-stages__title">
        <Title text="Этапы проведения" />
      </div>
      <div className="event-stages__description">
        <p className="event-stages__description-text">
          The path to every Major begins with the open qualifiers for the
          regional Minor Championships, spanning Europe, CIS, Americas, and
          Asia. Here is the schedule of every qualifying stage of StarLadder
          Major.
        </p>
      </div>
      <div className="event-stages__reg-title">{`Зарегестрировано: ${registrationCounter}`}</div>
      <div className="event-stages__row">
        <EventStagesTable />
        <EventStagesBoard />
      </div>
    </div>
  );
};

export default EventStages;
