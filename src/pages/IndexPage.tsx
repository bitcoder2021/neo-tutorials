import React from "react";

import H1 from "../components/H1";
import H2 from "../components/H2";

export default function IndexPage() {
  return (
    <>
      <H1>Get started with N3 today!</H1>

      <H2>Quick Start Videos</H2>
      <p>
        A series of videos&mdash;<em>each less than 10 minutes</em>
        &mdash;designed to walk you through getting started using the Neo
        Blockchain Toolkit:
      </p>
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

      <H2>Tutorials</H2>
      <p>
        Articles that guide you step-by-step through the process of creating
        real-world smart contracts using the Neo Blockchain Toolkit:
      </p>
      <ul>
        <li style={{ listStyleType: "none", marginBottom: 10 }}>
          <a href="tutorial1.html">Tutorial: NEP17 Token</a>
        </li>
        <li style={{ listStyleType: "none", marginBottom: 10 }}>
          <a href="tutorial2.html">Tutorial: Domain Registrar</a>
        </li>
      </ul>
    </>
  );
}
