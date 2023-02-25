const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();
const port = 8000;
const mailSchema = {
  name: String,
  desc: String,
  phone: String,
  email: String,
};
const Mail = mongoose.model("mailStore", mailSchema);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "Content-Type",
    "Authorization"
  );
  next();
});

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
app.post("/sendmail", (req, res) => {
  const data = new Mail({
    name: req.body.name,
    email: req.body.email,
    desc: req.body.desc,
    phone: req.body.phone,
  });
  try {
    const dataToSave = data.save();
    res.send({ status: true, data: data, dataToSave: dataToSave });
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
    res.send({ status: false });
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
