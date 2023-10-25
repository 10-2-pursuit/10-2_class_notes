const express = require("express");
const cors = require("cors");
const app = express();
const bookmarksController = require("./controllers/bookmarksController");
app.use(cors());
app.use(express.json());

app.use("/bookmarks", bookmarksController);
// why dont we need to `npm i express.json()`
// because its part of express
// THEN WHY ISNT INCLUDED AUTOMATICALLY?
// we might not use it;
// if we dont need it - we shouldn't use it

app.get("/", (req, res) => {
  res.send("welcome to bookmarks with Postgres");
});

app.get("*", (req, res) => {
  res.status(404).json({ success: false, data: { error: "page not found" } });
});
module.exports = app;
