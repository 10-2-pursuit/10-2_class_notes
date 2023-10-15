// express is like having a car delivered
const express = require("express");
const bookmarks = require("./controllers/bookmarksController");
// express() is turning it on
// app - is the name of MY CAR
// this is an instance of the express server 
const app = express();
const cors = require("cors")
app.use(cors())
// middleware - use another file in the middle of a req
// all it is - is a function that happens between req and res
app.use(express.json());
app.use("/bookmarks", bookmarks);

const coolest = "Gen";
// a callback is a function that is passed as
// an arg or returned from function
// http://localhost:8080/
app.get("/", (req, res) => {
    console.log(coolest);
    const upperCoolest = coolest.toUpperCase();
    res.send(`Welcome to our express app.  ${upperCoolest} is the coolest. its official`);
})

app.get("*", (req, res) => {
    res.status(404).json({error: "no page found "})
})



module.exports = app;