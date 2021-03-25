import React from "react";

import H1 from "../components/H1";

import { Tutorial } from "../data/tutorials";

type Props = {
  tutorial: Tutorial;
};

export default function TutorialPage({ tutorial }: Props) {
  return (
    <>
      <H1>
        Tutorial:
        <br />
        {tutorial.title}
      </H1>
      <p>Coming soon!</p>
    </>
  );
}
