import React, { useState } from "react";

import { uuid } from "uuidv4";

import classnames from "classnames";

import ggBetIcon from "../assets/partners/gg-bet.png";

import teamIcon1 from "../assets/teams/1.png";
import teamIcon2 from "../assets/teams/2.png";
import teamIcon3 from "../assets/teams/3.png";
import teamIcon4 from "../assets/teams/4.png";

import battlesGroupIcon from "../assets/groups/1.png";

const mathesData = [
  {
    id: uuid(),
    matchName: "Asia Minor: Play-Off",
    matchStatus: "live",
    teams: [
      {
        id: uuid(),
        name: "Albert Warren",
        icon: teamIcon1,
        coef: 3.22,
      },
      {
        id: uuid(),
        name: "Gloria Henry",
        icon: teamIcon2,
        coef: 53.22,
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
        name: "Regina Watson",
        icon: teamIcon3,
        coef: 3.22,
      },
      {
        id: uuid(),
        name: "Kathryn Jones",
        icon: teamIcon4,
        coef: 53.22,
      },
    ],
    systemOfСonducting: "Bo 3",
    partners: [{ id: uuid(), partnerName: "GGBET", partnerIcon: ggBetIcon }],
  },
  {
    id: uuid(),
    matchName: "Asia Minor: Play-Off",
    matchStatus: "live",
    teams: [
      {
        id: uuid(),
        name: "Albert Warren",
        icon: teamIcon1,
        coef: 3.22,
      },
      {
        id: uuid(),
        name: "Gloria Henry",
        icon: teamIcon2,
        coef: 53.22,
      },
    ],
    systemOfСonducting: "Bo 3",
    partners: [{ id: uuid(), partnerName: "GGBET", partnerIcon: ggBetIcon }],
  },
  {
    id: uuid(),
    matchName: "Asia Minor: Play-Off",
    matchStatus: "finished",
    matchTime: {
      time: "19:00",
      date: "29 октября",
    },
    teams: [
      {
        id: uuid(),
        name: "Serenity Alexander",
        icon: teamIcon3,
        coef: 3.22,
        maps: 2,
      },
      {
        id: uuid(),
        name: "Priscilla Lane",
        icon: teamIcon4,
        coef: 53.22,
        maps: 1,
      },
    ],
    gameScore: [
      {
        map: "Mirage",
        score: "1:0",
      },
      {
        map: "Dust2",
        score: "0:1",
      },
      {
        map: "Nuke",
        score: "1:0",
      },
    ],
    systemOfСonducting: "Bo 3",
    partners: [{ id: uuid(), partnerName: "GGBET", partnerIcon: ggBetIcon }],
  },
];

const battlesData = [
  {
    id: uuid(),
    groupName: "Group Stage",
    groupStatus: "live",
    groupIcon: battlesGroupIcon,
    groups: [
      {
        id: uuid(),
        name: "Group A",
      },
      {
        id: uuid(),
        name: "Group B",
      },
    ],
    map: "Erangel",
  },
  {
    id: uuid(),
    groupName: "Group Stage",
    groupStatus: "upcoming",
    groupIcon: battlesGroupIcon,
    groupTime: {
      time: "19:00",
      date: "March 8",
    },
    groups: [
      {
        id: uuid(),
        name: "Group A",
      },
      {
        id: uuid(),
        name: "Group B",
      },
    ],
    map: "Erangel",
  },
  {
    id: uuid(),
    groupName: "Group Stage",
    groupStatus: "upcoming",
    groupIcon: battlesGroupIcon,
    groupTime: {
      time: "19:00",
      date: "March 8",
    },
    groups: [
      {
        id: uuid(),
        name: "Group A",
      },
      {
        id: uuid(),
        name: "Group B",
      },
    ],
    map: "Erangel",
  },
  {
    id: uuid(),
    groupName: "Group Stage",
    groupStatus: "finished",
    groupIcon: battlesGroupIcon,
    groupTime: {
      time: "19:00",
      date: "March 8",
    },
    groups: [
      {
        id: uuid(),
        name: "Group A",
      },
      {
        id: uuid(),
        name: "Group B",
      },
    ],
    winner: {
      name: "Natus Vincere",
      group: "A",
      pts: "233",
    },
  },
];

export const useData = () => {
  const [battles, setBattles] = useState(battlesData);
  const [mathes, setMathes] = useState(mathesData);

  return { battles, mathes };
};
