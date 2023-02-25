const express = require("express");
const visiterDetails = require("../visiter/controller/visiter.controller");

const router = express.Router();
const path = "/visiter";
router.post(path, "/signUp", visiterDetails);
