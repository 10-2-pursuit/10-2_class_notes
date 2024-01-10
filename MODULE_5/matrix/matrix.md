# Matrix Problems in DSA

## Learning Objectives

- Understand what a matrix is and its applications
- Learn basic operations on matrices
- Solve common matrix problems often seen in DSA interviews

## Introduction to Matrices

A matrix is a two-dimensional array of elements arranged in rows and columns. Matrices are used in various fields like computer graphics, scientific computing, and machine learning.

## Common Matrix Problems

1. **Matrix Rotation**: Learn how to rotate a matrix by 90 degrees, 180 degrees, etc.
2. **Searching in a Sorted Matrix**: Techniques to search for an element in a matrix sorted row-wise and column-wise.
3. **Matrix Manipulation**: Apply changes to a matrix based on input.

## Example: Rotating a Matrix

### Problem Statement

Rotate a given NxN matrix by 90 degrees clockwise.

### Approach

- Understand matrix indices and how they change upon rotation.
- Develop an algorithm to rotate the matrix layer by layer.

### Implementation in JavaScript

```javascript
function rotateMatrix(matrix) {
  const n = matrix.length;
  for (let layer = 0; layer < n / 2; layer++) {
    let first = layer;
    let last = n - 1 - layer;
    for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = matrix[first][i]; // save top
      // left -> top
      matrix[first][i] = matrix[last-offset][first];
      // bottom -> left
      matrix[last-offset][first] = matrix[last][last-offset];
      // right -> bottom
      matrix[last][last-offset] = matrix[i][last];
      // top -> right
      matrix[i][last] = top; // right <- saved top
    }
  }
  return matrix;
}
```


## Matrix Search
Problem Statement
Search for a value in a matrix sorted in ascending order both row-wise and column-wise.

### Approach
Binary search in matrices.
Start from the top-right or bottom-left corner.
Implementation in JavaScript
[Include code example]


### Depth-First Search (DFS)
DFS explores as far as possible along one branch before backtracking. It uses a stack, which can be implemented using either an explicit stack data structure or implicitly through recursion.

Best Use Cases for DFS:
Solving puzzles or mazes where the solution involves exploring every possible path.
When memory space is limited, as it can be more space-efficient than BFS.

### Breadth-First Search (BFS)
BFS explores all neighbors at a given depth before moving to the next level. It uses a queue to keep track of the next vertices to explore.

Best Use Cases for BFS:
Finding the shortest path in unweighted graphs.
Situations where solutions are generally closer to the root of the tree/graph.
Applying DFS and BFS to Matrix Problems
DFS for Flood Fill
The Flood Fill algorithm can be implemented using DFS to fill a contiguous area with a specific color.

#### DFS Implementation for Flood Fill:
```javascript
function floodFillDFS(image, sr, sc, newColor, originalColor = image[sr][sc]) {
    if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length || image[sr][sc] !== originalColor || image[sr][sc] === newColor) {
        return;
    }
    image[sr][sc] = newColor;
    floodFillDFS(image, sr + 1, sc, newColor, originalColor); // down
    floodFillDFS(image, sr - 1, sc, newColor, originalColor); // up
    floodFillDFS(image, sr, sc + 1, newColor, originalColor); // right
    floodFillDFS(image, sr, sc - 1, newColor, originalColor); // left
}
```

#### BFS for Flood Fill
BFS can also solve the Flood Fill problem, systematically filling the contiguous area level by level.

BFS Implementation for Flood Fill:
```javascript
Copy code
function floodFillBFS(image, sr, sc, newColor) {
    const currentColor = image[sr][sc];
    if (currentColor === newColor) return image;

    const queue = [[sr, sc]];
    while (queue.length > 0) {
        const [x, y] = queue.shift();
        if (image[x][y] === currentColor) {
            image[x][y] = newColor;
            if (x > 0) queue.push([x - 1, y]); // Up
            if (y > 0) queue.push([x, y - 1]); // Left
            if (x < image.length - 1) queue.push([x + 1, y]); // Down
            if (y < image[0].length - 1) queue.push([x, y + 1]); // Right
        }
    }
    return image;
}
```
### DFS for Matrix Search
DFS can be used to perform a deep search in each direction, exploring all possible paths from a starting point.

#### DFS Implementation for Matrix Search:
[Include DFS implementation for matrix search]

### BFS for Matrix Search
BFS is ideal for searching in a matrix, particularly when looking for the shortest path or nearest occurrence of an element.

#### BFS Implementation for Matrix Search:
[Include BFS implementation for matrix search]

...

