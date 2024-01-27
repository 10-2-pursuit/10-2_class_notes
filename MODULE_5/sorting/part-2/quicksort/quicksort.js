let nums = [6, 5, 8, 3, 7, 2, 9, 4, -5, -101, 0, 1000];


function quickSort(array) {
  // BASE CASE
    if(array.length <= 1) return array
  // create recursive base case that will bubble up
  //  once we have a sorted array
    // [2, 3, 4, 5, 6, 7, 8, 9]
  // PARTITION STEP
  // choose a pivot element
  // let pivot = array.shift(); 
  let idx = Math.floor(Math.random() * array.length);
  let pivot = array[idx];
  console.log(pivot)
    array.splice(idx, 1); 
    // console.log(array)

  // create a variable to hold elements of our array less than pivot
  let left = array.filter((el) => el < pivot);
  console.log("LEFT", left) 
  // create a variable to hold elements of our array greater than pivot
  let right = array.filter((el) => el > pivot); 
  console.log("RIGHT", right) 

  // RECURSIVE STEP
  // recursively call quicksort on our elements that were less that the pivot
  let leftSorted = quickSort(left); 
  // recursively call quicksort on our elements that were greater that the pivot
  let rightSorted = quickSort(right);
  // return our sorted arrays and pivot in a new array
  return [...leftSorted, pivot, ...rightSorted]; 
};
// console.log(quickSort(nums))

// Would this be as efficient if our input array way already sorted?

// How could we modify quick sort based on what we know about our dataset?

let people = [
    { name: "Gigi", title: "Instructor" },
    { name: "Dwayne", title: "Student" },
    { name: "Shanice", title: "Student" },
    { name: "Tim", title: "Instructor" },
    { name: "Anthony", title: "Student" },
    { name: "Mashu", title: "Engineer" },
    { name: "Keith", title: "Student" },
  ];  

let myCallback = (a, b) => a.name > b.name ? -1 : 1;
// Tim > Gigi ? => true => -1

function quickSortWithCallback(array, callback) {
    if(array.length <= 1) return array

    let idx = Math.floor(Math.random() * array.length);// chosing a random index to take our pivot from
    let pivot = array[idx];
    //     { name: "Tim", title: "Instructor" },
    array.splice(idx, 1); 
    console.log(pivot)

    let left = array.filter((el) => callback(pivot, el) === -1); // use our call back to filter all item from the remianing array that are less than our pivot
    console.log("LEFT", left) 
    let right = array.filter((el) => callback(pivot, el) === 1);  // use our callback to filter out all items from our array that are greater than our pivot
    console.log("RIGHT", right) 

    let leftSorted = quickSortWithCallback(left, callback); 
    let rightSorted = quickSortWithCallback(right, callback);

    return [...leftSorted, pivot, ...rightSorted]; //[Anthony, Dwayne, Gigi, Keith, Mashu, Shanice, Tim,]
}

console.log(quickSortWithCallback(people, myCallback));
