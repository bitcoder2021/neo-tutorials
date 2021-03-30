import React, { Fragment } from "react";

import H1 from "../components/H1";

import { Tutorial } from "../data/tutorials";

type Props = {
  tutorial: Tutorial;
  mode: "ui" | "cmd";
};

export default function TutorialPage({ tutorial, mode }: Props) {
  return (
    <>
      <H1>{tutorial.title}</H1>
      {mode === "ui" && (
        <p>
          You are currently viewing the UI version of this tutorial. More
          comfortable at a command prompt?{" "}
          <a href={`./tutorial${tutorial.number}-cmd.html`}>
            Click here for a command-line version of this tutorial
          </a>
          .
        </p>
      )}
      {mode === "cmd" && (
        <p>
          You are currently viewing the command-line version of this tutorial.
          More comfortable using a graphical user-interface?{" "}
          <a href={`./tutorial${tutorial.number}-ui.html`}>
            Click here for a UI version of this tutorial
          </a>
          .
        </p>
      )}
      <div
        style={{
          backgroundColor: "#fff",
          color: "#000",
          marginTop: 20,
          padding: 15,
        }}
      >
        {tutorial.content
          .filter((_) => !_.onlyRelevantFor || _.onlyRelevantFor === mode)
          .map((_, i) => (
            <Fragment key={i}>{_.segment}</Fragment>
          ))}
      </div>
    </>
  );
}
