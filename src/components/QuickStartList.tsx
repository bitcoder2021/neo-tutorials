import React from "react";

export default function QuickStartList() {
  return (
    <ol>
      <li style={{ listStyleType: "none", marginBottom: 10 }}>
        <a href="quickstart1.html">
          Quick Start 1: Set up your development environment
        </a>
      </li>
      <li style={{ listStyleType: "none", marginBottom: 10 }}>
        <a href="quickstart2.html">
          Quick Start 2: Create a private Neo blockchain
        </a>
      </li>
    </ol>
  );
}
