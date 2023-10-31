const express = require("express");
const cors = require("cors");
const app = express();
const bookmarksController = require("./controllers/bookmarksController");
const reviewsController = require("./controllers/reviewsController.js");
// CROSS ORIGIN RESOURCE SHARING
  // allows us to get info from the server at the broswer
    // www.tolentiocorp.com  => gets data from express server SOMEWHERE ELSE
app.use(cors());
app.use(express.json());
// www.tolentiocorp.com/bookmarks 
app.use("/bookmarks", bookmarksController);

// why dont we need to `npm i express.json()`
// because its part of express
// THEN WHY ISNT INCLUDED AUTOMATICALLY?
// we might not use it;
// if we dont need it - we shouldn't use it
// describe the users path
  // tolentinocorp.com/
app.get("/", (req, res) => {
  res.send("welcome to bookmarks with Postgres");
}

);
//sets HTTP status code
// www.tolentiocorp.com/anythingWeDon\'tHaveARouteFor
app.get("*", (req, res) => {
  res.status(404).json({ success: false, data: { error: "page not found" } });
});
module.exports = app;
