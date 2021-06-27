const express = require("express");
const route = require("./route");
const app = express();
const path = require("path");
const { Server } = require("http");
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.use(route);
app.listen(3000, () => console.log(`listening on http://localhost:${port}`));
