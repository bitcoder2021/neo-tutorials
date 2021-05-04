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
          <strong>.NET SDK 5.0</strong> &mdash;{" "}
          <a href="https://dotnet.microsoft.com/download">
            https://dotnet.microsoft.com/download
          </a>
          <br />
          We’ll write the smart contract code using the C# programming language.
          The .NET SDK is required to compile the C# code.
        </li>
        <li>
          <strong>Visual Studio Code</strong> &mdash;{" "}
          <a href="https://code.visualstudio.com/download">
            https://code.visualstudio.com/download
          </a>
          <br />
          This is a very popular code editor; the Neo Blockchain Toolkit builds
          on top of VS Code.
        </li>
        <li>
          <strong>Neo Blockchain Toolkit Visual Studio Code extension</strong>{" "}
          &mdash;{" "}
          <a href="https://marketplace.visualstudio.com/items?itemName=ngd-seattle.neo-blockchain-toolkit">
            https://marketplace.visualstudio.com/items?itemName=ngd-seattle.neo-blockchain-toolkit
          </a>
          <br />
          This will add support to VS Code for visualizing Neo blockchains,
          running private blockchain instances and debugging Neo smart
          contracts.
        </li>
      </ul>
      <div
        style={{
          marginLeft: "15%",
          marginRight: "15%",
          border: "1px solid #000",
          borderRadius: 15,
          paddingLeft: 15,
          paddingRight: 15,
          backgroundColor: "#f5f5f5",
          fontStyle: "italic",
          fontSize: "0.8em",
        }}
      >
        <p>
          For a step-by-step walkthrough showing how to install the above
          pre-requisites, see:{" "}
          <a href="./quickstart1.html">Quick Start video 1</a>.
        </p>
        <p>
          This 6-minute video demonstrates how to setup a new machine for N3
          smart contract development.
        </p>
      </div>
      <ul>
        <li>
          <strong>C# Visual Studio Code extension</strong> &mdash;{" "}
          <a href="https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp">
            https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp
          </a>
          <br />
          This will add support to VS Code for editing and building C# source
          code.
        </li>
        <li>
          <strong>Neo C# smart contract compiler</strong> &mdash;{" "}
          <a href="https://github.com/neo-project/neo-devpack-dotnet">
            https://github.com/neo-project/neo-devpack-dotnet
          </a>
          <br />
          This tool allows you to convert compiled C# code into bytecode
          suitable for execution by the Neo virtual machine.
        </li>
      </ul>
      <div
        style={{
          marginLeft: "15%",
          marginRight: "15%",
          border: "1px solid #000",
          borderRadius: 15,
          paddingLeft: 15,
          paddingRight: 15,
          backgroundColor: "#f5f5f5",
          fontStyle: "italic",
          fontSize: "0.8em",
        }}
      >
        <p>
          For a step-by-step walkthrough showing how to install the C# VS Code
          extension and the Neo C# compiler, see:{" "}
          <a href="./quickstart4.html">Quick Start video 4</a>.
        </p>
        <p>
          This 11-minute video demonstrates how to setup your machine to compile
          C# smart contracts and walks through a trivial example.
        </p>
      </div>
      {mode === "cmd" && (
        <>
          <ul>
            <li>
              <strong>Neo Express</strong> &mdash;{" "}
              <a href="https://github.com/neo-project/neo-express">
                https://github.com/neo-project/neo-express
              </a>
              <br />
              This tool allows you to run a private instance of the Neo
              blockchain.
            </li>
          </ul>
          <div
            style={{
              marginLeft: "15%",
              marginRight: "15%",
              border: "1px solid #000",
              borderRadius: 15,
              paddingLeft: 15,
              paddingRight: 15,
              backgroundColor: "#f5f5f5",
              fontStyle: "italic",
              fontSize: "0.8em",
            }}
          >
            <p>
              Neo Express can be installed using the following command:
              <br />
              <code>$ dotnet tool install Neo.Express -g</code>
            </p>
            <p> The .NET SDK must be installed first (see above).</p>
            <p>
              On Linux and MacOS systems additional dependencies are required,
              see <a href="./quickstart1.html">Quick Start video 1</a> or the{" "}
              <a href="https://github.com/neo-project/neo-express#ubuntu-installation">
                Neo Express documentation
              </a>{" "}
              for more information.
            </p>
          </div>
        </>
      )}

      <p>
        All of the software listed above is freely available and cross-platform
        (you can follow along on Windows, Mac or Linux).
      </p>
    </>
  );
}
