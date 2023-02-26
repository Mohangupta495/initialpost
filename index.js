const express = require("express");
const connectionDB = require("./srcc/database/mongoconnection.handler");
const cors = require("cors");
const {
  visiterDetails,
  getVisiterDetails,
} = require("./srcc/models/visiter/controller/visiter.controller");

const app = express();
const router = express.Router();
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
app.use("/", router.get("/visiter/visiterDetails", getVisiterDetails));
app.get("/", (req, res) => {
  res.send("Welcome to WebBrings api section.");
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
