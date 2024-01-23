// ************OOP PART 3-BONUS************
  // Programmers from the junior to senior level often confuse scope and context as the same thing - but that is not the case! Every function that is invoked has both a scope and a context associated with that function. Scope refers to the visibility and availability of variables, whereas context refers to the value of the this keyword when code is executed.

  // # WHAT ABOOUT `this`?
  // When learning about objects you previously came across the idea of a method. A method is a function that belongs to an object.

  // There will be times when you will have to know which object a method belongs to. The keyword `this` exists in every function and it evaluates to the object that is currently invoking that function. So the value of this relies entirely on where a function is invoked.

  // class Dog {
  //   constructor(name, isSitting) {
  //     this.name = name;
  //     this.isSitting = isSitting;
  //   }
  
  //   stand() {
  //     this.isSitting = false;
  //     return this.isSitting;
  //   }
  // }
  
  // let dog = new Dog("Bowser", true);
  
  // Bowser starts out sitting
  // console.log(dog.isSitting); // prints `true`
  
  // Let's make him stand
  // console.log(dog.stand()); // prints `false`
  
  // He's actually standing now!
  // console.log(dog.isSitting); // prints `false`

  // Inside of a method, you can use the keyword this to refer to the object that is calling that method. So when calling dog.stand() and you invoke the code of the stand method, this will refer to the dog object.

  // class Cat {
  //   purr() {
  //     console.log("meow");
  //   }
  
  //   purrMore() {
  //     this.purr();
  //   }
  // }
  // let cat = new Cat();
  
  // cat.purrMore();

  // Through the this variable, the purrMore method can access the object it was called on. In purrMore, you use this to access the cat object that has a purr method. In other words, inside of the purrMore function if you had tried to use purr() instead of this.purr() it would not work.

// When you invoked the purrMore function using cat.purrMore you used a method-style invocation.

// Method style invocations follow the format: object.method(args). You've already been doing this using built in data type methods. (i.e. Array.push, String.toUpperCase, etc.)

// Using method-style invocation (note the dot notation) ensures the method will be invoked and that the this within the method will be the object that method was called upon.

// Now that you know what this refers to - you can have a full understanding of the definition of context. Context refers to the value of this within a function and this refers to where a function is invoked.

// # Issues with scope and context

// In the case of context, the value of this is determined by how a function is invoked. In the above section you saw briefly method-style invocation, where this is set to the object the method was called upon.

// Let's now talk about what this is when using normal function style invocation.

function testMe() {
  console.log(this);
}

// testMe(); // Object [global] {global: [Circular], etc.}

// When you run the above testMe function in Node you'll see that this is set to the global object. To reiterate: each function you invoke will have both a context and a scope. So even functions in Node that are not defined on an object have the global object as their this and therefore their context.

// # When methods have an unexpected context

// So let's now look at what happens when you try to invoke a method using an unintended context.

// Say you have a function that will change the name of a dog object:

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }

//   changeName() {
//     this.name = "Layla";
//   }
// }

// Now say you wanted to take the changeName function above and call it somewhere else. Maybe you have a callback you'd like to pass it to another object.

// Let's take a look at what happens when you try to isolate and invoke just the changeName function:

class Dog {
  constructor(name) {
    this.name = name;
  }

  changeName() {
    this.name = "Layla";
  }
}

let dog = new Dog("Bowser");

// Note this is **not invoked** - you are assigning the function itself
let change = dog.changeName;
// console.log(change()); // TypeError, due to not recognizing a valid context

// Your dog still has the same name!
// console.log(dog); // { name: 'Bowser', changeName: [Function: changeName] }

// So in the above code notice how you stored the dog.changeName function without invoking it to the variable change. On the next line when you did invoke the change function you can see that you did not actually change the dog object as intended.

// Let's look at one more example of confusing this when using a callback. Incorrectly passing context is an inherent problem with callbacks. The global.setTimeout() method on the global object is a popular way of setting a function to run on a timer. The global.setTimeout() method accepts a callback and a number of milliseconds to wait before invoking the callback.

// Let's look at an example:

let hello = function () {
  console.log("hello!");
};

// global. is a method of the global object!
// global.setTimeout(hello, 5000); // waits 5 seconds then prints "hello!"
// Let's say you wanted your cat to "meow" in 5 seconds instead of right now:

class Cat {
  purr() {
    console.log("meow");
  }

  purrMore() {
    this.purr();
  }
}
let cat = new Cat();

global.setTimeout(cat.purrMore, 5000);  
// 5 sec later: TypeError: this.purr is not a function

// So what happened there? You called cat.purrMore so it should have the right context right? Noooooope. This is because cat.purrMore is a callback in the above code! Meaning that when the global.setTimeout function attempts to call the purrMore function all it has reference to is the function itself. Since setTimeout is on the global object that means that the global object will be the context for attempting to invoke the cat.purrMore function.


