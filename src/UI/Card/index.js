import React from "react";

import classnames from "classnames";

import "./Card.scss";

import redStarIcon from "../../assets/logo-star.png";
import starIcon from "../../assets/logo-star-s.png";

const Card = ({
  matchName,
  matchStatus,
  matchTime,
  teams,
  systemOfСonducting,
  partners,
}) => {
  return (
    <div
      className={classnames("card", { "card--live": matchStatus === "live" })}
    >
      <div className="card__content">
        <div className="card__head">
          <div className="card__row">
            <div className="card__head-title">{matchName}</div>
            {matchStatus === "upcoming" && (
              <div className="card__date">
                <div className="card__date-time">{matchTime.time}</div>
                <div className="card__date-match">{matchTime.date}</div>
              </div>
            )}
            {matchStatus === "live" && (
              <div className="card__live-block">
                <button className="card__live-button"></button>
                <div className="card__live-button-text">WATCH LIVE!</div>
              </div>
            )}
          </div>
        </div>
        <div className="card__team-logos">
          <div className="card__row">
            {teams?.map((team) => (
              <img
                key={team.id}
                src={team.teamIcon}
                className="card__team-icon"
              ></img>
            ))}
          </div>
        </div>
        <div className="card__team-coefs">
          <div className="card__row card__row--center">
            <div className="card__team-name">Albert Warren</div>
            <div className="card__team-coef">3.22</div>
          </div>
          <div className="card__row card__row--center">
            <div className="card__team-name">Gloria Henry</div>
            <div className="card__team-coef card__team-coef--correct">
              53.22
            </div>
          </div>
        </div>
        <div className="card__bottom">
          <div className="card__system-conduction">{systemOfСonducting}</div>
          <div className="card__partners">
            {partners?.map((partner) => (
              <div key={partner.id} className="card__partner">
                <img
                  src={partner.partnerIcon}
                  alt="partner icon"
                  className="card__partner-icon"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
