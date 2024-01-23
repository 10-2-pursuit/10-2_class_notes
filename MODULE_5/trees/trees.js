/*
   
    Objectives:
    
    - Differentiate between a generic tree and binary search trees.
    - Identify why trees are valuable data structures for searching.
    - Represent a tree structure in JavaScript.
    - Describe code that searches  a tree.


*/

//  *******  What are trees? **********
// It's a data structure; It NOT a linear data structure;
// meaning :  it goes from highest to lowest;
// and there is a parent/child dynamic
// we see this in places like React apps

// What is a parent component in a React app?
// App is a parent of our Index component - which COULD be a parent of our Show Page

//  What is a Linear Data strucutre?
// Linear is a Linked list - is unidirectional data structure;

//  Why would we use a tree over a linkedList?
// a tree is more efficent if its organized a certain way;
// if a tree is sorted we can VERY efficently search through it
// also - we can build in logic as to HOW our nodes (tree data) are sorted

// TREES VOCAB - STUFF YOU WILL FIND ON INTERVIEWS

// Node:  class TreeNode - we do this for consistency 
// - The fundamental part of a tree.
// - Represents a single data point or an element of the tree.
// - A tree typically starts with a single node, known as the root, from which all other nodes branch out.

// Root:
// - The topmost node of the tree.
// - The only node in a tree that doesn't have a parent.
// - All other nodes in the tree can be reached directly or indirectly from the root.

// Edge:
// - A link between two nodes.
// - Represents the relationship between parent and child nodes in the tree.

// Parent Node:
// - A node that has an edge to one or more nodes beneath it.
// - The node directly above any given node in the tree.

// Child Node:
// - A node that is directly connected to another node when moving away from the root.
// - A node directly below and connected to another node.

// Leaf Node:
// - A node with no children.
// - These are the external or terminal nodes of a tree.

// Subtree:
// - A portion of a tree that consists of a node and all its descendants.
// - A tree contained entirely within another tree.

// Depth of a Node:
// - The number of edges from the node to the tree's root node.
// - The root node has a depth of 0.

// Height of a Node:
// - The number of edges on the longest path from the node to a leaf.
// - The height of a tree is the height of its root node.

// Binary Tree:
// - A special type of tree where each node can have at most two children, often referred to as the left and right children.

// Balanced Tree:
// - A tree where no leaf is much farther away from the root than any other leaf.
// - This ensures that operations on the tree remain efficient.

// Traversal:
// - The process of visiting all the nodes in a tree in a specific order (like inorder, preorder, or postorder for binary trees).

// ***** Let's build out a Tree class *****

// before we do lets look at some models we may understand better;

class TreeNode {
  constructor(value) {
    this.data = value;
    this.children = [];
  }

  addChild(value) {
    this.children.push(value)
  }
}

class Tree {
  constructor(root = null) {
   this.root = root
  }
}
const matt = new TreeNode("Matt");
const joe = new TreeNode("Joe");
const opal = new TreeNode("Opal");
const beau = new TreeNode("Beau");
const kara = new TreeNode("Kara");
const rory = new TreeNode("Rory");

const famTree = new Tree(matt);


matt.addChild(joe);
matt.addChild(opal);

joe.addChild(beau);
joe.addChild(kara);

opal.addChild(rory);

console.log(famTree);

// 💎💎💎💎💎💎💎💎 now lets get fancy;💎💎💎💎💎💎💎💎

//  Thought Experiment  10 minutes in breakout rooms;

//  How do we find a name to look up in a phone book (if they exist)

// write out your steps;

/*   
    a common and powerful binary Tree is a BST or Binary Search Tree;
    Each node of a binary search tree is inserted to the right of its parent node if it is of greater value
    and to the LEFT of the parent node if it is of a lesser value.
    a BST has an average search() of O(log N) - however, the worst case scenario for a BST is actually O(N) - 
    this is just very, very rare
*/

class BinaryNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    // we need a root to tell JS where to START
    this.root = new BinaryNode(value)

  }

  // to find WHERE in a binary Tree we must insert our new node
  // we need to start at the root and compare the value of the newNode to our root;

  // once we find a node that does not have a left or right,
  // we will assign our newNode there;

  // we will need variables to track the state of our nodeToCompare &&
  // wheter or not we need to continue;

  addNode(value) {
    // lets start by creating a new BinaryNode with our value
    let newNode = new BinaryNode(value)
    // create a variable currentNode to track which node we are comparing
    let currentNode = this.root;
    // last, create a boolean value searching to determine if we are still looking for our new node
    let searching = true;
    // we need a condition for the current.value > newNode.value
    while (searching) {
        // we need to move left
        if (currentNode.value > newNode.value) {
            if (currentNode.left) {
                currentNode = currentNode.left
            } else {
                currentNode.left = newNode;
                searching = false;
            }
        } else {
            if (currentNode.right) {
                currentNode = currentNode.right
            } else {
                currentNode.right = newNode;
                searching = false;
            }
        }
        
        // we move right
    }
    console.log("node added")
  }

  // this a breadth first search and is NOT an efficent way to search a binary tree
  // see if we can optomize this to search in a binary fashion to increase our efficency;
  search(value) {
    // first lets check for a root of our tree;
    if (!this.root) return null;
    // if the tree root matches our search we return it;
    if (this.root.value === value) return this.root 
    // if not - we will need to create a queue - a list of the nodes to search;
    let currentNode = this.root;
    let queue = [ currentNode.left, currentNode.right ];
    while (queue.length > 0) {
        currentNode = queue.shift();
        if (currentNode.value === value) return currentNode;
        if (currentNode?.left) queue.push(currentNode.left)
        if (currentNode?.right) queue.push(currentNode.right)
    }
    return "zzzzzorry no node found!"
  }
}

const numbers = [50, 42, 67, 56, 64, 51, 63, 65, 99, 84, 23, 48, 11, 31];

let binTree = new BinaryTree(numbers.shift());

numbers.forEach((item) => binTree.addNode(item));
console.log(binTree.root, binTree.root.left, binTree.root.right);

console.log(binTree.search(119835709235609154369));

// Trie - is a tree that has a child for each letter of the alphabet
    //   root - a,b,c..........z
                // b
