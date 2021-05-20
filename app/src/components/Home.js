import * as React from "react";

import * as apiClient from "../apiClient";

import Form from "./Form";

const Home = () => {
  React.useEffect(() => {}, []);

const Home = () => {
  // const [tasks, setTasks] = React.useState([]);
  const [animals, setAnimals] = React.useState([]);
  //testing
  // const loadTasks = async () => setTasks(await apiClient.getTasks());
  const loadAnimals = async () => setAnimals(await apiClient.getAnimals());

  React.useEffect(() => {
    loadAnimals();
  }, []);


  console.log(animals);

  return (
    <div>
      This is Home
      <h1>test</h1>

      <Form />

    </div>
  );
};

export default Home;
