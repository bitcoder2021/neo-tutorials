import React from "react";

import { tutorials } from "../data/tutorials";

export default function TutorialList() {
  return (
    <ul>
      {tutorials.map((_) => (
        <li key={_.number} style={{ listStyleType: "none", marginBottom: 10 }}>
          <a href={`tutorial${_.number}.html`}>Tutorial: {_.title}</a>
        </li>
      ))}
    </ul>
  );
}
