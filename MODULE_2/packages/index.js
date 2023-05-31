// This is the entrypoint for our app and will trigger the actual execution of all other code
const { hostName }  = require("./os");
const { checkWord, checkWords } = require("./spell-check")

function run() {
    // console.log(hostName())
    // all files and functions lead to 'run'
    // allows us to grab the last value passed when node.js executes the file
    checkWords(process.argv[2]);
}
// this little function starts our entire application
run();
