// This solution uses a concept called MEMOIZATION
    // The idea is that as we iterate over our array we record what we've seen to easily look it up again

    // In this solution we iterate through the array and try to find the 'neededNum' to add to our current number to equal 'target'
    // If we don't have `neededNum` in our object as a property - we add `nums[i]` - the curernt number - to the seenNums object 
    // we also store the current index as the value at our key

    // Now as we iterate, if we find the needed number as a key in our object, we can return that value stored there (the index)
    // and our current index
function twoSum(nums, target) {
    // establish MEMO object
    const seenNums = {};
    // iterate over array
    for (let i = 0; i < nums.length; i++ ) {
        // find the number we need for 'nums[i]' to equal 'total'
        const neededNum = target - nums[i];
        // check if the object has that 'neededNum' saved
        if (seenNums.hasOwnProperty(neededNum)) {
            // if we do - return the VALUE at `neededNum` and our current index in an array
            return [ seenNums[neededNum], i ]
        }
        // otherwise, add the current `nums[i]` as a key in `seenNums` pointing to the current value of `i`
        // if a future item in the array needs our current value - we can find that in the object and return it
        seenNums[nums[i]] = i
    }
}
// Joseph's solution - great work! 
function twoSumJoesephCarterStyle(numbers, target) {
    const finalProduct = {};
    // notice here we are declaring an index with a value of 0
        // this is the same as `let i = 0` 
    let index = 0;
   for (let num of numbers) {
      const values = target - num;
      if (values in finalProduct) {
        return [finalProduct[values], index];
      }
      finalProduct[num] = index;
      index++
    }
  }
let myArr = [1,8,22,14,5]
console.log(twoSum(myArr, 22))
  
module.exports = twoSum;