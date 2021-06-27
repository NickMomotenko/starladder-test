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
  index,
  mapScore,
  winner,
}) => {
  const [t1, t2] = teams;

  const mapScoreGenerator = (score) => {
    let str = "";

    score.forEach(({ score }, ind) => {
      if (++ind === score.length) {
        str += score;
      } else {
        str += score + " • ";
      }
    });

    return str;
  };

  return (
    <li
      className={classnames("card", {
        "card--battles": option === "battles",
        "card--matches": option === "matches",

        "card--live": status === "live",
        "card--upcoming": status === "upcoming",
        "card--finished": status === "finished",
      })}
    >
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
            {status === "finished" && (
              <div className="card__date">
                <div className="card__date-time">{time?.time}</div>
                <div className="card__date-match">{time?.date}</div>
              </div>
            )}
            {status === "live" && (
              <a href="#" className="card__live-block">
                <div className="card__live-button"></div>
                <div className="card__live-button-text">WATCH LIVE!</div>
              </a>
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
              <div
                className={classnames("card__row card__row--center", {
                  "card__row--loser": t1.maps < t2.maps,
                })}
              >
                <div className="card__team-name">{t1.name}</div>
                <div className="card__team-coef">
                  {status === "finished" ? `${t1.maps}` : `${t1.coef}`}
                </div>
              </div>
              <div
                className={classnames("card__row card__row--center", {
                  "card__row--loser": t1.maps > t2.maps,
                })}
              >
                <div className="card__team-name">{t2.name}</div>
                <div className="card__team-coef">
                  {status === "finished" ? `${t2.maps}` : `${t2.coef}`}
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
                <div className="card__team-coef card__team-coef--battle">
                  {`Match #${++index}`}
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="card__bottom">
          <div className="card__system-conduction">
            {option === "matches" && status === "upcoming" && (
              <span className="card__system-conduction-text">{`Starts in: 5 hours 39 min • ${systemData}`}</span>
            )}
            {option === "matches" && status === "live" && systemData}
            {option === "matches" &&
              status === "finished" &&
              mapScoreGenerator(mapScore)}

            {option === "battles" && status === "live" && `Map: ${systemData}`}
            {option === "battles" && status === "upcoming" && (
              <span className="card__system-conduction-text">{`Starts in: 5 hours 39 min • Map: ${systemData}`}</span>
            )}
            {option === "battles" &&
              status === "finished" &&
              `${winner?.name} (${winner?.group}) - ${winner?.pts}pts`}
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
