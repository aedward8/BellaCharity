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

// TEST Google Sheets API
export const addEntry = async (full_name, email, age, message) => {
  try {
    const body = {
      data: { full_name, email, age, message },
    };
    const response = await fetch("/add-entry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body), //  converts JS object to JSON string
    });
    console.log(response);
    //converts from JSON to JS
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

//Display animals
export const getAnimals = async () => {
  const response = await fetch("/api/animals");
  return response.json();
};

// Get Dog Fact
export const getFact = async () => {
  const response = await fetch("/api/dogfact");
  console.log(response);
  return response.json();
};
