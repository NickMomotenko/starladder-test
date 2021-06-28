import React from "react";

import { v4 as uuid } from "uuid";

import "./Socials.scss";

import fbIcon from "../../assets/socials/fb.svg";
import twIcon from "../../assets/socials/twitch.svg";
import twitterIcon from "../../assets/socials/tw.svg";
import vkIcon from "../../assets/socials/vk.svg";

const list = [
  { id: uuid(), name: "twitter", icon: twitterIcon, link: "" },
  { id: uuid(), name: "twitch", icon: twIcon, link: "" },
  { id: uuid(), name: "facebook", icon: fbIcon, link: "" },
  { id: uuid(), name: "vk", icon: vkIcon, link: "" },
];

const Socials = () => {
  return (
    <ul className="socials">
      {list?.map(({ id, name, link, icon }) => (
        <li key={id} className="socials__item">
          <a href={link} className="socials__link">
            <img
              src={icon}
              alt={`social icon ${name}`}
              className="socials__icon"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
