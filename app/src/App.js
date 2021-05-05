import * as React from "react";

import { Router } from "@reach/router";

// import * as apiClient from "./apiClient";
import About from "./components/About";
import Home from "./components/Home";

import "./styles.css";

const App = () => {
  return (
    <>
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
      {/* <main className="App">
      </main> */}
    </>
  );
};

export default App;
