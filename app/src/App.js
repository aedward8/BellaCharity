import * as React from "react";

import { Formik, Form, Field as FormikField, ErrorMessage } from "formik";
import * as Yup from "yup";

import * as apiClient from "./apiClient";

import "./styles.css";

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
      <ApiForm />
      <SignupForm />
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

// Pay attention to the name attribute of the <input> tags. These will be the column headers of our spreadsheet we save the data in and they MUST match up.
const ApiForm = () => {
  const [full_name, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [age, setAge] = React.useState("");
  const [message, setMessage] = React.useState("");

  const subForm = async (e) => {
    //e.preventDefault();
    await apiClient.addEntry(full_name, email, age, message);
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

//Formik
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
};

const requiredString = Yup.string().required("Required");
const validationSchema = Yup.object({
  firstName: requiredString.max(15, "Must be 15 characters or less"),
  lastName: requiredString.max(20, "Must be 20 characters or less"),
  email: requiredString.email("Invalid email address"),
});

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

const SignupForm = () => (
  <>
    <h1>Formik Form</h1>
    <Formik {...{ initialValues, validationSchema, onSubmit }}>
      <Form>
        <Field label="First Name" name="firstName" />
        <Field label="Last Name" name="lastName" />
        <Field label="Email" name="email" type="email" />
        <br />
        <button>Submit</button>
      </Form>
    </Formik>
  </>
);

const Field = ({ label, name, type = "text", ...props }) => (
  <>
    <label>
      {label}
      <FormikField {...{ name, type }} {...props} />
    </label>
    <ErrorMessage {...{ name }} component="div" />
  </>
);

export default App;
