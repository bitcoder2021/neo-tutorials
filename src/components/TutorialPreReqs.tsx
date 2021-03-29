import React from "react";

import H2 from "./H2";

type Props = {
  mode: "ui" | "cmd";
};

export default function TutorialPreReqs({ mode }: Props) {
  return (
    <>
      <H2>Pre-requisites</H2>
      <p>
        You will need the following software to follow along with this tutorial:
      </p>
      <ul>
        <li>
          <strong>.NET SDK 5.0</strong>
          <br />
          We’ll write the smart contract code using the C# programming language.
          The .NET SDK is required to compile the C# code.
          <br />
          <a href="https://dotnet.microsoft.com/download">
            https://dotnet.microsoft.com/download
          </a>
        </li>
        <li>
          <strong>Visual Studio Code</strong>
          <br />
          This is a very popular code editor; the Neo Blockchain Toolkit builds
          on top of VS Code.
          <br />
          <a href="https://code.visualstudio.com/download">
            https://code.visualstudio.com/download
          </a>
        </li>
        <li>
          <strong>C# Visual Studio Code extension</strong>
          <br />
          This will add support to VS Code for editing and building C# source
          code.
          <br />
          <a href="https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp">
            https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp
          </a>
        </li>
        <li>
          <strong>Neo Blockchain Toolkit Visual Studio Code extension</strong>
          <br />
          This will add support to VS Code for visualizing Neo blockchains,
          running private blockchain instances and debugging Neo smart
          contracts.
          <br />
          <a href="https://marketplace.visualstudio.com/items?itemName=ngd-seattle.neo-blockchain-toolkit">
            https://marketplace.visualstudio.com/items?itemName=ngd-seattle.neo-blockchain-toolkit
          </a>
        </li>
        <li>
          <strong>Neon smart contract compiler</strong>
          <br />
          This tool allows you to convert compiled C# code into bytecode
          suitable for execution by the Neo virtual machine.
          <br />
          <a href="https://github.com/neo-project/neo-devpack-dotnet">
            https://github.com/neo-project/neo-devpack-dotnet
          </a>
        </li>
        {mode === "cmd" && (
          <li>
            <strong>Neo Express</strong>
            <br />
            This tool allows you to run a private instance of the Neo
            blockchain.
            <br />
            <a href="https://github.com/neo-project/neo-express">
              https://github.com/neo-project/neo-express
            </a>
          </li>
        )}
      </ul>
      <p>
        All of the software listed above is freely available and cross-platform
        (you can follow along on Windows, Mac or Linux).
      </p>
    </>
  );
}
