import React from "react";

import Button from "../../UI/Button";
import Socials from "../../UI/Socials";
import Container from "../../UI/Container";

import "./Event.scss";

import eventLogoIcon from "../../assets/event/logo.png";
import previewImage from "../../assets/event/preview.png";

import lineIcon from "../../assets/button/line.svg";
import ticketsIcon from "../../assets/button/tickets.svg";

const event = {
  logo: eventLogoIcon,
  preview: previewImage,
  title: "StarSeries i-League CSGO Season 8",
  description:
    "Parimatch League CS:GO is the new online league in Counter-Strike: Global Offensive from Parimatch and StarLadder, with $100,000 total prize pool. 16 teams from Europe and the CIS will take part in the League, with 4 teams going to League through open qualifiers.",
  data: {
    place: "Берлин, Германия",
    date: {
      start: "22 Сентября",
      end: "30 Октября 2020",
    },
    prize: "$1,000,000",
  },
  socials: {},
};

const Event = () => {
  const {
    title,
    data: { place, date, prize },
    logo,
    preview,
    description,
  } = event;
  return (
    <div
      className="event"
      style={{ background: `url(${preview}) center no-repeat` }}
    >
      <Container>
        <div className="event__logo">
          <img src={logo} alt="event logo icon" className="event__logo-icon" />
        </div>
        <div className="event__title-name">{title}</div>
        <div className="event__row" style={{ width: "98%" }}>
          <div className="event__description">
            <div className="event__description-text">{description}</div>
          </div>
          <div className="event__more">
            <div className="event__more-row">
              <div className="event__more-title">Место:</div>
              <div className="event__more-info">{place}</div>
            </div>
            <div className="event__more-row">
              <div className="event__more-title">Даты:</div>
              <div className="event__more-info">{`${date.start} - ${date.end}`}</div>
            </div>
            <div className="event__more-row">
              <div className="event__more-title">Призы:</div>
              <div className="event__more-info">{prize}</div>
            </div>
          </div>
        </div>
        <div className="event__row" style={{ marginTop: "86px", width: "87%" }}>
          <div className="event__options">
            <div className="event__options-button">
              <Button text="Read Announcement" icon={lineIcon} />
            </div>
            <div className="event__options-button">
              <Button text="GET TICKETS" icon={ticketsIcon} border />
            </div>
          </div>
          <div className="event__socials">
            <Socials />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Event;
