const os = require('os');

function hostName() {
    return os.hostname()
}

module.exports = {
    hostName
}