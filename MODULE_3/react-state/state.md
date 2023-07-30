# React State: Primitive Values

## Objectives

- Define state
- Explain the role of state in a React application
- Learn how to use event listeners and handlers in React
- Instantiate state in a React component

- Call set State to update State

## State
- `state` is React's way of storing, handling, and using information in a way that triggers a re-render upon change

## Hooks
- Hooks are a new feature of React that allow us to hook into a piece of React functionality.
- In order to use hook we must import them into our files from React and its related libraries

## useState
- `useState` is the most commonly used React hook. It allows us to create and manage state within our functional components
- In order to use the `useState` hook we must first import it from the react library
- The `useState` function gets called with a value that will become the default value of the part of state we are trying to create
- The value returned from useState is an array with two values
    - the first value is going to be our current state. this will default to the value we called `useState` with
    - second value is a function that we can use to update our state

## Setting up `useState`
- Create our functional component
- import `useState` from react
- create two variables by destructuring the array that isreturnedfrom `useState`
- use our first value to display the state value in our JSX
- use the second value to update our state in our JSX   
