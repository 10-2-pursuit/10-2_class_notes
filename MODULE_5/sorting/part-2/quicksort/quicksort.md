# Quick Sort
	- What is quick sort?
        - Another efficient sorting algorithm!
        - Implemented under the hood of JavaScript
    - Key Concepts
        - Utilizes a similar "divide and conquer" strategy to merge sort
        - We can consider an array of 0 or 1 elements as already trivially sorted
        - it is easy to sort elements of an array relative to a particular target value
	- How does it work?
        - Select one element called the "pivot". (This step varies by the implementation.)
        - Find the index in the final output at which the pivot element should end up. To do this:
            - Move all elements smaller than the pivot to the pivot's left, and all elements greater than than the pivot to the pivot's right.
            - Repeat the process, individually, for the left side, and then for the right side, by recursively calling Quick Sort on each subarray.
        - Return a new array with the smaller numbers followed by the pivot, and the larger numbers

