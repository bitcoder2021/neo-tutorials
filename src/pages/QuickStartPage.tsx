import React, { Fragment } from "react";

import H1 from "../components/H1";
import H2 from "../components/H2";
import { QuickStart } from "../data/quickStarts";
import QuickStartList from "../components/QuickStartList";
import TutorialList from "../components/TutorialList";

type Props = {
  next?: QuickStart;
  previous?: QuickStart;
  quickStart: QuickStart;
};

export default function QuickStartPage({ quickStart, next, previous }: Props) {
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
      {(!!next || !!previous) && (
        <div
          style={{
            alignItems: "flex-start",
            display: "flex",
            justifyContent: "space-between",
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          {!!previous && (
            <div style={{ flexGrow: 1 }}>
              Previous video
              <br />
              <a
                href={`./quickstart${previous.number}.html`}
                style={{ fontWeight: "bold" }}
              >
                {previous.title}
              </a>
            </div>
          )}
          {!!next && (
            <div style={{ flexGrow: 1, textAlign: "right" }}>
              Next video
              <br />
              <a
                href={`./quickstart${next.number}.html`}
                style={{ fontWeight: "bold" }}
              >
                {next.title}
              </a>
            </div>
          )}
        </div>
      )}
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
