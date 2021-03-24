import React from "react";
import { Root, Routes } from "react-static";
import { Link, Router } from "@reach/router";
import PageContent from "components/PageContent";
import "./app.css";

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/quick-starts">Quick Starts</Link>
        <Link to="/tutorials">Tutorials</Link>
      </nav>
      <div className="content">
        <PageContent>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </PageContent>
      </div>
    </Root>
  );
}

export default App;
