import * as React from "react";

import { Router } from "@reach/router";

// import * as apiClient from "./apiClient";
import About from "./components/About";
import Adoptions from "./components/Adoptions";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import SignupForm from "./components/SignupForm";

const App = () => {
  return (
    <>
      <Nav />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Adoptions path="/adopt" />
        <SignupForm path="/signup-form" />
      </Router>
      {/* <main className="App">
      </main> */}
      <Footer />
    </>
  );
};

export default App;
