import React from "react";

import * as fs from "fs";
import * as fsExtra from "fs-extra";
import * as path from "path";
import * as reactDomServer from "react-dom/server";

import IndexPage from "./pages/IndexPage";
import QuickStartPage from "./pages/QuickStartPage";
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
buildPage("quickstart1.html", "Quick Start 1", <QuickStartPage number={1} />);
buildPage("quickstart2.html", "Quick Start 2", <QuickStartPage number={2} />);
buildPage("quickstart3.html", "Quick Start 3", <QuickStartPage number={3} />);
buildPage("quickstart4.html", "Quick Start 4", <QuickStartPage number={4} />);
buildPage("quickstart5.html", "Quick Start 5", <QuickStartPage number={5} />);

fsExtra.copySync(path.join(__dirname, "static"), staticPath);
