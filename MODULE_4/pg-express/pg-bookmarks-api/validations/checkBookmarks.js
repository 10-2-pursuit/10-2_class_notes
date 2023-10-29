const checkName = (req, res, next) => {
    // checking if the req.body has a NAME
    if(req.body.name){
        console.log("name is okay")
        // next allows our express middleware to pass the req, and res to the next functons
        next()
    } else {
        // send the res and end the request
        res.status(400).json({ error: "Name is required!" })
    }
}

const checkBoolean = (req, res, next) => {
    // check if we have an is favortie value
    if (req.body.is_favorite === true || req.body.is_favorite === false){
        // if we have value keep going
        next()
    } else{
        // if we dont send an error
        res.status(400).json({ error: "is_favorite must be a boolean value"})
    }
}

module.exports = {
    checkName,
    checkBoolean
}