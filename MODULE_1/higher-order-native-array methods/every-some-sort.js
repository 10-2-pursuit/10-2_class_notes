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

- What is a native array method?

- What does it mean for a function to produce side effects?

- What does it mean for a function to return a value?

- Is it possible for functions that return values to also produce side effects?

- What is a callback function?

*/
 //  Lets declare some functions before we dive into the lesson
/**
 * Checks if the given comic is a web comic.
 *
 * @param {Object} comic - An  object representing a comic.
 * @returns {boolean} - `true` if the comic is a webcomic, `false` otherwise.
 */
const isWebComic = () => {

}
/**
 * Checks if the given array of comics all have titles.
 *
 * @param {Object[]} comics - An array of objects representing comics.
 * @returns {boolean} - `true` if the array is valid, `false` otherwise.
 */

const allComicsHaveTitles = () => {

}

/**
 * Checks if the given array of comics are print.
 *
 * @param {Object[]} comics - An array of objects representing comics.
 * @returns {boolean} - `true` if the array is valid, `false` otherwise.
 */

const allComicsArePrint = () => {
   
}




// every()  - what is it and why do we use it?
    // what does the name tell us?
    

// The `.every()` method expects at least one argument. What data type is this argument?

// The `.every()` method's callback function has up to three parameters. What are these parameters?

// some() - what is it and why do we use it?
    // what does the name tell us?

// - How does the `.some()` method differ from the `.every()` method? How is it similar?
  
    
// sort()- what is it and why do we use it?
    // what does the name tell us?

//- Calling the `.sort()` method looks like it might magically work, depending on the elements in the array it is sorting.
 
const numbers = [4, 2, 3, 1, 0];

// how would we sort numbers using .sort()

// The `.sort()` method expects one argument. What data type is this argument?

// The `.sort()` method's callback function has up to two parameters. What are these parameters?

// The `.sort()` method's callback function expects a number to be returned. 
    // The number must either be a positive number, a negative number, or `0`. 
        // What is the effect of each of these values?
            // Why would sort be built in this way?

//  Is `.sort()` a destructive or non-destructive method?

// Take a look at the table below. What does each column mean?


/* 
  | Method     | Callback expected return value | Method return value | Destructive? |
  | ---------- | ------------------------------ | ------------------- | ------------ |
  | `.every()` | Boolean.                       | Boolean.            | No.          |
  | `.some()`  | Boolean.                       | Boolean.            | No.          |
  | `.sort()`  | Number.                        | An array.           | Yes.         |
*/
            