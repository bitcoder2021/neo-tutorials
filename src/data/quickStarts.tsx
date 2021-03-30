import React from "react";

type QuickStart = {
  number: number;
  title: string;
  notes?: JSX.Element[];
};

const quickStarts: QuickStart[] = [
  {
    number: 1,
    title: "Set up your development environment",
    notes: [
      <p>
        The .NET SDK can be downloaded from:
        <br />
        <a href="https://dotnet.microsoft.com/download">
          https://dotnet.microsoft.com/download
        </a>
      </p>,
      <p>
        Visual Studio Code can be downloaded from:
        <br />
        <a href="https://code.visualstudio.com/">
          https://code.visualstudio.com/
        </a>
      </p>,
      <p>
        This is the URL to the official Neo Blockchain Toolkit extension for
        Visual Studio Code:
        <br />
        <a href="https://marketplace.visualstudio.com/items?itemName=ngd-seattle.neo-blockchain-toolkit">
          https://marketplace.visualstudio.com/items?itemName=ngd-seattle.neo-blockchain-toolkit
        </a>
      </p>,
    ],
  },
  { number: 2, title: "Create a private N3 blockchain" },
  { number: 3, title: "Create wallets and transfer assets" },
  {
    number: 4,
    title: "Create and deploy a smart contract",
    notes: [
      <p>
        This is the URL to the official C# extension for Visual Studio Code:
        <br />
        <a href="https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp">
          https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp
        </a>
      </p>,
      <p>
        The command to install the Neon complier is:{" "}
        <code>dotnet tool install -g neo.neon --version 3.0.0-rc1</code>
      </p>,
    ],
  },
  {
    number: 5,
    title: "Debug your smart contract",
    notes: [
      <p>
        The launch.json schema for debugging Neo Smart Contracts is documented
        here:
        <br />
        <a href="https://github.com/neo-project/neo-debugger/blob/master/docs/debug-config-reference.md">
          https://github.com/neo-project/neo-debugger/blob/master/docs/debug-config-reference.md
        </a>
      </p>,
    ],
  },
];

export { quickStarts, QuickStart };
