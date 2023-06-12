# Is Palindrome

## Problem 

Write a  function `isPalindrome` that takes a string as input and returns `true` if the string is a palindrome, and `false` otherwise. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

For example, the strings "racecar" and "Madam" are palindromes, while "hello" and "OpenAI" are not.

## Constraints
* The input string will contain only lowercase and uppercase letters and spaces.
* There is no need to contend for special characters

## Testing

To test your function, _**navigate to the algorithms directory**_ and run:

```
npm install

npm test isPalindrome.test.js
```

## Solutions

### Two Pointer (iterative)

#### The Two-Pointer Technique

<summary>
The two-pointer technique is a common approach used in algorithmic problem-solving, particularly when dealing with arrays, linked lists, or strings. It involves using two pointers or indices to traverse the data structure simultaneously, often from different ends or at different speeds, to perform certain operations efficiently.

<details>

```js

function isPalindrome(str) {
  let lowerCase = str.toLowerCase()
  let left = 0; // create first 'pointer' at start
  let right = str.length - 1; // create second 'pointer' at the end
    // iterate until they are equal (middle of word)
  while (left < right) {
    // return if they do NOT match
    if (lowerCase[left] !== lowerCase[right]) {
      return false;
    }
    left++; // move first pointer forward
    right--; // move second pointer backwards
  }
// if we get to end of iteration 
  return true;
}

```
</details>
</summary>

### Regex && Reverse

<summary>
The regular expression version of the isPalindrome function uses a combination of string manipulation and a regular expression pattern to determine if a given string is a palindrome. Here are the key steps:

Lowercase initial string;
invoke `.split('').reverse().join('')` to split the string into an array, reverse the array, and recompile to a string.

<details>

```js

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase
  const reversedStr = cleanedStr.split('').reverse().join('');

  return cleanedStr === reversedStr;
}

```

</details>
</summary>


