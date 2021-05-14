import * as React from "react";

import * as apiClient from "../apiClient";

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
    </div>
  );
};

export default Home;
