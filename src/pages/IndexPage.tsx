import React from "react";

import H1 from "../components/H1";
import H2 from "../components/H2";
import QuickStartList from "../components/QuickStartList";

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
      <QuickStartList />

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
