import * as React from "react";

import * as apiClient from "../apiClient";

import AddTask from "./AddTask";
import Form from "./Form";
import Nav from "./Nav";
import SignupForm from "./SignupForm";
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
      <Nav />
      This is Home
      <h1>test</h1>
      <TaskList tasks={tasks} />
      <AddTask loadTasks={loadTasks} />
      <Form />
      <SignupForm />
    </div>
  );
};

export default Home;
