const { comics } = require("./comics");
/*

Learning Objectives

By the end of this lesson you should be able to:

- Describe the input and return values of `.every()`.
- Use `.every()` to solve code problems.
- Describe the input and return values of `.some()`.
- Use `.some()` to solve code problems.
- Describe the input and return values of `.sort()`.
- Use `.sort()` to solve code problems.

---


A lil' review 

- What is a higher order function?
    // funcitons that return functions || function can accept a function as a parameter

- What is a native array method?
  // Javascript built in higher order functions that maniuplate arrays 
  // each of these requires a callback - the way we want the method to execute

    // native - meaning built in
        // array - meaning a special kind of object 
            // method - meaning a built in function

// Tim's top five methods you better have in an interview
   
    // .forEach()
    // .map() => this is a react Dev's bread and butter
    // .filter() => very useful for manipulating data
    // .find() => very useful
    // .sort() => its ok to look this up because it's weird but you should know how it works

- What does it mean for a function to produce side effects?
    // side-effects are when a function alters information outside of the params;

- What does it mean for a function to return a value?
    //  a return allows a function to output some information FROM ITS SCOPE

- Is it possible for functions that return values to also produce side effects?
    // they can do both 
        //  we should not do that
        // its confusing to build functions that way;
        // we want a function to do ONE THING and that's it;

-  What is a helper function?     
    a function that is used to support another funciton;
    in JS we prepend with a `_` to flag that it is a `private method`

- What is a callback function?
    // a function that we pass to another function 
        // a callback is the HOW for the method
          if we want to map() over an array and return a new array
            the callback is HOW we want to change the data
            
        if we want to filter an array 
            the callback is HOW we want to filter it

*/
 //  Lets declare some functions before we dive into the lesson

/**
 * Checks if the given comic is a web comic.
 *
 * @param {Object} comic - An  object representing a comic.
 * @returns {boolean} - `true` if the comic is a webcomic, `false` otherwise.
 */
// lets look at our data and find what we're working with

// we're checking if a comic has a certain attribute - is a webcomic
const isWebComic = (comic) => {

}

// console.log(isWebComic(comics[0]), "this is from line 81")
/**
 * Checks if the given array of comics all have titles.
 *
 * @param {Object[]} comics - An array of objects representing comics.
 * @returns {boolean} - `true` if the array is valid, `false` otherwise.
 */
let name = "tim"
const allComicsHaveTitles = (comics) => {
  for (let comic of comics) {
    
    const titleOfComic = comic.title;
    if (!titleOfComic) {
      return false;
    } 
  }
  return true
};
// console.log(allComicsHaveTitles(comics)," this is line 97")
/**
 * Checks if the given array of comics are print.
 *
 * @param {Object[]} comics - An array of objects representing comics.
 * @returns {boolean} - `true` if the array is valid, `false` otherwise.
 */
// Shanice effect - how to fix this one 
    // prove one thing false and not everything true
const allComicsArePrint = (comics) => {
  for (let comic of comics) {
    if (comic.kind != "print") {
      return false;
    }
  }
  return true;
};

// console.log(allComicsArePrint(comics), " hello from line 115");






// .every()  - what is it and why do we use it?
    // tests whether all elements in the array pass the test passed to the function implemented in the function
    // every will return true if every single element of the array passed the test
    // every will return false if ONE of these fails
    // returns either true or false
// what does the name tell us?
// the name every() - informs us that its testing if every element does in fact pass;


// console.log(numbers.every((num) => {
//     return num > 10
// }), "this is the result of line 133")
// one liner can be easier to read with this function
// console.log(numbers.every(num => num > -1))
    
// console.log(comics.every(comic => comic.kind), " hello from 139")
// The `.every()` method expects at least one argument. What data type is this argument?
    // we need to pass a callback to every() 
        // we do this because we need to tell it what to check for 

// The `.every()` method's callback function has up to three parameters. What are these parameters?
    // array, index, element


// some() - what is it and why do we use it?
// very similar to every - returns a true or false based on the test we pass as a parameter
    // what does the name tell us?

// - How does the `.some()` method differ from the `.every()` method? How is it similar?
    // some returns true if any of the items in the array pass
    // console.log(numbers.some(num => num > 2), " hello from 155")
    
    
    // sort()- what is it and why do we use it?
    // .sort() sorts an array in the manner in which we tell it; 
    // what does the name tell us?
    
    //- Calling the `.sort()` method looks like it might magically work, depending on the elements in the array it is sorting.
const numbers = [4, 2, 3, 1, 0, -15, -100, 11];
// if the value is greater than 0 - we swap currentElement && nextElement
    // if its less than 0 we do nothing 
    // same if it is 0
    // however we want it sorted must ultimately return a >0 - if we want to switch spots, or <0 if we want to not 
numbers.sort((currentElement, nextElement) =>  { 
    return currentElement - nextElement
});
console.log(numbers)

// how would we sort numbers using .sort()

// The `.sort()` method expects one argument. What data type is this argument?

// The `.sort()` method's callback function has up to two parameters. What are these parameters?

// The `.sort()` method's callback function expects a number to be returned. 
    // The number must either be a positive number, a negative number, or `0`. 
        // What is the effect of each of these values?
            // Why would sort be built in this way?

//  Is `.sort()` a destructive or non-destructive method?
    // sort will NOT return a new array - sory will mutate the array that it is called on

// Take a look at the table below. What does each column mean?


/* 
  | Method     | Callback expected return value | Method return value | Destructive? |
  | ---------- | ------------------------------ | ------------------- | ------------ |
  | `.every()` | Boolean.                       | Boolean.            | No.          |
  | `.some()`  | Boolean.                       | Boolean.            | No.          |
  | `.sort()`  | Number.                        | An array.           | Yes.         |
*/
// we use every to test a function against every single item in the array.  If all items pass the test; we return true
// we use some to test a function against all items in the array.  If ANY item passes we return true;  else we return false
// sort() => sort is used to sort the contents of our array by a given callback.  If no callback is provided - we sort the items as string in ascending order;
    // any custom sort function will swap the poisition of the items IF the return from the funciton is < 0;  otherwise they remain the same

    comics.sort((current, next) => {
        if (current.title.length > next.title.length) {
            return 1
        } else {
            return -1
        }
    })
    console.log(comics)
            
    /*
        Hey Ya'll if you want a bonus try our Snowman challenge here
         https://github.com/10-2-pursuit/snowman-cli-challenge
    */