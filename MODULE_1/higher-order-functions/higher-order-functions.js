// lets decalre a function that can return a split string;
// is this a higher order function?
    // split string is a normal function
    // helper functions are designed to only be used by other functions
const _splitString = (str) => {
    return str.split("")
}

const _capitalize = (str) => {
    return str.toUpperCase()
}

// let myStr = splitString("tim messed up the notes");
// console.log(myStr)
// create a function that can transform a string in many different ways
    // how do we need to set this up?
    // because this is a higher order function it must accept or return a  function

    // Str and func are just placeholders for what we’re adding in code block? - anthony 100% correct
    /* 
      this is what is happening in the execution of our fiunciton w/ splitString
      (str) => {
        return str.split("")
      }
    */
   // this is higher order - because it accepts a FUNCTION as a parameter
   //  a higher order function accepts something, and then some stuff to do it;
      // what is CALLBACK function?
        // any function used as a parameter 
const stringTransformer = (str, func, func2) => {
    let newStr = func(str);
    newStr = func2(newStr)
    return newStr
}
let myStr2 = "this is cool!"
//when we invoke our higher order function function   
    // we need to TARGET SOMETHING,  and then TELL THE FUNCTION WHAT TO DO TO IT
console.log( stringTransformer(myStr2, _capitalize, _splitString) )

//  Higher order functions to remember in JS
    // .filter()
        // reutrns elements that satisfy a callback function 
    // .map()
        // returns a new array after performing SOME WORK on every element
    // .find()
        // returns the first element that SATISFIES THE CALLBACK 
    // .some()
        // will return a true if SOMEHTING in the array satsfies the condition
    // .sort()
        // returns array that is sorted IN THE WAY WE TELL IT


// stringTransformer is a function
    // it needs to be invoked
        // it has 2 parameters
            // the second MUST BE A FUNCTION
          





// Take a look at the functions below. Are any of the functions a higher-order function? 
//If so, which ones and why so? If not, why not?

function truthy() {
    return true;
}

function falsy() {
  return !truthy();
}

falsy();

//Take a look at the functions below. Are any of the functions a higher-order function? 
//If so, which ones and why so? If not, why not?

function left() {
  return "Left";
}

function right() {
  return "Right";
}

function go(goLeft = true) {
  if (goLeft === true) {
    return left;
  } else {
    return right;
  }
}

// Take a look at the functions below. Are any of the functions a higher-order function? 
// If so, which ones and why so? If not, why not?


const directions = [];

function storeDirections(direction) {
  directions.push(direction);
}

function go(direction, operation) {
  operation(direction);
  return direction;
}

go("Left", storeDirections);
go("Right", storeDirections);
go("Up", storeDirections);
console.log(directions); //> ["Left", "Right", "Up"]


// Take a look at the higher-order function below. The `transform()` function expects, as its second argument, a function that accepts at least one argument.

function transform(text, fn) {
  if (typeof fn !== "function") {
    return text;
  }

  return fn(text);
}


// Use the function above to transform the text in the following ways. For each line below, you will need to write an anonymous function.

/* 
    "left" -> "LEFT"
    "RiGhT" -> "right"
    "left right left" -> "left-right-left"
    "up Down left" -> "UDL"
*/
