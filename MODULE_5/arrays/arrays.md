# Array Methods

Arrays are versatile data structures, and understanding their methods is crucial for efficient programming. Let's explore some essential array methods in JavaScript.

## Learning Objectives

- Recognize the significance of arrays in programming
- Explore common array methods and their applications
- Implement custom array methods for problem-solving

## Array Methods

| Array Method | Description | Example |
|--------------|-------------|---------|
| `forEach`    | Iterates over each element in an array and executes a provided function. | See table for example |
| `map`        | Creates a new array by applying a provided function to each element of the original array. | See table for example |
| `filter`     | Creates a new array with elements that satisfy a provided condition. | See table for example |
| `findIndex` (Custom Implementation) | Finds the index of a string or number in an array without using the built-in `.indexOf` method. Returns the index if found, otherwise -1. Only returns the first index position if multiple matches exist. | See table for example |

## Problems

### Problem 1: Find the Index in an Array

Write a custom `findIndex` function that finds the index of a string or number in an array. If the item is found, return the index position; otherwise, return -1. The function should only return the first index position if multiple matches exist.

| Example |
|---------|
| `const letters = ["a", "b", "c", ...];` |
| `findIndex(letters, 'a')` should return 0. |
| `findIndex(letters, 2)` should return -1. |

### Problem 2: Loop the Loop

You are given a two-dimensional array that is always made up of an even number of items in the outer and inner arrays. Find the greatest sum - whether it is across, up/down.

Test case:

```javascript
const arr = [
  [10, 20, 30],
  [40, 50, 60],
  [70, -80, 90],
];

```

## Lab

### Part 1


[Complete these drills and submit to canvas](https://github.com/joinpursuit/m6-array-method-drills)

### Part 2  Accumulate Points on Codewars

- [Sum Mixed Array](https://www.codewars.com/kata/sum-mixed-array)
- [Gravity Flip](https://www.codewars.com/kata/5f70c883e10f9e0001c89673)
- [Array Flattener](https://www.codewars.com/kata/57ee99a16c8df7b02d00045f)
- [Descending Order](https://www.codewars.com/kata/5467e4d82edf8bbf40000155?utm_source=newsletter)
- [Wrong Planet](https://www.codewars.com/kata/515e188a311df01cba000003)
- [Zoo Patrol](https://www.codewars.com/kata/5276c18121e20900c0000235)
- [Beer Maid](https://www.codewars.com/kata/51e04f6b544cf3f6550000c1?utm_source=newsletter)
- [Snail](https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1)


### Part 3

[Self-guided lesson and lab on `.reduce()` method](https://github.com/joinpursuit/m6-array-reduce)
