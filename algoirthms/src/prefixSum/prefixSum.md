# LeetCode #1732 Problem: [Finding the Largest Altitude](https://leetcode.com/problems/find-the-highest-altitude/)

## Problem Statement:

There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

 
```
Example 1:

Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

Example 2:

Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.

```


## Iterative Solution

<summary>
In this solution, we iterate through the list of altitude changes (gain). We keep track of both the current altitude and the highest altitude seen so far. At each step, we update the highest altitude if needed and adjust the current altitude. Finally, we return the highest altitude reached.
<summary>
<details>

    ```js

    function largestAltitude(gain: number[]): number {
        let current = 0;
        let highest = 0;

        for (let num of gain) {
            highest = Math.max(highest, num + current);
            current = num + current;
        }

        return highest;
        }

    ```
</details>

## Prefix Sum Technique

### Explanation:
<summary>
The prefix sum technique involves creating an array where each element represents the cumulative sum of the values up to that point. In this problem, we use it to keep track of the cumulative altitude changes. We initialize the prefix sum array with 0, as the initial altitude is 0. Then, we loop through the gain array, calculating the prefix sum and storing it in prefixSum. Finally, we find the maximum value in the prefix sum array, which represents the highest altitude reached.
</summary>
<details>

```js

    function largestAltitude(gain: number[]): number {
        let prefixSum = [0];

    for (let i = 0; i < gain.length; i++) {
            prefixSum.push(prefixSum[i] + gain[i]);
    }   

        return Math.max(...prefixSum);
    }

```

</details>

### Why Use Prefix Sum?
The prefix sum technique is particularly useful when dealing with scenarios involving accumulative effects or differences over time or steps. It provides an efficient way to track changes in a sequence of events. In problems like this, where we're interested in finding the largest change in a long series of events, the prefix sum technique can significantly improve the efficiency of our solution.