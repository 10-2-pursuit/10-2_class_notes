/* .reduce() Mini Lecture

Learning Objectives

By the end of this lesson you should be able to:

- Describe the input and return values of `.reduce()`.
- Use `.reduce()` to solve code problems.

***** WHY .reduce()? *****
- .reduce() is a built in method that allows us to perform some kind of accumulation over an array. Remember the accumulator pattern? This method does all of that work for us!

- .reduce() can return any type of value depending on what we tell it to start with. This makes it both very versatile and very powerful!


***** ANATOMY OF .reduce() *****

    array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, initialValue)

    - REDUCER - the first argument we pass to the .reduce() method. This is the callback function that .reduce() will use to accumulate some value
    - ACCUMULATOR - the first parameter of our reducer function. this represents the current value at our current point in our iteration
    - CURRENT VALUE - the second parameter of our reducer function. this is represents our current element
    - INITIAL VALUE - ** optional ** this represents the value the initial value of our accumulator. our callback function will start with this value is we pass one in 

---
*/

/*
  SUM ALL NUMBERS
  ---------------
  Write a function that sums all numbers in an array.
*/

function sumAllNumbers(numbers) {
  return numbers.reduce((accumulator, currentValue)=> {
    return accumulator + currentValue 
  })
}

// console.log(sumAllNumbers([10, 20, 30])); //> 60
// console.log(sumAllNumbers([10, - 10])); //> 0
// console.log(sumAllNumbers([])); //> 0

/*
    PRESENT ALL STATES
    ---------------
    Write a function that adds all of the states below to a string. The string should be prefixed with "STATES: " and all states should be separated by a comma and a space.
  
    If there are no states, just print "STATES: ".
  */
function presentAllStates(states) {
  return states.reduce((accumulator, currentValue) => {
    return accumulator + currentValue + ", "
  }, "STATES: ")
}

// console.log(presentAllStates(["Alaska", "New York", "Florida"]));
//> "STATES: Alaska, New York, Florida, "
// console.log(presentAllStates([]));
//> "STATES: "

/*
    HAS SPACE
    ---------------
    Write a function that determines whether or not any of the states provided include a space (i.e. " ") in their name.
  */
function hasSpace(states) {
  return states.reduce((accumulator, currentValue) =>  {
 
    if(currentValue.includes(" ")){ 
      return !accumulator
    }
    return accumulator

  }, false)
}

// console.log(hasSpace(["Alaska", "New York", "Florida"])); //> true
// console.log(hasSpace(["Alaska", "Montana", "Florida"])); //> false

/*
    IS VALID
    ---------------
    Write a function that returns false if any state abbreviation is longer than two characters.
  */
function isValid(states) {
  return states.reduce((accumulator, currentValue) => {
    if (currentValue.length > 2){
      return !accumulator
    } else {
      return accumulator
    }
  }, true )
}

// console.log(isValid(["AK", "NYC", "FL"])); //> false
// console.log(isValid(["AK", "WA", "FL"])); //> true

/*
    KEBAB CASE
    ---------------
    Write a function that returns a new array of all the states in kebab casing.
  */
function kebabCase(states) {
  return states.reduce((accumulator, currentValue) => {
    // accumulator -> initial Value -> ["alaska", "new-york", "florida"]
    // currentValue -> "Florida"
    accumulator.push(currentValue.toLowerCase().replace(" ", "-"))
    return accumulator
  }, [])
}

// console.log(kebabCase(["Alaska", "New York", "Florida"]));
//> [ "alaska", "new-york", "florida" ]
// console.log(kebabCase([]));
//> []

/*
    FIND
    ---------------
    Write a function that looks for a state by name. If that state is found, return the state name. If it is not found, return `null`.
  */
function find(states, name) {
  return states.reduce((accumulator, currentValue) => {
    if(currentValue === name){
      return currentValue
    } else {
      return accumulator
    }
  }, null )
}

// console.log(find(["Alaska", "New York", "Florida"], "Alaska")); //> "Alaska"
// console.log(find(["Alaska", "New York", "Florida"], "Montana")); //> null

/*
    FILTER ABBREVIATIONS
    ---------------
    Write a function that filters out all strings equal to or longer than 3 characters. Return a new array with just the valid abbreviations.
  */
function filterAbbreviations(states) {
  return states.reduce((accumulator, currentValue) => {
    if(currentValue.length < 3){
      accumulator.push(currentValue)
    }
    return accumulator
  }, [])
}

console.log(filterAbbreviations(["AK", "MT", "WA", "NYC"]));
//> [ "AK", "MT", "WA" ]
console.log(filterAbbreviations(["Alaska", "New York", "Florida"]));
//> []
