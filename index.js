const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();
const port = 8000;
const bookSchema = {
  name: String,
  author: String,
  price: String,
};
const mailSchema = {
  name: String,
  desc: String,
  phone: String,
  email: String,
};
const Book = mongoose.model("bookStore", bookSchema);
const Mail = mongoose.model("mailStore", mailSchema);
let books = [];
app.use(cors());
app.set("view engine", "ejs");
mongoose.connect(
  "mongodb+srv://mohan:mohan@cluster0.ox3vuuo.mongodb.net/bookStore?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/book", async (req, res) => {
  const books = await Book.find();
  res.send(books);
});
app.post("/addbook", (req, res) => {
  const bookDetails = req.body;
  books.push(bookDetails);
  const book = new Book(bookDetails);
  book.save(function (err) {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.send(book);
      console.log("added succs");
    }
  });
});
app.post("/deletebook", (req, res) => {
  const bookDetails = req.body;
  const book = Book.findByIdAndDelete(bookDetails._id);
  res.send(book);
});
app.post("/update", (req, res) => {
  const bookDetails = req.body;
  console.log(bookDetails);
  const dbResponse = Book.findByIdAndUpdate(bookDetails._id, {
    name: bookDetails.name,
    author: bookDetails.name,
    price: bookDetails.name,
  });
  console.log(dbResponse);
  res.send(dbResponse);
});
app.post("/getbook", async (req, res) => {
  const bookDetails = req.body;
  const book = await Book.findById(bookDetails._id);
  res.send(book);
});
app.post("/sendmail", (req, res) => {
  const data = new Mail({
    name: req.body.name,
    email: req.body.email,
    desc: req.body.desc,
    phone: req.body.phone,
  });

  try {
    const dataToSave = data.save();
    res.send(dataToSave);
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
    res.send(error);
  }
  // res.send("This is my about route..... ");
});
app.get("/", (req, res) => {
  res.send("Hey this is my API");
});
app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);

module.exports = app;
