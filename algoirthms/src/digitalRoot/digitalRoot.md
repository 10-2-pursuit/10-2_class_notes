# digitalRoot
Pull the latest version of the class notes.  Write a function `digitalRoot(n)` that takes in a positive integer `n` and returns its digital root.

## Testing

To test your function navigate to the `algoirthms` directory and run:

```
npm install

npm test digitalRoot
```

## Definition

The digital root of a non-negative integer `n` is the single-digit value obtained by summing the digits of `n` until a single-digit value is obtained. For example, the digital root of 9875 can be calculated as follows:

```
9 + 8 + 7 + 5 = 29
2 + 9 = 11
1 + 1 = 2
```



Therefore, the digital root of 9875 is 2.

## Input

- A positive integer `n` (1 <= n <= 10^9)

## Output

- The digital root of `n`.

## Example

```js
digitalRoot(16) // => 7
digitalRoot(942) // => 6
digitalRoot(132189) // => 6
```

## Bonus 
* Do not use string conversion or array manipulation.
* Try to use a loop to achieve the desired result.

## Solutions

### One - String Maniulation

<summary>
1. Define a function digitalRoot that takes an integer n as input.
2. Convert n to a string using the toString() method.
3. Define a variable called sum and initialize it to 0.
4. Use a for loop to iterate over the digits in the string representation of n.
    a. Convert the current digit to an integer using the parseInt() function.
    b. Add the integer digit to sum.
5. If sum is greater than or equal to 10, call digitalRoot with sum as the input.
6. Otherwise, return sum.


<details>



```js
function digitalRoot(n) {
  let sum = n;
  
  while (sum >= 10) {
    let digits = sum.toString().split('');
    sum = 0;
    for (let digit of digits) {
      sum += parseInt(digit);
    }
  }
  
  return sum;
}



```

</details>

</summary>

### Two - Itterative

<summary>
1. Define a function digitalRoot that takes an integer n as input.
2. Define a variable called sum and initialize it to 0.
3. Use a while loop to iterate while n is greater than 0.
    a. Get the last digit of n by taking the remainder of n divided by 10.
    b. Add the last digit to sum.
    c. Divide n by 10 and discard any remainder.
4. If sum is greater than or equal to 10, call digitalRoot with sum as the input.
5. Otherwise, return sum.

<details>

```js
function digitalRoot(n) {
  if (n < 10) {
    return n;
  }

  let sum = 0;
  const digits = n.toString().split('');

  digits.forEach((digit) => {
    sum += parseInt(digit);
  });

  return digitalRoot(sum);
}
```

</details>
</summary>
# Digital Root Problem

## Problem






Try it on [CodeWars](https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript)
