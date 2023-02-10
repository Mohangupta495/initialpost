const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8000;

// Where we will keep books
let books = [
  { name: "mohan", description: "this is a book", author: "John" },
  { name: "mohan", description: "this is a book", author: "John" },
  { name: "mohan", description: "this is a book", author: "John" },
  { name: "mohan", description: "this is a book", author: "John" },
  { name: "mohan", description: "this is a book", author: "John" },
  { name: "mohan", description: "this is a book", author: "John" },
  { name: "mohan", description: "this is a book", author: "John" },
];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/book", (req, res) => {
  res.send(books);
});

app.get("/", (req, res) => {
  res.send("Hey this is my APdjffjdlj nowfdjfjdlsfjdsfljI running 🥳");
});
app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
module.exports = app;
