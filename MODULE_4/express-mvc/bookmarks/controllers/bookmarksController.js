const express = require("express");

// this router is going to be in charge of all routes
// for this ONE resource;  seperating our concerns;
const bookmarks = express.Router();
// mock DB
const bookmarksData = require("../models/bookmark");

// bookmarks
// where is the route?  and what do we do?
bookmarks.get("/", (req, res) => {
    // what do we want to do
    console.log("sending all bookmarks data")
    // our HEADERS might only accept APPLICATION/JSON
    res.json(bookmarksData);
})
// this IS a callback function
// 
module.exports = bookmarks;