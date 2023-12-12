
// checking to see if isMoving is TRUTHy
// 0, NaN, undefined, null 
const checkIfWeNeedTapeOrGreaseOrNothing = (isMoving, shouldBeMoving) => {
    if (isMoving) {
        if (shouldBeMoving) {
            console.log("not a problem everything ok!");
        } else {
            console.log("go get some duct tape");
        }
    } else {
        if (!shouldBeMoving) {
            console.log("not a problem everything ok!");
        } else {
            console.log("get the WD-40");
        }
    }
}

// checkIfWeNeedTapeOrGreaseOrNothing(true, false)
// checkIfWeNeedTapeOrGreaseOrNothing(false, false)
// checkIfWeNeedTapeOrGreaseOrNothing(false, true)






/*
Write a function that takes an integer and then returns an array of all the prime numbers up to that value.

why are we starting with maaaaath?

Calling printPrimes(10) should output: [2, 3, 5, 7].

Calling printPrimes(20) should output: [2, 3, 5, 7, 11, 13, 17, 19].

Calling printPrimes(5) should output: [2, 3, 5].

*/  

// 1 - do we understand the problem

    // restate the problem in your own words
    // return an array of all prime numbers up to the input integer;

    // what is a prime number?
        // a number that is only evenly divisible by itself and 1;

        // how do we find out if a number is a prime number?
        // if we can divide a number evenly by ANYTHING other than itself and 1 - its not prime
        // how do we know 8 is NOT a prime number?
            // 8/2 = 4 we know thats not prime
            // how do we know 9 isnt a prime number?
            // 9 / 3 = 3 its not a prime

// 2 - do we have enough information to get a solution?

    // if we can check every number up until the input and see if it is a prime
        // we can push primes into an array
        // return the array of primes

// 3 - can we build steps to reach that solution

// 4 COOOOODE
// accept a number - and return whether or not it is a prime
// num = 10 
// we need to check what to find if something is prime?
// if we can divide a number evenly by ANYTHING other than itself and 1 - its not prime
// check every number until what 

function isPrime (num) {
    if (num < 2) {
        return false;
    } if (num === 2) {
        return true
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0 ) {
            return false
        }
    }
    return true;
}
// upperLimit = 10
function printPrimes (upperLimit) {
    const primes = [];
   // loop over 
    for(let i = 2; i <= upperLimit; i++) {
        // check if each number along the way is prime
        if (isPrime(i)) {
            primes.push(i)
        }
    }
    return primes
}

console.log(printPrimes(10)) 
console.log(printPrimes(20)) 
console.log(printPrimes(5)) 




/* 

Calling printPrimes(10) should output: [2, 3, 5, 7].

Calling printPrimes(20) should output: [2, 3, 5, 7, 11, 13, 17, 19].

Calling printPrimes(5) should output: [2, 3, 5].


*/