// ************MONKEYPATCHING************

// #Instance methods
// To add an instance method to a class, you can add it as a property on the prototype property of the class.

// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

// Using the Book example, you can add a toString instance method on the Book class by adding it as a property on the prototype property of the Book class.

class Book {
    constructor(title, series, author){
        this.title = title
        this.series = series
        this.author = author
    }
}

Book.prototype.toString = function() {
    return `${this.title} by ${this.author}`;
  };
  
  const gobletOfFire = new Book(
    'The Goblet of Fire',
    'Harry Potter',
    'J.K. Rowling'
  );
//   console.log(gobletOfFire.toString()); // The Goblet of Fire by J.K. Rowling

  // Note: instance methods can be added this way to classes that are declared using both ES5 and ES6 syntax. But, like static methods, you cannot set arrow functions as values on the prototype object of a class. Try it out for yourself to see why!

// #Monkey-patching a class

// What is monkey-patching? Monkey-patching is changing the existing behavior of a class after it's been defined.

// Using ES5 class syntax, you can monkey-patch a class that has already been defined to extend or override its functionality.

// For example, you can add an instance method of helloWorld() to the already existing JavaScript String class to print out "Hello World".

String.prototype.helloWorld = function() {
  console.log("Hello World!");
}

const str = "";
str.helloWorld(); // => prints "Hello World!"

// This technique is mostly used when you want to add custom methods on existing built-in JavaScript classes like Array, String, and Object.

String.prototype.reverse = function() {
    let reversedString = this.split("").reverse().join("")
    return reversedString
}

let myString = "Gigi is super cool"
console.log(myString.reverse())