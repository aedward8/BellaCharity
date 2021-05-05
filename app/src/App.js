import * as React from "react";

import { useFormik } from "formik";
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

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <h1>Formik Form</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* Pass the useFormik() hook initial form values and a submit function that will
      be called when the form is submitted */}
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
