export const getTasks = async () => {
  const response = await fetch("/api/tasks");
  return response.json();
};

export const addTask = async (name) => {
  const response = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  return response.json();
};

// TEST API
export const addEntry = async (full_name, email, age, message) => {
  const body = { data: { full_name, email, age, message } };
  const response = await fetch("https://api.apispreadsheets.com/data/11586/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body), //  converts JS object to JSON string
  });
  console.log(response);
  //converts from JSON to JS
  //return response.json();
  if (response.status === 201) {
    return "Your form has been submitted!";
  } else {
    console.error();
  }
};
