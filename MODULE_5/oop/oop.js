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
        isCoolWePassedIn,
        walkStyle
        ) {
        // this in JS is like a mirror 
            // it tells JS to target the thing that called the function
        this.name = nameWePassedIn
        this.type = typeWePassedIn,
        this.age = ageWePassedIn,
        this.color = colorWePassedIn,
        this.isCool = isCoolWePassedIn;
        this.walkStyle = walkStyle || "Walka, walka"
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
    greet(otherBeing){
      console.log(`Sniff, sniff ${otherBeing}`)
    }
    classyGreeting(otherClassyBeing){
      console.log(`Howdy there, ${otherClassyBeing.name}`)
    }
    ageUp(){
      this.age++
    }

};

// here we are creating instances of our ANIMAL class OBJECTS
const buttons = new Animal("Buttons", "Polo Pony", 12, "Transluscent", "hell yeah!@#!", "clip, clop" );
// const cinnamon = new Animal();

// console.log(buttons, `hey buttons is ${buttons.age} years old`)
// buttons.eat('chocolate cake');
// buttons.ageUp(50);

// console.log(buttons.age)


// cinimaon.sayHi(buttons);

// ********** Inheritance *********

//    In our world of animals, let's say there is a new kind: Mythical creature. 
//    The mythical creature will have all the properties of methods as an animal and some additional ones. 
//    We could copy our Animal class and paste it and add more, but what if we need to change the greet function? 
//    Then we would have to find every place we copy/pasted and carefully update. 
//    We are going to keep our animal as our one source of truth as a parent class.
        
// */

// Let's EXTEND our class to MythicalCreature
class MythicalCreature extends Animal {
  constructor(nameWePassedIn,
    typeWePassedIn, 
    ageWePassedIn, 
    colorWePassedIn, 
    isCoolWePassedIn,
    walkStyle){
      super(nameWePassedIn,
        typeWePassedIn, 
        ageWePassedIn, 
        colorWePassedIn, 
        isCoolWePassedIn,
        walkStyle)
      this.powers = ["super strength", "fire-breathing", "flight"]
    }
  grantWish(wish) {
    console.log(`I have granted you your wish to ${wish}`);
  }
  walk() {
    super.walk()
    console.log(`To the left, take it back now y'all!${this.walkStyle}`)
  }
  greet(otherBeing){
    super.greet(otherBeing)
    console.log('I am pleased to meet you')
  }

}


  const memphis = new MythicalCreature(
    "Memphis",
    "dragon",
    62,
    "blue",
    true,
    "Woosh, woosh"
  );

  console.log(memphis);
  memphis.walk();
  memphis.grantWish("always write bug free code");
  memphis.greet("Marshmallow")
  console.log(memphis.name)
  console.log(memphis.powers)
  buttons.classyGreeting(memphis)
  memphis.classyGreeting(buttons)

  // Let's OVERRIDE our parent's walk method

  // Let's reference the parent's class' method and and extend its original functionality
  
  // Let's add properties to our new class in its constructor
  
  /*
  
  ********** FACTORY FUNCTIONS*********
     
  
      Sometimes we need a controlled way to generate other objects.
      Sometimes creating a new instance involves a lot of complex logic.
      A Factory function is a way to ABSTRACT that logic in a simple form that can be reused.
  
      For example:  Creating a deck of Cards involves a lot of work that we want to 
  
      What do we need in order to create a deck of cards?
      we need a DeckOfCards class
      we need a Card class
  
      1.  suits -> spades, diamonds, hearts, clubs
      2.  values 1-13
      3.  face values  1:ace, 11:jack, 12:queen, 13:king
  
  */
  // class Card {
  //   constructor(face, value, suit) {
  //     this.face = face;
  //     this.value = value;
  //     this.suit = suit;
  //   }
  // }
  
  // class DeckOfCards {
  //   constructor() {
  //     this.cards = [];
  //     this.createDeck();
  //     this.shuffle(this.cards);
  //   }
  //   // we need a list of suits
  //   // then we need to run what we have for each item in the suits
  
  //   createDeck() {
  //     const suits = ["hearts", "spades", "diamonds", "clubs"];
  //     for (let j = 0; j < suits.length; j++) {
  //       for (let i = 1; i <= 13; i++) {
  //         if (i === 1) {
  //           this.cards.push(new Card("Ace", i, suits[j]));
  //         } else if (i === 11) {
  //           this.cards.push(new Card("Jack", 10, suits[j]));
  //         } else if (i === 12) {
  //           this.cards.push(new Card("Queen", 10, suits[j]));
  //         } else if (i === 13) {
  //           this.cards.push(new Card("King", 10, suits[j]));
  //         } else {
  //           this.cards.push(new Card(i, i, suits[j]));
  //         }
  //       }
  //     }
  //   }
  //   shuffle(array) {
  //     let m = array.length;
  //     let i = 0;
  //     // While there remain elements to shuffle…
  //     while (m) {
  //       // Pick a remaining element…
  //       i = Math.floor(Math.random() * m--);
  
  //       // And swap it with the current element.
  //       [array[m], array[i]] = [array[i], array[m]];
  //     }
  //     return array;
  //   }
  // }
  // const myCards = new DeckOfCards();
  // console.log(myCards.cards);
  // console.log(myCards.cards);

  