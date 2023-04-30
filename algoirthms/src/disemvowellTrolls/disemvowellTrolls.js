function disemvowel(str) {
    return str.replace(/[aeiou]/gi, "")
}

module.exports = disemvowel;