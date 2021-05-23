import * as React from "react";
/** @jsxImportSource @emotion/react */

import { Router } from "@reach/router";

import About from "./components/About";
import Adoptions from "./components/Adoptions";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavB from "./components/NavB";
import SignupForm from "./components/SignupForm";
import TermsAndConditions from "./components/TermsAndConditions";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles-custom.css";
import "./styles.css";
// import "./styles-basics.css";

const App = () => {
  return (
    <>
      <NavB />
      <main
        css={{
          margin: "calc((100vh / 25) * 1.563) calc((100vw / 25) * 1.563)",
        }}
      >
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Adoptions path="/adopt" />
          <Donate path="/donate" />
          <SignupForm path="/signup-form" />
          <TermsAndConditions path="/terms-conditions" />
        </Router>
      </main>
      <Footer />
    </>
  );
};

export default App;
