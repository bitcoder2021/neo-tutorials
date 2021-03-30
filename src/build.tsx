import React from "react";

import * as fs from "fs";
import * as fsExtra from "fs-extra";
import * as path from "path";
import * as reactDomServer from "react-dom/server";

import IndexPage from "./pages/IndexPage";
import QuickStartPage from "./pages/QuickStartPage";
import { quickStarts } from "./data/quickStarts";
import PageTemplate from "./components/PageTemplate";
import { tutorials } from "./data/tutorials";
import TutorialPage from "./pages/TutorialPage";

const distPath = path.join(__dirname, "..", "dist");
const staticPath = path.join(distPath, "static");
try {
  fs.mkdirSync(distPath);
  fs.mkdirSync(staticPath);
} catch (e) {}

function buildPage(
  filename: string,
  title: string,
  page: JSX.Element,
  headerImage?: boolean
) {
  const html =
    "<!doctype html>\r\n" +
    reactDomServer.renderToStaticMarkup(
      <PageTemplate headerImage={headerImage} title={title}>
        {page}
      </PageTemplate>
    );
  fs.writeFileSync(path.join(distPath, filename), html);
}

buildPage("index.html", "N3 Tutorials", <IndexPage />, true);

for (let i = 0; i < quickStarts.length; i++) {
  const next = quickStarts[i + 1] || undefined;
  const previous = quickStarts[i - 1] || undefined;
  const quickStart = quickStarts[i];
  buildPage(
    `quickstart${quickStart.number}.html`,
    `Quick Start ${quickStart.number}: ${quickStart.title}`,
    <QuickStartPage next={next} previous={previous} quickStart={quickStart} />
  );
}

for (const tutorial of tutorials) {
  buildPage(
    `tutorial${tutorial.number}-ui.html`,
    tutorial.title,
    <TutorialPage tutorial={tutorial} mode="ui" />,
    true
  );
  buildPage(
    `tutorial${tutorial.number}-cmd.html`,
    tutorial.title,
    <TutorialPage tutorial={tutorial} mode="cmd" />,
    true
  );
}

fsExtra.copySync(path.join(__dirname, "static"), staticPath);
