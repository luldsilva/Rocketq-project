const express = require("express");
const route = express.Router();
const questionController = require("./controllers/questionController");
const roomController = require("./controllers/roomController");

route.get("/", (req, res) => res.render("index", { page: "enter-room" }));
route.get("/create-pass", (req, res) =>
  res.render("index", { page: "create-pass" })
);

route.get("/room/:room", roomController.open);
route.post("/create-room", roomController.create);
route.post("/enterroom", roomController.enter);

route.post("/question/create/:room", questionController.create);
route.post("/question/:room/:question/:action", questionController.index);

module.exports = route;
