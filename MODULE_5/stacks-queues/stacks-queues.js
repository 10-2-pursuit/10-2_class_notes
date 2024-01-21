// built in node method that lets us extend our console.log(satatements)
const { inspect } = require('util');

const months = [
    "Jan",
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


/*   S T A C K S - LIFO: Last In First Out


    Stacks are a type of data structure that follow a Last-In, First-Out (LIFO) principle. 
    Imagine a stack of plates; the last plate you put on taco is the first one you'll take off. 
    
    This makes stacks ideal for scenarios where you need to reverse things or backtrack, 
    such as navigating through browser history, undo mechanisms in text editors, or even parsing expressions in a compiler.


    In JavaScript, the call stack is a perfect example of a stack in action. 
    When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.

    1=>  2= > 3=>  BASE CASE 
    
    Any functions that are called by that function are also added to the call stack and executed where their calls are reached. 
     
    When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

    GREAT - NOW WHEN DO I USE THIS IN DSA?
    1 - Backtracking: Use a stack when you need to revert to previous states after meeting certain conditions, common in puzzles or implementing undo features.

    2 - Nested Structures: Ideal for managing nested elements like HTML/XML tags or parentheses in expressions, ensuring orderly opening and closing.

    3 - Reversal Operations: Stacks naturally reverse the order of elements, useful in string reversal, undo actions, or navigating through a series of steps.

    4 - Process Tracking: Stacks help track the most recent actions or states in a process. This is crucial in scenarios where the latest state or action influences the next steps, such as managing temporary states in multi-step forms or tracking the stages of a transaction.

    5 - Traversal in Trees/Graphs: Suitable for depth-first search (DFS) in structures like trees or graphs, where you explore as deep as possible along each branch before backtracking.
*/

// WE NEED CONSISTENCY in our DATA STRUCTURE 
  // the blueprint for our bits of data => bricks in a wall or steel in a skyscraper;

// a node is our individual resource
  // every single DATA STRUCUTRE we CREATE starts with a node
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

/*
    ******* OUR STACK WILL NEED THE FOLLOWING METHODS ********

    push (adds an item)
    pop (removes an item)
    peek (returns the top item)
    isEmpty (checks if the stack is empty)
    toArray (converts our linked list to an array)

*/
// think of this almost like an Index page - organizes a lot of resources
class Stack {
        // default value will always default to null - if no value is passed
    constructor(top = null) {
        // the whole reason we are doing this
            // is so we have a reference to the START of our STRUCTURE
        this.top = top;
    }

    isEmpty(){
        return this.top === null
    }

    push(data) {
        // what is our stack made of?
        const newNode = new Node(data);
        // where does new information go?
        newNode.next = this.top;
        this.top = newNode; // reasign the top 
        // what happened to the old information?
    }
    peek() {
        return this.top;
    } 
    pop() {
        if (this.top === null) {
            return "stack is empty"
        }
        let currentTop = this.top;
        this.top = currentTop.next;

        return currentTop
    }
    // create an array push items into it
    toArray() {
        let arr = [];
        let currentItem = this.top;
        // almost recursive 
        while (currentItem) {
            arr.push(currentItem.data);
            // this is how we iterate over a data structure
            currentItem = currentItem.next;
        }
        return arr
    }

}
        
let myStack = new Stack();

// console.log(myStack.peek())

for (let i = 0; i < months.length; i++) {
    myStack.push(months[i])
}
// console.log(myStack.peek())
console.log(myStack.toArray())
console.log(myStack.pop())

console.log(myStack.toArray())

// console.log( inspect(myStack, { colors:true, depth: 12 }) )
 

/* 

    Q U E U E S - FIFO: First In First Out
    
    In the realm of data structures and algorithms, especially in the context of technical interviews, the queue plays a pivotal role in solving a variety of computational problems. Understanding queues is essential for aspiring developers, as they offer a systematic way of handling data in a first-in, first-out (FIFO) manner.

    Queues operate much like a line at a grocery store. The first person in line is the first to be served, and new people join at the end of the line. This FIFO nature makes queues ideal for scenarios where order and timeliness are crucial.

     A queue is how we iterate over a graph in a BFS
        BFS search means moving through a graph ONE layer at a TIME

*/


/* 
 ******* OUR QUEUE WILL NEED THE FOLLOWING METHODS ********
    enqueue (adds an item)
    dequeue (removes an item)
    peek (returns the first item)
    isEmpty (checks if the queue is empty)
*/




class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(data) {
        // SHANICE => ANTHONY => NULL 
        let newNode = new Node(data);
        // ALEX 
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return this.size++;
    }
    // remove the first item 
    dequeue() {
        // check if its empty
        if (this.first === null) {
            return "The Queue is empty!"
        }
        // store our current first value  - need to store TEMP
        let currentFirst = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        // we are going to reassign the first value
        // to the first.next
        this.first = currentFirst.next;
        this.size--;
        return currentFirst

        
        // reduce this.size by 1

        // return TEMP

        

    }
    peek() {
        return this.first;
    }
    isEmpty() {
        return this.first === null
    }
}
    

let myQueue = new Queue();

myQueue.enqueue("test!")
console.log(myQueue.dequeue())
for(let i = 0; i < months.length; i ++) {
    myQueue.enqueue(months[i]);
}
// this is called an assertion - its aserts a condition and returns True or False; 
// we need to start THINKING about testing ... trust us
console.log(myQueue.peek().data === "Jan");
console.log(myQueue.peek().data === "Taco");

console.log(myQueue.dequeue())
// console.log(inspect(myQueue, {colors:true, depth:12}))
  



        



    












   


