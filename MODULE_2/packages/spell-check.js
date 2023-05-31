// This file will be responsible for invoking the `SpellChecker` pacakge and handling our spellcheck logic
const SpellChecker = require("simple-spellchecker");

function checkWord(word) { 
    SpellChecker.getDictionary("en-US", function(err, dictionary) {
        if (err) {
            console.log(`theres an error: ${err}`);
            return
        }
        // this will be false if incorrect spelling
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
    SpellChecker.getDictionary("en-US", function(err, dictionary) {
        if (err) {
            console.log(`theres an error: ${err}`);
            return
        }
        // split my sentence
        const sentenceArr = sentence.split(" ");
        // loop over sentenceArr
        for (let word of sentenceArr) {
            const spelledCorrect = dictionary.spellCheck(word);
            if(!spelledCorrect) {
                // do something
                const suggestions = dictionary.getSuggestions(word);
                console.log(`${word} is spelled incorrectly.  Did you mean: `, suggestions.join(" "))
            } else {
                console.log("word spelled correctly!")
                // do something else
            }
        }
        // this will be false if incorrect spelling
       

    }); 

}

module.exports = {
    checkWord,
    checkWords
}
