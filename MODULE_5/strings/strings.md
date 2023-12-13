# Strings and Regular Expressions

## Learning Objectives

- Review strings and common string methods
- Explore regular expressions (BONUS)

## Strings and Array-Like Behavior

Strings in JavaScript are used to store a sequence of characters. They share some properties with arrays, allowing you to access specific letters at positions. However, unlike arrays, you cannot directly replace characters.

To access a portion of a string, you can use the `.substring` method. You can loop over strings using `for...of` or `forEach`, but array methods like `.reverse` won't work directly on strings.

## Useful String Methods

Here are some common string methods and their functionalities:

| Method         | Description                                   |
| -------------- | --------------------------------------------- |
| `charCodeAt`   | Returns the character code for a character.   |
| `fromCharCode` | Returns the letter/character from Unicode.    |
| `includes`     | Case-sensitive search for characters.        |
| `indexOf`      | Finds the index of a character.               |
| `padEnd`       | Adds whitespace to the end of a string.       |
| `padStart`     | Adds whitespace to the beginning of a string. |
| `repeat`       | Repeats a string by the given value.          |
| `slice`        | Returns a portion of a string based on position. |
| `substring`    | Returns a portion of a string based on length. |
| `toString`     | Converts other data types to strings.         |
| `trim`         | Removes whitespace from the ends of a string. |
| `JSON.stringify()` | Converts JSON to a string.                   |

### Regular Expression Methods

| Method   | Description                                     |
| -------- | ----------------------------------------------- |
| `search` | Searches for a specified value and returns the position. |
| `match`  | Looks for a match and returns true/false.        |
| `replace`| Replaces a value in the string.                 |

## Is a Palindrome?

To check if a word is a palindrome, you can reverse it and compare it to the original. Here's a basic implementation.

## Bonus: Refactoring and Edge Cases

- Refactoring the code for readability and conciseness.
- Handling edge cases, such as case-insensitivity.

## Disemvowel Trolls

Write a function to remove vowels from a word or sentence. Consider edge cases and refactor for better readability.

## Further Reading

Explore more about strings, array methods, and regular expressions in [Eloquent JavaScript](https://eloquentjavascript.net). Specifically, check out Chapter 1 for fundamental concepts and Chapter 9 for an in-depth look at regular expressions.


It's ok! Our solution works great; we didn't have `Regular Expressions` in our personal tool kit. Now, we have something new to study! Hooray!

[Let's Learn More](https://github.com/10-2-pursuit/unit-dsa/blob/main/strings/lesson-notes/README2.md)

## Further Reading

Eloquent JavaScript

[Chapter 1: Values, Types, and Operators](https://eloquentjavascript.net)

[Chapter 9: Regular Expressions](https://eloquentjavascript.net/09_regexp.html)
