// built in to Node
const os = require('os');

function hostName() {
    return os.hostname()
}
// exports the function so we can use it again;

module.exports = {
    hostName
}