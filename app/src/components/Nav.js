import * as React from "react";

import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/adopt">Adoptions</Link>
      <Link to="/signup-form">Volunteer Form</Link>
    </nav>
  );
};

export default Nav;
