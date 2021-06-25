import React from "react";

import { v4 as uuid } from "uuid";

import "./Socials.scss";

import fbIcon from "../../assets/socials/fb.png";
import twIcon from "../../assets/socials/tw.png";
import twitterIcon from "../../assets/socials/twitter.png";
import vkIcon from "../../assets/socials/vk.png";

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
