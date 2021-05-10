import * as React from "react";

import * as apiClient from "../apiClient";

// Pay attention to the name attribute of the <input> tags. These will be the column headers of our spreadsheet we save the data in and they MUST match up.
const Form = () => {
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

export default Form;
