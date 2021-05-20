import * as React from "react";

import * as apiClient from "../apiClient";

import Form from "./Form";

const Home = () => {
  React.useEffect(() => {}, []);

  return (
    <div>
      This is Home
      <h1>test</h1>
      <Form />
    </div>
  );
};

export default Home;
