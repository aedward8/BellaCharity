import * as React from "react";

import * as apiClient from "../apiClient";

// import AddTask from "./AddTask";
import AnimalList from "./AnimalList";
import Form from "./Form";
// import TaskList from "./TaskList";

const Home = () => {
  // const [tasks, setTasks] = React.useState([]);
  const [animals, setAnimals] = React.useState([]);
  //testing
  // const loadTasks = async () => setTasks(await apiClient.getTasks());
  const loadAnimals = async () => setAnimals(await apiClient.getAnimals());

  React.useEffect(() => {
    // loadTasks();
    loadAnimals();
  }, []);

  console.log(animals);

  return (
    <div>
      This is Home
      <h1>test</h1>
      {/* <TaskList tasks={tasks} />
      <AddTask loadTasks={loadTasks} /> */}
      <Form />
      <AnimalList animals={animals} />
    </div>
  );
};

export default Home;
