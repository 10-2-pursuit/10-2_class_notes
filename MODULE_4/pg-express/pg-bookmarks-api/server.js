const app = require("./app.js"); 

require("dotenv").config();
const PORT = process.env.PORT || 8008;
app.listen(PORT, () => {
    console.log(`Bookmarks live on port: ${PORT}`)
})