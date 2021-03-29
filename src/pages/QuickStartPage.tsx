import React, { Fragment } from "react";

import H1 from "../components/H1";
import H2 from "../components/H2";
import { QuickStart } from "../data/quickStarts";
import QuickStartList from "../components/QuickStartList";
import TutorialList from "../components/TutorialList";

type Props = {
  quickStart: QuickStart;
};

export default function QuickStartPage({ quickStart }: Props) {
  const videoHref = `./static/quick-start-files/quick-start-${quickStart.number}.mp4`;
  return (
    <>
      <H1>
        Quick Start {quickStart.number}:<br />
        {quickStart.title}
      </H1>
      <div>
        <video controls style={{ width: "100%" }}>
          <source src={videoHref} type="video/mp4" />
          Your browser does not support playing inline videos;
          <a href={videoHref}>click here to download the video file</a>.
        </video>
      </div>
      {!!quickStart.notes?.length && (
        <>
          <H2>Notes:</H2>
          <div style={{ marginLeft: 40 }}>
            {quickStart.notes.map((_, i) => (
              <Fragment key={i}>{_}</Fragment>
            ))}
          </div>
        </>
      )}
      <H2>All Quick Starts:</H2>
      <QuickStartList />
      <H2>Full Tutorials:</H2>
      <TutorialList />
    </>
  );
}
