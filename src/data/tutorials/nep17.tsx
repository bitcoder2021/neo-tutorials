import React from "react";

import H2 from "../../components/H2";
import { Tutorial } from "../tutorials";
import TutorialPreReqs from "../../components/TutorialPreReqs";

const _: Tutorial = {
  number: 2,
  title: "NEP17 Token",
  content: [
    {
      segment: (
        <p>
          This tutorial will walk you through the process of creating real-world
          Neo Smart Contract using the Neo Blockchain toolkit. We will create a
          NEP-17 token;{" "}
          <a href="https://docs.neo.org/v3/docs/en-us/develop/write/nep17.html">
            NEP-17
          </a>{" "}
          is a token standard that specifies a general mechanism for tokenizing
          an asset on the Neo 3 blockchain.
        </p>
      ),
    },
    {
      onlyRelevantFor: "ui",
      segment: <TutorialPreReqs mode="ui" />,
    },
    {
      onlyRelevantFor: "cmd",
      segment: <TutorialPreReqs mode="cmd" />,
    },
    {
      segment: (
        <>
          <H2>Create a private blockchain</H2>
          <p>
            First, we’ll create a new empty folder—registrar—for our project.
            We’ll call our fictional token “XYZ” and store all files related to
            the token in a folder called <code>xyz-token</code>.
          </p>
        </>
      ),
    },
    {
      onlyRelevantFor: "cmd",
      segment: (
        <code>
          $ mkdir xyz-token
          <br />$ cd xyz-token
        </code>
      ),
    },
    {
      onlyRelevantFor: "ui",
      segment: (
        <>
          <p>
            Load a new Visual Studio Code window, click on “Open Folder” and
            then use the folder selection dialog to create a new folder called{" "}
            <code>xyz-token</code> and then open that folder.
          </p>
        </>
      ),
    },
  ],
};

export default _;
