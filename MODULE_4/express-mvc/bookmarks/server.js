const app = require("./app.js");
// this simply grabs our .env values
require("dotenv").config();
// this is a 'short-circuit' 
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`%%%%%%%%!#%!#$%!%!$#%!%$#! we are live on port ${PORT} %%%%%%%%`)
});