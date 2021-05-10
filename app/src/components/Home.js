import * as React from "react";

import * as apiClient from "../apiClient";

import AddTask from "./AddTask";
import Form from "./Form";
import TaskList from "./TaskList";

const Home = () => {
  const [tasks, setTasks] = React.useState([]);
  //testing
  const loadTasks = async () => setTasks(await apiClient.getTasks());

  React.useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      This is Home
      <h1>test</h1>
      <TaskList tasks={tasks} />
      <AddTask loadTasks={loadTasks} />
      <Form />
    </div>
  );
};

export default Home;
