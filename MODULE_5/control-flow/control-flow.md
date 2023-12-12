# Control Flow

Control flow makes up the basic building blocks of programming.

## Learning Objectives

- Explain why we use control flow
- Name the basic building blocks
- Utilize conditionals and booleans
- Utilize if/else statements
- Write a for loop
- Combine the above to solve a problem

## Conditionals

Conditional statements help us determine what we should do. If you are doing a whiteboard interview, you can create a flowchart to help structure the code you will write.

[JavaScript Equality Table](https://dorey.github.io/JavaScript-Equality-Table/)

![Laboratory Troubleshooting Flowchart](https://cacoo.com/wp-app/uploads/2018/12/engineering-flow-chart.png)

We can convert this into code:





Will all run the code when `moving` is true? One difference is that the final one will test for a truthy value instead of the value `true`, which can make the last expression a little more flexible.

[Reference](https://dorey.github.io/JavaScript-Equality-Table/)

## Functions

Right now, we can only test if our item should move by going into the file and changing the values of `moving` and `shouldBeMoving`. The code will run immediately and only run once.

Functions allow us to create reusable blocks of code to control when and how many times they run.

Therefore, we can improve this code by putting it in a function.

Refactoring code can be challenging, and it takes practice. It is still recommended to work outside to refactor.

First, create the outer function.





## Print Primes

Now that we've reviewed the basic building blocks let's go through how to solve the Print Primes problem.

 . Write a function that takes an integer and then returns an array of all the prime numbers up to that value.

1. Do we understand all the words used in stating the problem?

- What is an integer?
- What is a prime number?
- Is 0 a prime number?
- Is 1 a prime number?
- Is 2 a prime number?
- Can a prime number be negative?
- How can we determine a number is prime?

2. What are we asked to show?

- An array of prime numbers

3. Restate the problem in your own words (it's ok if your words are more clumsy, you don't need the perfect phrasing, you need to clarify that you understand the problem, and one of the best ways to do that is to put it in your own words)

4. Is there enough information for you to find a solution?

- Is there any information that is missing?

5. What is our plan?


