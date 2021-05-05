import * as React from "react";

import { Link } from "@reach/router";

const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Nav;
