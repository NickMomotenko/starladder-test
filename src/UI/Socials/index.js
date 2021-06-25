import React from "react";

import { v4 as uuid } from "uuid";

const list = [
  { id: uuid(), name: "1", icon: "", link: "" },
  { id: uuid(), name: "2", icon: "", link: "" },
  { id: uuid(), name: "3", icon: "", link: "" },
  { id: uuid(), name: "4", icon: "", link: "" },
];

const Socials = () => {
  return (
    <ul className="socials">
      {list?.map(({ id, name, link, icon }) => (
        <li key={id} className="socials__item">
          <a href={link} className="socials__link">
            <img src="" alt={`social icon ${name}`} className="socials__icon" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
