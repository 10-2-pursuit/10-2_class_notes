// ******* OBJECTIVES *******
    // - Review fundamentals of objects
    // - Build and use nested objects

// ******* DEFINITIONS *******
    // OBJECTS:
        // - a collection of keys and values, commonly  referred to as properties
        // - represented with {}
        // - are reference types - mutable
    // KEYS:
        // - are how we access values in objects
        // - are unique
        // - are strings
    // VALUES:
        // - the result of using one of an objects keys
        // - can be anything: strings, numbers,  booleans, arrays, functions or other objects

// ******* COMPUTER EXAMPLE *******

const computer = {
    brand: "Tandy",
    weight: 22,
    working: false,
    condition: "mint",
    price: 2894,
    powerUp() {
      return "the computer now is on";
    },
    powerDown() {
      return "the computer is now off";
    }
  };

  // access a property
    // dot notation
        // console.log(computer.brand)
    // bracket notation
        const brand = "condition"
        // console.log(computer[brand]) 

  // iterate over an object
      for (let key in computer){
        //   console.log(key)
      }

      // Object.keys // gets all the keys in an obj
      // Object.values // gets all the values in an obj
      // Object.entries  - gives us key/value pairs in an array of subarrays
      // console.log(Object.entries(computer))

      const computerKeys = Object.getOwnPropertyNames(computer)
    //   console.log(computerKeys)
      for (let i = 0; i < computerKeys.length; i++ ){
        //   console.log(computer[computerKeys[i]])
      }

    // To call a function inside an object, we must invoke the function.
      const powerStatus = computer.powerDown()
    //   console.log(powerStatus)
    
    // To change a property, we can overwrite it.
      computer.price = 5;
    //   console.log(computer.price)

    // To add a property, we name the key and set a value.
      computer["color"] = "greige"
    //   console.log(computer.color)

// NESTED OBJECTS

  const backpack = {
    color: "green",
    contents: [
      "laptop",
      "paper",
      "phone",
      { wallet: ["money", "id", ["mastercard", "visa card", "discover card"]] },
      {
        pockets: {
          outer: ["metrocard", "tissues"],
          inner: {
            outer: "ruler",
            inner: ["dental floss", { mintFlavor: "peppermint", number: 33 }],
          },
        },
      },
    ],
    zipIt() {
      return "it is zipped";
    },
    unZipIt() {
      console.log("some items fell out");
      return {
        pickUpItems() {
          return ["lip balm", "comb", "38 cents"];
        },
      };
    },
  };

  // color
  // console.log(backpack.color) // "green"

  // contents
  //   console.log(backpack.contents) // ["laptop", "paper", "phone",{ wallet: ["money", "id", ["mastercard",    "visa card", "discover card"]]

  // contents of the wallet
  // console.log(backpack.contents[3].wallet) // ["money", "id", ["mastercard", "visa card", "discover card"]]

  // the mint flavor
  //   console.log(backpack.contents[4].pockets.inner.inner[1].mintFlavor) // peppermint

  // the return value of pickUpItems
  //   console.log(backpack.unZipIt().pickUpItems()) // ["lip balm", "comb", "38 cents"]

  // 38 cents
  // console.log(backpack.unZipIt().pickUpItems()[2]) // 38 cents

// ******* OBJECT DESTRUCTURING *******
  // Let's imagine we are building a web page that is showing all the contents of the backpack. We want be able to:

  //  pull out our contents
  const { contents } = backpack
//   console.log(contents)

  // we change the contents, the original object will be affected as well **BONUS** Why?
  contents[0] = "Tablet"
  //   console.log("just contents", contents)
  //   console.log("backpack", backpack.contents)

  // console.log(contents)

  // rename the key
  const { wallet: clip } = contents[3]
//   console.log(clip)

// ******* COMBINING OBJECTS ******* 

const box = {
  brand: "Apple",
  joystick: "Classic Vintage 1000",
  keyboard: "Keyfun 5000",
  working: "true",
};
// Let's go back to our computer. We have scored a box and want to combine the contents with our computer.

  // Using Object.assign
    //   const newComputer = Object.assign(computer, box)
    //   console.log(newComputer)
    //   console.log(computer)
    //   console.log(box)

  // without mutating original
    //   const newComputer = Object.assign({}, computer, box)
    //   console.log(newComputer)
    //   console.log(computer)
    //   console.log(box)


  // Using the rest operator
  const restComputer = { ...box, ...computer}
//   console.log(restComputer)

  // Shortcut for adding key value pairs
  const a = 5;
  const b = "hello";
  const c = true;

  const someObject = {
      a,
      b,
      c,
    };
  
  console.log(someObject)
  

// ******* WORD FREQUENCY ********
  // Write a function findWordFrequency that takes a sentence (a string), and returns an object with each word as a key, with a value of how many times that word appears in a the sentence 

  // Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo
  // { buffalo: 5, Buffalo: 3}

  // - convert the sentence to an array of words
  // - loop over the words
  // - if the word doesnt exist in our object set it as a key equal to 1
  // - else add one to the value in the obj

  const buffaloSentence =
"Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo";

const wordCounter = (sentence) => {
  const wordsArray = sentence.split(" "); // ["Buffalo",  "buffalo"]
  let frequency = {}

  for (let word of wordsArray){
      // if (frequency[word]){
      //     frequency[word] ++
      // } else {
      //     frequency[word] = 1
      // }
      frequency[word] = (frequency[word] || 0) + 1
  }

  return frequency
}

const mostFrequent = (wordObject) => {

  let highestCount = 0;
  let currentMostFrequent = null

  for (let word in wordObject){
      if (wordObject[word] > highestCount){
          highestCount = wordObject[word]
          currentMostFrequent = word
      }
  }

  return {[currentMostFrequent]: highestCount}
}

// console.log(mostFrequent(wordCounter(buffaloSentence)))