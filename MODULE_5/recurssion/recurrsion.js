// Recursion - what is it?

//  A function that calls itself until it does not

//  CALL THE FUNCTION AGAIN OR STOP - THATS IT - NO MORE NO LESS

//  Each recursive function has a BASE case and a REDUCTIVE CASE case

// the BASE case ENDS the funciton 
// the REDUCTIVE  case is moves the function towards the base case - IT KEEPS GOING 

// Happy new year
// lets use recursion to write a countdown function for the new year
// what data type is a function? 
    // a function is an objet

// when we make a recurssive function
    // each invocation of the funciton - each time we execute it
    // creates an OBJECT
    // space complexity increases; 
const happyNewYear = (num) => {
  // we need two cases
  // a BASE CASE that ENDS the funciton
  if (num === 0) {
    console.log('HAPPY NEW YEAR!#@!#!@')
  } else {
    // and a REDUCTIVE CASE that keeps the function going
    console.log(`...${num}`);
    happyNewYear(num - 2) // each function waits for this to end 
  }
}

// happyNewYear(10);

  
  
  
  // Sum up the numbers
  // Write a function to add the following numbers together
  // 1,2,3,4,5,6,7,8,9,10
  const myNums = [1,2,3]
  // we are going to move through the array 
    // we are going to remove the top element of the array and add it to sum
        // then we keep going 
        
        // or we stop
        // default params are used if no val is passed
  const sumNums = (numsArr, sum = 0) => {
    // BASE - STOP
    if (numsArr.length === 0) {
        return sum
    }
    // REDUCTIVE - KEEP GOING
    sum += numsArr.shift();
    //sumNums([2,3], 1)
    return sumNums(numsArr, sum)
  }
 

  console.log(sumNums(myNums))


  
  
  //isEven - lets write a terribly inefficent funciton to determine if a number is even or not
  //  This function will have a base case if the number is 0 || 1 `
  //  This function will also have a reductive case recursively subtracting 2
const isEven = (num) => {
    // BASE CASE - STOP!
    if (num === 1) {
        return false
    } else if (num === 0) {
        return true
    }
    // REDUCTIVE CASE - HOW WE KEEP GOING
    return isEven(num - 2)
}

console.log(isEven(5))
console.log(isEven(50))


const fibonacci = (num) => {
    // base case
    if (num === 0) return 0
    if (num <= 2) return 1

    // reductive case
    return fibonacci(num - 1) + fibonacci(num - 2)

}
console.log(fibonacci(8))
/* 
fibonacci(5)
0, 1, 1, 2, 3, 5
fibonacci(23)
0, 1, 1, 2, 3, 5, 8, 13, 21

*/


  
  /*
    Fibonacci is a classic problem that shows up as examples in coding or as a problem to solve in a class or possibly on an interview. Since sequence shows up often, it is worthwhile to take the time to gain a solid understanding what the Fibonacci Sequence is and how to calculate it.
    Write a function that prints the nth number in the Fibonacci sequence:
    1.  Do we understand the problem?
  
    
    
 
    2.  Restate the problem in your own words
    using the argument passed through we will add numbers in the fibo sequence to reach the end number in the sequecen

    3. Ask Clarifying questions

    4.Code
   
  */
  

