import * as React from "react";

import { Router } from "@reach/router";

// import * as apiClient from "./apiClient";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";

import "./styles.css";

const App = () => {
  return (
    <>
      <Nav />
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
