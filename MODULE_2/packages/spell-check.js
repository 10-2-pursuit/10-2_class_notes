// This file will be responsible for invoking the `SpellChecker` pacakge and handling our spellcheck logic
const SpellChecker = require("simple-spellchecker");
// this is our function that will make use of our NPM package
function checkWord(word) { 
    // Boilerplate code to invoke the functionality we downloaded
    // this function accepts a string, and a callback function
        // the string tells us what type of language we are using
        // the callback function tells SpellChecker what to do with the code
    SpellChecker.getDictionary("en-US", function(err, dictionary) {
        // in the event of the code erroring out - `err` will be truthy 
        if (err) {
            // in this case we console.log() the err and return from the file
            console.log(`theres an error: ${err}`);
            return
        }
        // this will be false if incorrect spelling - this is built in functionality form SpellChecker
        const spelledCorrect = dictionary.spellCheck(word);
        if (!spelledCorrect) {
            // will return an array based on the word
            const suggestions = dictionary.getSuggestions(word);

            console.log(`${word} is spelled incorrectly.  Did you mean: `, suggestions.join(" "))
        } else {
            console.log(`your word was ${word} it was spelled correctly`)
        }

    }); 
}

function checkWords(sentence) {
    // once again we initialize our SpellChecker code as isntructed by the docs
    SpellChecker.getDictionary("en-US", function(err, dictionary) {
        if (err) {
            console.log(`theres an error: ${err}`);
            return
        }
        // split my sentence so that we can test each individual word
        const sentenceArr = sentence.split(" ");
        // loop over sentenceArr
        for (let word of sentenceArr) {
            const spelledCorrect = dictionary.spellCheck(word);
            if(!spelledCorrect) {
                // grab a list of words unsing getSuggestions();
                const suggestions = dictionary.getSuggestions(word);
                // print a warning to the console ;
                console.log(`${word} is spelled incorrectly.  Did you mean: `, suggestions.join(" "))
            } else {
                console.log("word spelled correctly!")
                // do something else
            }
        }
        // this will be false if incorrect spelling
       

    }); 

}
// export the files 
module.exports = {
    checkWord,
    checkWords
}
