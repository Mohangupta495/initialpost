const express = require("express");
const dotenv = require("dotenv");
const connectionDB = require("./database/mongoconnection.handler");
const cors = require("cors");
const visiterDetails = require("./models/visiter/controller/visiter.controller");

const app = express();
const router = express.Router();
dotenv.config();
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.statusCode = 200;
    res.end();
  }
  next();
});
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
connectionDB();
app.use("/", router.post("/visiter/signUp", visiterDetails));
app.get("/", (req, res) => {
  res.send("Welcome to WebBrings api section.");
});
app.listen(process.env.PORT, () => {
  console.log("sever is runnig on port " + process.env.PORT);
});
