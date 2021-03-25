import React from "react";

import * as fs from "fs";
import * as fsExtra from "fs-extra";
import * as path from "path";
import * as reactDomServer from "react-dom/server";

import IndexPage from "./pages/IndexPage";
import QuickStartPage from "./pages/QuickStartPage";
import { quickStarts } from "./data/quickStarts";
import PageTemplate from "./components/PageTemplate";

const distPath = path.join(__dirname, "..", "dist");
const staticPath = path.join(distPath, "static");
try {
  fs.mkdirSync(distPath);
  fs.mkdirSync(staticPath);
} catch (e) {}

function buildPage(filename: string, title: string, page: JSX.Element) {
  const html =
    "<!doctype html>\r\n" +
    reactDomServer.renderToStaticMarkup(
      <PageTemplate title={title}>{page}</PageTemplate>
    );
  fs.writeFileSync(path.join(distPath, filename), html);
}

buildPage("index.html", "N3 Tutorials", <IndexPage />);

for (const quickStart of quickStarts) {
  buildPage(
    `quickstart${quickStart.number}.html`,
    `Quick Start ${quickStart.number}: ${quickStart.title}`,
    <QuickStartPage quickStart={quickStart} />
  );
}

fsExtra.copySync(path.join(__dirname, "static"), staticPath);
