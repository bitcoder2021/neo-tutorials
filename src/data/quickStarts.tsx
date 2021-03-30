import React from "react";

type QuickStart = {
  number: number;
  title: string;
  notes?: JSX.Element[];
};

const quickStarts: QuickStart[] = [
  {
    number: 1,
    title: "Getting Started with the Neo Blockchain Toolkit",
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
  { number: 2, title: "Working with the Private Net" },
  { number: 3, title: "Working with Wallets and Assets" },
  {
    number: 4,
    title: "Building your first Smart Contract",
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
    title: "Debugging your Smart Contract",
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
