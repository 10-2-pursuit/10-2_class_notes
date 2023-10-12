const express = require("express");
// this router is going to be in charge of all routes
// for this ONE resource;  seperating our concerns;
const bookmarks = express.Router();
// mock DB
const bookmarksData = require("../models/bookmark");

// bookmarks
// where is the route?  and what do we do?
// what kind of request is this route handling?

// GET
// localhost:8080/bookmarks
// what is the PARAMS, BODY ? optional, HEADERS READLINE 
// HAS A METHOD it is either a GET request, or a POST request
// or a PUT /PATCH request or a DELETE request;
// if (req.readLine === "GET") then the .get() route handles  it

// THIS IS THE INDEX ROUTE FOR http://localhost:8080/bookmarks
bookmarks.get("/", (req, res) => {
    // what do we want to do
    console.log("sending all bookmarks data")
    // our HEADERS might only accept APPLICATION/JSON
    res.json(bookmarksData);
})

// bookmakrs/anything we can think of 
// what does this route need to DO in order to send back
// ONE specific item from our Data?
// the ':' signals express that this is meant to be dynamic
// and anything after the ":" is a variable OF that name
bookmarks.get("/:index", (req, res) => {
    const { index } = req.params;
    console.log("SHOW ROUTE!@#$@!##@##!@#@!")
    if (bookmarksData[index]) {
        res.status(200).json(bookmarksData[index])
    } else {
        res.status(404).send("No bookmark at that index");
    }
})
// localhost:8080/bookmarks 
// Express knows that the request is POST so the POST request is fired;
bookmarks.post("/", (req, res) => {
    console.log("post route was hit!@#@!#!");
    console.log(req.body, " <------ this is the req body sent from user")
    bookmarksData.push(req.body);
    res.status(200).json( {status: "OK", payload: bookmarksData[bookmarksData.length - 1]} )
})

// DELETE ROUTE - "localhost:8080/bookmarks/:id"

bookmarks.delete("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params
    if (bookmarksData[arrayIndex]){
        const deletedBookmark = bookmarksData.splice(arrayIndex, 1)
        res.status(200).json(deletedBookmark[0])
    }else{
        res.status(404).json({errror: "Could not locate bookmark to be deleted!"})
    }  
})
// this IS a callback function
// 

// UPDATE ROUTE - "localhost:8080/bookmarks/:id"
bookmarks.put("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params
    if (bookmarksData[arrayIndex]){
        bookmarksData[arrayIndex] = req.body
        res.status(200).json((bookmarksData[arrayIndex]))
    } else{
        res.status(404).json({error: "Could not locate bookmark to be updated"})
    }
})
module.exports = bookmarks;