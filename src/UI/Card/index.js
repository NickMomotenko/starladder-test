import React from "react";

import classnames from "classnames";

import "./Card.scss";

const Card = ({
  title,
  status,
  teams,
  logos,
  partners,
  time,
  systemData,
  option,
  index
}) => {
  const [t1, t2] = teams;

  return (
    <li className={classnames("card", { "card--live": status === "live" , "card--battles" : option === 'battles' })}>
      <div className="card__content">
        <div className="card__head">
          <div className="card__row">
            <div className="card__head-title">{title}</div>
            {status === "upcoming" && (
              <div className="card__date">
                <div className="card__date-time">{time?.time}</div>
                <div className="card__date-match">{time?.date}</div>
              </div>
            )}
            {status === "live" && (
              <div className="card__live-block">
                <button className="card__live-button"></button>
                <div className="card__live-button-text">WATCH LIVE!</div>
              </div>
            )}
          </div>
        </div>
        <div className="card__team-logos">
          <div className="card__row">
            {option === "matches" &&
              teams?.map((team) => (
                <img
                  key={team.id}
                  src={team.icon}
                  className="card__team-icon"
                />
              ))}
            {option === "battles" && (
              <img src={logos} className="card__team-icon" />
            )}
          </div>
        </div>
        <div className="card__team-coefs">
          {option === "matches" ? (
            <>
              <div className="card__row card__row--center">
                <div className="card__team-name">{t1.name}</div>
                <div className="card__team-coef">{t1.coef}</div>
              </div>
              <div className="card__row card__row--center">
                <div className="card__team-name">{t2.name}</div>
                <div className="card__team-coef card__team-coef--correct">
                  {t2.coef}
                </div>
              </div>
            </>
          ) : option === "battles" ? (
            <div className="card__row card__row--center">
              <div className="card__row card__row--column">
                <div className="card__team-name">{t1.name}</div>
                <div className="card__team-name">{t2.name}</div>
              </div>
              <div className="card__row">
                <div className="card__team-coef card__team-coef--battle">{`Match #${++index}`}</div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="card__bottom">
          <div className="card__system-conduction">
            {status === "upcoming" && (
              <span className="card__system-conduction-text">{`Starts in: 5 hours 39 min `}</span>
            )}
            {option === "battles" && "Map: "}
            {systemData}
          </div>
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
    </li>
  );
};

export default Card;
