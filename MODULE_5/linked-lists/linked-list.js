// What is a Data Structure?
    // it is the different ways a computer stores or accesses data

// What are some data structures we have used in JS thus far?
    // Arrays  => a special kind of object
    // Objects =>  a HASH map - special data strucutre that stores keys in a fancy way and sores values
    // Sets => unique collection of data - much like an array and sort of like an object
    // Map => much like a JS object - its a hash table - but keys can be ANYTHING

// IF we consider an array what are the individual properties of data in an array?
    // each item in an array is an element => 
        // think of this as an object 
    
const myArr = ["hello", "world", () => {}, 1];
    // if myArr[0] were an object - what would it look like?
        // myArr[0] could look like this => { data: "hello", index: 0 }
class Element {
    constructor(value, ind) {
        this.value = value;
        this.ind = ind;
    }
}

let myEl = new Element("sweet it works", 0);

// Every Data Structure needs a defined building block

// the convention for a Data Structures is to create a Class called Node;

// the first step when dealing with a data strucute is to design a Node;
    // not all classes in JS are declared with the class keyword
    // some people call this 'syntactic sugar' 

// the whole reason we do alllll this nonsense is to efficently store and retreive data
    // so every node needs DATA

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const firstNode = new Node(1);
const secondNode = new Node(2);

firstNode.next = secondNode;



// in a deck of cards we have a class Card.  It holds values
    // cards exist in a class Deck.  This Deck holds many cards;
class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    size() {
        let count = 0;
        let node = this.head;
        // while loop
        while(node) {
            // iterate forward while we have a node
            count++
            node = node.next
        }
        return count
    }

    // we need a value to find
    search(value) {
        // start at the top
        let currentNode = this.head;
        // while we have value and its NOT what we want
        while (currentNode !== null && currentNode.data !== value) {
            // keep going
            currentNode = currentNode.next
        }
        return currentNode
    }

    clear() {
        this.head = null;
    }
    // we need to check every item 1 by 1
    getLast () {
        let currentNode = this.head;

        while (currentNode && currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode
       // while loop until next NULL
        // we CAN NOT SKIP 
    }

    getFirst() {
        return this.head;
    }

    // *************************** GROUP ACTIVITY *******************************

    // add a node at a THE START of the list
    insert(data) {
        let newNode = new Node(data);

        if (!this.head) {
          this.head = newNode;
        } else {
          newNode.next = this.head;
          this.head = newNode;
        }
      }
    // delete a node based on a given value
   
  delete(data) {
    // start at the beginning
    let node = this.head;
    // initialzie a count 
    let counter = 0;
    // if our current data is NOT what we want to delete and there IS a next
    while (node.data !== data && node.next) {
    // keep track of how many STEPS WE'VE TAKEN
      counter++;
    // iterate forward
      node = node.next;
    }
    // if we get here we've found what we need
    let foundNode = node;
    // start over from the head
    node = this.head;
    // only go as far as counter
    for (let i = 1; i < counter; i++) {
        // go RIGHT BEFORE foundNode
      node = node.next;
    }
    // skip the node to delete
    node.next = foundNode.next;
  }

}

        

const linkedList = new LinkedList(firstNode);



/*
    These methods are common on a linked list
    Search
    size
    clear
    get last
    insert
    delete
*/

const months = [
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  
  let previousNode = new Node("Jan");
  let list = new LinkedList(previousNode);

  for (let i = 0; i < months.length; i++) {
    let currentNode = new Node(months[i]);
    previousNode.next = currentNode;
    previousNode = currentNode;
  }

  console.log(list.delete("March"))
  console.log(list.head.next.next)
  console.log(list.size())



/* 
  OBJECT PROTOTYPE LINKED LIST - THE OLD SCHOOL WAY
  In the wild you may encounter something like this:

    LinkedList.prototype.someMethod (){

    }

    This is an example of the old Object prototype way to define classes in JS.
    Node and LinkedList are defined as functions. Methods like clear() and search() are attached to LinkedList.prototype, which means they are available to all instances of LinkedList. 
    
    This approach is less syntactically clean compared to the class-based approach but was the standard way of creating complex objects and their prototypes in JavaScript before ES6.

    This way of writing serves the same purpose as our Class based approach

    function Node(data) {
        this.data = data;
        this.next = null;
    }
    

// Constructor for LinkedList
function LinkedList() {
    this.head = null;
}

// Adding a method to the LinkedList prototype
LinkedList.prototype.clear = function() {
    this.head = null;
};


*/