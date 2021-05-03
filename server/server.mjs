import express from "express";
import mime from "mime-types";

import * as db from "./db.mjs";

import fetch from "node-fetch";

const app = express();
const port = process.env.PORT || 4000;

//new router
const tasks = express.Router();

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

// prefix
app.use("/api/tasks", tasks);
// potentially seo? use dashes for urls, bp

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
  //console.log({ result });
  return response.json({ success: "woot" });
});

process.env?.SERVE_REACT?.toLowerCase() === "true" &&
  app.use(
    express.static("/app", {
      maxAge: "1d",
      setHeaders: (res, path) =>
        ["application/json", "text/html"].includes(mime.lookup(path)) &&
        res.setHeader("Cache-Control", "public, max-age=0"),
    }),
  );

app.get("/api/ping", (request, response) =>
  response.json({ response: "pong" }),
);

app.listen(port, () => {
  console.info(`Example server listening at http://localhost:${port}`);
});
