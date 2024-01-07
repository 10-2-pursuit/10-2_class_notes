// our find index

// Custom findIndex implementation
const findIndex = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

const letters = ["a", "b", "c", "d", "e", "a"];

console.log(findIndex(letters, "a")); // should return 0
console.log(findIndex(letters, "z")); // should return -1

// 0: Read the prompt out loud - including examples and constaints
// make sure you know the your answering the right question
// 1: restate the quiestion on your own words
//  you know how to communcaite
// you can explain complex problems - hopefully succinctly
// want to establish realtionship with interviewer - they MIGHT help you

// Anthony: return greatest sum on items in the array by either row or column
// 2 - ask clarifying questions;
// edge case: can we have empty values?
// there will be no empty arrays
// the array length and the length of the arrays IN the array are equal
// all items in the array are positive numbers
/* 
      Loop the Loop
      Make a function that takes one argument, a two-dimensional array, where all the arrays are the same length, and returns the greatest sum of the numbers by row and column.
  
  */

 // 3 do we know enough to start a solution?
 // 
 //  180
 // we looped through the rows
 // then we looped through the cols
const arr = [
  [10, 20, 30], //
  [40, 50, 60], //
  [70, -80, 90], // 
];
// we have a matrix - what is a matrix?
    // we have an array of arrays;
// nested loops - what does this mean?
    // a loop that is iterated for EACH iteration of another loop

const loopTheLoop = (matrix) => {
    // set an array for our sums
    const sums = [];
    // iterate over each row
    for (let i = 0; i < matrix.length; i++) {
        // create vars to hold sum row and col
        let rowSum = 0; //10
        let colSum = 0; //10
        // loop again
        for (let j = 0; j < matrix[i].length; j++) {
            // add each individual item to our sum
            rowSum += matrix[i][j]; // matrix[0][2]
            colSum += matrix[j][i]; // matrix[2][0]
        }
        // take the sum and push to an array
            // because we need to return the highest val from all the sums
        sums.push(rowSum);
        sums.push(colSum);
    }

    return Math.max(...sums);
   
};


// the reason we get undefined without a return in JS
// is that ALL JS functions return SOMETHING
    // even if not specified they will return undefined
console.log(loopTheLoop(arr)); //180
