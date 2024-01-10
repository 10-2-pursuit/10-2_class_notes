// what does OOP stand for?
    // OBJECT ORIENTED PROGRAMMING
    // keyword is OBJECT

    // everything in OOP is focused around OBJECTS

    // what are the important featrues of an OBJECT
        // KEY VALUE PAIRS

        // they keep things organized
            // they are FAST
            // what is the big O of object lookup? O(1)
            // it takes one action to get the value at a key

        // its like looking for a person AT THEIR ADRESS
        // rather than looking through QUEENS

// OOP  has reusability

let myHorse = {
    name:"Buttons",
    type:"miniature horse",
    age:10,
    greeting: "sniff sniff",
    walk:"clip clop"
}

let dwaynesHorse = {
    name:"Furious",
    type:"GIANT",
    age:5,
    greeting: "nnaaaaaa",
    walk:"Tap tap atap"
}

console.log(constructor)
// a class is a blueprint for an object 
class Animal {
     
    constructor(
        nameWePassedIn,
        typeWePassedIn, 
        ageWePassedIn, 
        colorWePassedIn, 
        isCoolWePassedIn
        ) {
        // this in JS is like a mirror 
            // it tells JS to target the thing that called the function
        this.name = nameWePassedIn
        this.type = typeWePassedIn,
        this.age = ageWePassedIn,
        this.color = colorWePassedIn,
        this.isCool = isCoolWePassedIn;

    }
    // we can add methods to make our objects DO STUFF
    walk() {
       console.log("HEY I'M WALKING HERE!@#!") 
    }
    // it is possible to pass values to CLASS METHODS
    eat(food) {
        console.log(`nom nom nom thanks for the ${food}`)
    }

    sayHi(otherAnimal) {
        console.log(`Greetings ${otherAnimal.name}`)
    }

    ageUp(num) {
        this.age += num;
    }


};

// here we are creating instances of our ANIMAL class OBJECTS
const buttons = new Animal("Buttons", "Polo Pony", 12, "Transluscent", "hell yeah!@#!" );
const cinimaon = new Animal();

console.log(buttons, `hey buttons is ${buttons.age} years old`)
buttons.eat('chocolate cake');
buttons.ageUp(50);

console.log(buttons.age)


cinimaon.sayHi(buttons);



