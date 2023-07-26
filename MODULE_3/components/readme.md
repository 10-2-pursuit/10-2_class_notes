# React Components 7/25

## Quote of The Day
“Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.”
    – Samuel Beckett

## Agenda
* 7:00 - 7:45 - Intro / Components in the Wild
* 7:45 - 8:30 - Components Lecture 
* 8:30 - 8:45 - Break
* 8:45 - 10:00 - Lab


## React At a High Level
React is a popular JavaScript library for building user interfaces in web applications. It allows developers to create interactive and dynamic UIs by breaking down the application into reusable and manageable components. Each component represents a part of the user interface and encapsulates its logic, ensuring a clear separation of concerns.

### Components:
React's primary building blocks are components. Components are like building bricks that can be assembled and combined to create complex UIs. They are written in JSX, a syntax extension that combines HTML-like syntax with JavaScript expressions, making the code more concise and readable.

### Props:
To enable communication between components, React uses props. Props (short for properties) are a mechanism for passing data from one component to another. They allow components to be customizable and configurable, as data can be dynamically injected into a component when it is used. This enhances reusability, as the same component can be used with different data, serving various purposes across the application.

### State:
React's concept of state is what makes components dynamic and responsive. State represents the data that can change over time within a component. When the state of a component changes, React automatically re-renders the component, updating the UI to reflect the most recent data. By managing state, developers can build interactive applications that respond to user actions and external events.

The flow of data in React can be summarized as follows:

- Data flows from a parent component to its child components through props.
- Child components can modify their behavior or appearance based on the received props.
- When a component's state changes, React automatically triggers a re-render, updating the component's UI with the new state data.

By leveraging components, props, and state, React provides a structured and efficient approach to building complex user interfaces. It promotes code reusability, maintainability, and scalability, making it a powerful tool for modern web development.

###  JSX (JavaScript XML):

JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript files. It works hand-in-hand with React components, enabling them to describe the UI's structure and appearance. JSX expressions can embed JavaScript code, including variables, functions, and logic, which allows developers to dynamically generate content and customize components based on their props and state.

Curly braces `{ }` are special syntax in JSX. It is used to evaluate a JavaScript expression during compilation. A JavaScript expression can be a variable, function, an object, or any code that resolves into a value.

Parenthesis `()` are used to group multiline of codes on JavaScript return statement so to prevent semicolon inserted automatically in the wrong place.

```jsx
// declaring a simple HTML tag as a JS const variable
const title = <h1>Hello, World!</h1>;

// Passing a value to a JSX expression; 
const name = "John";
const greeting = <p>Hello, {name}</p>;
// Conditional rendering is 
const isLoggedIn = true;
const element = (
  <div>
    { isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in.</p> }
  </div>
)
;


```




## Components in the Wild

### Instructions

In this activity, you will have the opportunity to explore real-world React components on live websites. Working in groups, you'll play different roles to identify, observe, and note the components you find. Let's get started!


- Each group will be assigned a live website to explore.

- Each breakout room will decide on  one driver, one presenter, and one notetaker per group.
- Spend 10 minutes on the website assigned to your group.
- The driver should navigate the website, keeping an eye out for various components such as buttons, forms, navigation bars, etc.
- The presenter should observe and take note of the components identified by the driver.
- The notetaker should record any interesting observations about the components and their structure.




**Remember to focus on identifying different components and their characteristics during this activity. Enjoy exploring React components in action!**




## Today's Lab
[lab]()

## Today's Pairs








