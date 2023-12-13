// Is a String  a primitive?  YES
// what is a primitive data type?
let myStr = "hello";

let split = myStr.split("");

split[0] = "B";

let joined = split.join("");

console.log(joined, " < ------ this is split Tim");

/* 
    Write a function isPalindrome that takes a single word as an argument and determines whether it is a palindrome. A palindrome is a word that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.
*/

// 1 - Restate : what is the problem asking of us?
// we need to determine if a word is spelled the same forwards and backwards

    // racecar => palindrome
    // radar => palindrome
    // cookie = NOT palindrome

// 2 - Clarify: Do we know enough to solve this?  Do we need to ask clarifying questions

// What is our input?
    // our input is a single string
// What are we returning?
    // TYPE boolean to determine if the word is in fact palindromic
// What TYPES are we dealing with
    // we may use an array in this - keep this in mind

// 3 - Plan our approach
    // compare  our word  to our word but reversed;
        // split the string into an array
            // then use reverse() to flip the array
                // join the array back togehter to make a string again
                    // then compare the original string with our flipped string
                    // if they are equal return true
                    // otherwise return false
// solution one - flip reverse compare
const flipPalindrome = (word) => {
    return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
}


/*
    TWO POINTER APPROACH 

    The term "two pointer" refers to a programming technique that involves using two pointers to traverse a data structure, usually an array or a linked list. This technique is often employed to solve problems that require iterating or comparing elements in a more efficient way than a naive approach.

*/
const isPalindrome = (word) => {
// set two differnt pointers
    // one to the front of the string
    let left = 0;
    // and one to the back
    let right = word.length - 1;
  // while the front pointer is less than the back
  while (left < right) {
    // if the chars aren't a match 
    if (word[left].toLowerCase() != word[right].toLowerCase) {
        // not a palindrome
      return false;
    }
    // otherwise itterate left forward
    left++;
    // iterate right backwards
    right--;
  }
  return true;
};


// ASSERTION

console.log(isPalindrome("radar"));
// Output: true

console.log(isPalindrome("apple"));
// Output: false

console.log(isPalindrome("level"));
// Output: true

console.log(isPalindrome("Able"));
// Output: false

console.log(isPalindrome("Deified"));
// Output: true
