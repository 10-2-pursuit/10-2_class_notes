# Disemvowell Trolls

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata 'y' isn't considered a vowel.

Try it on [CodeWars](https://www.codewars.com/kata/52fba66badcd10859f00097e)

## Testing

To test your function run:

```
npm install

npm test --testPathPattern=disemvowellTrolls.test.js
```

## Solutions

### Regex

<summary>
This is a great solution to use a `Regular Expression`

<details>
This one liner uses the `.replace()` method with a regular expression containing all vowels. The regex has a `g` flag meaning it will replace all instances in the string and an `i` flag meaning that it doesn't care about capital letters.


```js
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}
```

</details>

</summary>

### Iterative

<summary>
We can solve this using the `Accumulator Pattern`
<details>
We can also use the `Accumulator Pattern` to iterate over our string and compare each character to a `string of all vowels`.  If the character does not exist in the vowel string we can add it to our returned string.

```js
function disemvowel(str) {
  let noVowels = "";
  let vowels = "aeiouAEIOU";
  for (let letter of str) {
    if (!vowels.includes(letter)) {
      noVowels += letter;
    }
  }
  return noVowels;
}
```

</details>
</summary>
