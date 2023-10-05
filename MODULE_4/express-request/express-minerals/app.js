// DEPENDENCIES
const express = require("express")
const rocks = require("./models/rock.js")

//CONFIGURATION
const app = express()

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to Express Minerals App")
});

// Index route
app.get("/rocks", (req, res) => {
    res.send(rocks)
})

// Static routes much come befpre dynamic routes!
app.get("/rocks/awesome", (req, res)=> {
    res.send(`<h1>Rocks are awesome</h1>`)
})

app.get("/rocks/:index", (req, res) => {
    const { index } = req.params
    if(rocks[index]) {
        res.send(rocks[index])
    } else {
        res.send("Cannot find index!!!!")
    }  
})


// MULTIPLE PARAMETERS
app.get("/question/:firstName/:lastName", (req, res) => {
    const { firstName, lastName } = req.params
    res.send(`${firstName} ${lastName} asks if there is life on Mars?`)
})

//QUERY STRINGS
app.get("/calculator/:operator", (req, res) => {
    console.log("This is req.params", req.params)
    console.log("This is req.query", req.query)
    const sum = req.query.num1 + req.query.num2
    res.send("sum is " + sum)
})


// EXPORT
module.exports = app;