// built in node method that lets us extend our console.lgo(satatements)
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
    Imagine a stack of plates; the last plate you put on top is the first one you'll take off. 
    
    This makes stacks ideal for scenarios where you need to reverse things or backtrack, 
    such as navigating through browser history, undo mechanisms in text editors, or even parsing expressions in a compiler.


    In JavaScript, the call stack is a perfect example of a stack in action. 
    When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
    
    Any functions that are called by that function are also added to the call stack and executed where their calls are reached. 
     
    When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

    GREAT - NOW WHEN DO I USE THIS IN DSA?
    1 - Backtracking: Use a stack when you need to revert to previous states after meeting certain conditions, common in puzzles or implementing undo features.

    2 - Nested Structures: Ideal for managing nested elements like HTML/XML tags or parentheses in expressions, ensuring orderly opening and closing.

    3 - Reversal Operations: Stacks naturally reverse the order of elements, useful in string reversal, undo actions, or navigating through a series of steps.

    4 - Process Tracking: Stacks help track the most recent actions or states in a process. This is crucial in scenarios where the latest state or action influences the next steps, such as managing temporary states in multi-step forms or tracking the stages of a transaction.

    5 - Traversal in Trees/Graphs: Suitable for depth-first search (DFS) in structures like trees or graphs, where you explore as deep as possible along each branch before backtracking.
*/


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

class Stack {
    constructor(top = null) {
        
    }
}
 







/* 

    Q U E U E S - FIFO: First In First Out
    
    In the realm of data structures and algorithms, especially in the context of technical interviews, the queue plays a pivotal role in solving a variety of computational problems. Understanding queues is essential for aspiring developers, as they offer a systematic way of handling data in a first-in, first-out (FIFO) manner.

    Queues operate much like a line at a grocery store. The first person in line is the first to be served, and new people join at the end of the line. This FIFO nature makes queues ideal for scenarios where order and timeliness are crucial.

*/


/* 
 ******* OUR QUEUE WILL NEED THE FOLLOWING METHODS ********
    enqueue (adds an item)
    dequeue (removes an item)
    peek (returns the top item)
    isEmpty (checks if the queue is empty)
*/




class Queue {
    constructor() {
    }
}
    
  
   


