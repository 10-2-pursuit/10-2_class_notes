// ************CALL AND APPLY************

// While bind returns a function that can be called multiple times with the given context, call and apply will invoke the bound function immediately, returning the return value from that function.

// Here's an example of how they're used:

// assigning return of func.call() to a variable
// let callReturn = func.call(context, ...args); 

// assigning return of func.apply() to a variable
// let applyReturn = func.apply(context, [...args]);

// The first argument for both is the this that you want to bind the function's context to. The only difference between the two comes in the remaining arguments:

// Apply takes in an array of arguments while call spreads them out in comma-separated values. You can remember this by thinking: a is for array and c is for comma.

// So to bring back the Cat and Dog example, here's how you could make Fido meow:

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Cat {
  constructor(name) {
      this.name
  }
  purrNTimes(n) {
      for(let i = 0; i < n; i++) {
          console.log(`${this.name} says: meow`);
      }
  }
}

let dog = new Dog('Fido');
let cat = new Cat('Meowser');

// make Fido meow 5 times using `call`
cat.purrNTimes.call(dog, 5);

// make Fido meow 5 times using `apply`
cat.purrNTimes.apply(dog, [5]);

// Notice that call and apply are essentially interchangeable and follow the same rules as bind with the main difference being that call and apply invoke the function they're being called on, whereas bind returns the function with its context set.



