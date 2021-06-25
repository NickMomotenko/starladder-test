import React from "react";

import { v4 as uuid } from "uuid";

import Header from "./UI/Header";
import Container from "./UI/Container";
import Card from "./UI/Card";
import Title from "./UI/Title";

import Event from "./components/Event";
import EventStages from "./components/EventStages";
import EventBar from "./components/EventBar";

import ggBetIcon from "./assets/partners/gg-bet.png";

import teamIcon1 from "./assets/teams/1.png";
import teamIcon2 from "./assets/teams/2.png";

const mathes = [
  {
    id: uuid(),
    matchName: "Asia Minor: Play-Off",
    matchStatus: "live",
    teams: [
      {
        id: uuid(),
        teamName: "teamName 1",
        teamIcon: teamIcon1,
        teamСoefficient: 3.22,
      },
      {
        id: uuid(),
        teamName: "teamName 2",
        teamIcon: teamIcon2,
        teamСoefficient: 53.22,
      },
    ],
    systemOfСonducting: "Bo 3",
    partners: [{ id: uuid(), partnerName: "GGBET", partnerIcon: ggBetIcon }],
  },
  {
    id: uuid(),
    matchName: "Asia Minor: Play-Off",
    matchStatus: "upcoming",
    matchTime: {
      time: "19:00",
      date: "29 октября",
    },
    teams: [
      {
        id: uuid(),
        teamName: "teamName 1",
        teamIcon: teamIcon1,
        teamСoefficient: 3.22,
      },
      {
        id: uuid(),
        teamName: "teamName 2",
        teamIcon: teamIcon2,
        teamСoefficient: 53.22,
      },
    ],
    systemOfСonducting: "Bo 3",
    partners: [{ id: uuid(), partnerName: "GGBET", partnerIcon: ggBetIcon }],
  },
];

const App = () => {
  return (
    <div className="app">
      <Header />
      <Event />
      <Container>
        <Title text="Расписание и результаты" />
        <EventBar />
        <ul className="list" style={{ display: "flex" }}>
          {mathes?.map((match) => (
            <Card key={match.id} {...match} />
          ))}
        </ul>
        <EventStages />
      </Container>
    </div>
  );
};

export default App;
