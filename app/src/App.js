import * as React from "react";

import { Router } from "@reach/router";

import About from "./components/About";
import Adoptions from "./components/Adoptions";
import Home from "./components/Home";
import NavB from "./components/NavB";
import SignupForm from "./components/SignupForm";

const App = () => {
  return (
    <>
      <NavB />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Adoptions path="/adopt" />
        <SignupForm path="/signup-form" />
      </Router>
      {/* <main className="App">
      </main> */}
    </>
  );
};

export default App;
