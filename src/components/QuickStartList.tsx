import React from "react";

import { quickStarts } from "../data/quickStarts";

export default function QuickStartList() {
  return (
    <ol>
      {quickStarts.map((_) => (
        <li key={_.number} style={{ listStyleType: "none", marginBottom: 10 }}>
          <a href={`quickstart${_.number}.html`}>
            Quick Start {_.number}: {_.title}
          </a>
        </li>
      ))}
    </ol>
  );
}
