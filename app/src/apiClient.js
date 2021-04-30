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
    const body = { data: { full_name, email, age, message } };
    const response = await fetch(
      "https://api.apispreadsheets.com/data/11586/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body), //  converts JS object to JSON string
      },
    );
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
