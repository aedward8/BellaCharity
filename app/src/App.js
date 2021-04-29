import * as React from "react";

import * as apiClient from "./apiClient";

const App = () => {
  const [tasks, setTasks] = React.useState([]);

  const loadTasks = async () => setTasks(await apiClient.getTasks());

  React.useEffect(() => {
    loadTasks();
  }, []);

  return (
    <main className="App">
      <h1>test</h1>
      <TaskList tasks={tasks} />
      <AddTask loadTasks={loadTasks} />
      <Form />
    </main>
  );
};

const TaskList = ({ tasks }) => (
  <ul>
    {tasks.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);

const AddTask = ({ loadTasks }) => {
  const [task, setTask] = React.useState("");

  const canAdd = task !== "";

  const onSubmit = async (e) => {
    e.preventDefault();
    if (canAdd) {
      await apiClient.addTask(task);
      loadTasks();
      setTask("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        New task:{" "}
        <input onChange={(e) => setTask(e.currentTarget.value)} value={task} />
      </label>
      <button disabled={!canAdd}>Add</button>
    </form>
  );
};

const Form = () => {
  const [full_name, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [age, setAge] = React.useState("");
  const [message, setMessage] = React.useState("");

  const subForm = async () => {
    //e.preventDefault();
    let res = await apiClient.addEntry(full_name, email, age, message);
    console.log(res);
    setFullName("");
    setEmail("");
    setAge("");
    setMessage("");
  };

  return (
    <>
      <br />
      <br />
      <h2>Test API</h2>
      <form id="myForm">
        <label>
          Full Name
          <br />
          <input
            name="full_name"
            value={full_name}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Email
          <br />
          <input
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Age
          <br />
          <input
            type="radio"
            id="age"
            name="age"
            value="18-35"
            onChange={(e) => setAge(e.target.value)}
          />{" "}
          18-35
          <br />
          <input
            type="radio"
            id="age"
            name="age"
            value="35+"
            onChange={(e) => setAge(e.target.value)}
          />{" "}
          35+
        </label>
        <br />
        <label>
          Message
          <br />
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>
        <br />
        <br />
      </form>
      <button onClick={() => subForm()}>Submit</button>
    </>
  );
};

export default App;
