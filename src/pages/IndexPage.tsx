import React from "react";

import H1 from "../components/H1";
import H2 from "../components/H2";
import QuickStartList from "../components/QuickStartList";
import TutorialList from "../components/TutorialList";

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
      <TutorialList />

      <p style={{ textAlign: "center", marginTop: 75 }}>
        <small>
          Got questions, comments or suggestions regarding the content of this
          tutorial site?
          <br />
          Please open a GitHub issue:{" "}
          <a href="https://github.com/ngdenterprise/neo-tutorials">
            https://github.com/ngdenterprise/neo-tutorials
          </a>
          .
        </small>
      </p>
    </>
  );
}
