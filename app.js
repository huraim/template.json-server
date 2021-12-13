const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

const todos = [
  {
    id: 0,
    title: "React Hooks 익히기",
    status: "todo"
  },
  {
    id: 1,
    title: "GraphQL 익히기",
    status: "todo"
  },
  {
    id: 2,
    title: "Apollo 익히기",
    status: "todo"
  }
];

app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/todos", (req, res) => res.json(todos));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));