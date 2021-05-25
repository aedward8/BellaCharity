import express from "express";
import mime from "mime-types";

import * as db from "./db.mjs";

import fetch from "node-fetch";

const app = express();
const port = process.env.PORT || 4000;

//new router
const tasks = express.Router();
// use task router
app.use("/api/tasks", tasks);

tasks.get("/", async (request, response) => {
  const tasks = await db.getTasks();
  response.json(tasks);
});

//body parser
tasks.use(express.json());

tasks.post("/", async (request, response) => {
  const { name } = request.body;
  const task = await db.addTask(name);
  response.status(201).json(task);
});

// Express body parser - very important
app.use(express.json());
app.post("/add-entry", async (request, response) => {
  console.log(request.body);

  // let signal that variable will change, BP default is const
  // result is like a receipt w/url
  const result = await fetch("https://api.apispreadsheets.com/data/11586/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request.body), //  converts JS object to JSON string
  });
  return response.json({ success: "woot" });
});

// get animal List
app.get("/api/animals", async (request, response) => {
  const animals = await db.getAnimals();
  response.json(animals);
});

// Get Dog Fact
app.get("/api/dogfact", async (request, response) => {
  const fact = await fetch(
    "https://dog-facts-api-2.herokuapp.com/api/v1/resources/dogs?number=1",
  );

  const [factData] = await fact.json();
  console.log(factData);
  // fact is response object parsed by json method to return JS object. Destructure fact to take out of the array saved to factData
  return response.json(factData); // make json object header with json body, takes js object and turns into json to be sent over through http
});

app.get("/api/ping", (request, response) =>
  response.json({ response: "pong" }),
);

if (process.env?.SERVE_REACT?.toLowerCase() === "true") {
  app.use(
    express.static("/app", {
      maxAge: "1d",
      setHeaders: (res, path) =>
        ["application/json", "text/html"].includes(mime.lookup(path)) &&
        res.setHeader("Cache-Control", "public, max-age=0"),
    }),
  );

  app.get("*", (req, res) => {
    res.sendFile("/app/index.html");
  });
}

app.listen(port, () => {
  console.info(`Example server listening at http://localhost:${port}`);
});
