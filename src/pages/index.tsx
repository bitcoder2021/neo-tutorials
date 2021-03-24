import { Link } from "@reach/router";
import React from "react";

export default () => (
  <div style={{ textAlign: "center" }}>
    <h1>Welcome to the N3 tutorials website</h1>
    <p>
      <Link to="/quick-starts">Quick Starts</Link> &mdash; A series of short
      videos that guide you step-by-step through the process of creating and
      debugging your first N3 smart contract using the Neo Blockchain Toolkit.
    </p>
    <p>
      <Link to="/tutorials">Tutorials</Link> &mdash; A selection of articles
      that walk you through building some example real-world N3 smart contracts.
    </p>
  </div>
);
