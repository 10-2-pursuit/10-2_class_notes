# Events 6/25/23

"You only have to learn this stuff once"
-George Dagher, the guy who taught Tim's bootcamp

## Learning Objectives

By the end of this lesson you should be able to:

- Use event listeners to run code on specific user interactions such as click and hover.
- Access data inside of the `event` object to dynamically change the effect of a listener.


## Guiding questions

- Read through the JavaScript code that already exists in the `script.js` file. Take your time going through each line of code, making sure you understand what is happening.

  Then, answer the following questions:

  - What will the "-" and "+" buttons do to the page when clicked?
  - Will both the "-" and "+" button work for both of the dogs on the page? Why or why not?
  - Describe how the following line of code removes a single heart from the `.hearts` element.

```js
hearts.textContent = hearts.textContent.slice(0, -1);
```

- Update the code so that all `.increment` and `.decrement` elements have the relevant event listeners on them. To do so you will need to:

  - Select all `.increment` or `.decrement` elements on the page.
  - Loop through those elements.
  - Add the appropriate event listener to each element.

- What happens when you click on the second dog's "-" or "+" button?

- You're now encountering a tricky problem. Take a moment to describe what the problem is and why it is occurring. Use technical language wherever possible and express the problem as clearly as you can.

- To solve this problem, consider the `event` object. What is the `event` object?

- When you click on the "-" or "+" button, you can access the element that is being clicked through `event.target`. Add the following line of code to each of your event listeners, updating the callback function as needed.

  ```js
  console.log("event.target:", event.target);
  ```

  When you click on the first dog's "+" button, is the element returned by `event.target` different than the one returned from the second dog's "+" button?

- First, take a look at the following link which describes how you can access the parent node of an element.

  - [MDN: Node.parentNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode)

Recall that moving through the DOM is called traversal. While traversal is a vital feature of the DOM methods. It's also important to limit traversal, when possible, so that your code does not end up too brittle.

For example, if you did something like `element.parentNode.parentNode.children[1]` and, later, you moved the buttons to be below the hearts, your code would break and you would have to rewrite your JavaScript code.

Note that you can call `.querySelector()` on individual nodes instead of `document`, which can help you write code is more easily maintained. When you call `.querySelector()` on a node, that node now serves as the root and the query will only look at elements inside the selected node.

Now, if you were to move the hearts above the buttons, it won't break the code. The link below describes in more detail how this works.

- [MDN: Element.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)

Given this information, how can you use the element returned by `event.target` to traverse to the relevant `.hearts` element?

This could be a difficult challenge! Take your time to think through what needs to happen before coding. Keep in mind that there are actually multiple ways to solve this problem.

Write out the steps you'd need to take and then try to code it. Solving a problem and coding are two separate tasks. If you solve the problem first, then all you need to do is translate it to code. If you try to solve things with code without a plan it can be a much more frustrating experience.

- At this point, your code should allow for clicking on either "-" or "+" button. When you click, the relevant count of hearts should decrease or increase, respectively.

<details><summary>Possible solution</summary>

```js
const incrementButtons = document.querySelectorAll(".increment");

for (let button of incrementButtons) {
  button.addEventListener("click", (e) => {
    const hearts = e.target.parentNode.parentNode.querySelector(".hearts");
    hearts.textContent += "❤";
  });
}

const decrementButtons = document.querySelectorAll(".decrement");

for (let button of decrementButtons) {
  button.addEventListener("click", (e) => {
    const hearts = e.target.parentNode.parentNode.querySelector(".hearts");
    hearts.textContent = hearts.textContent.slice(0, -1);
  });
}
```

</details>

Finally, update your code so that the minimum number of hearts possible is one, while the maximum is three.

Is any DOM manipulation needed to add this feature?

- Take a look at your code. Is there any duplication? Any helper functions that could be created from what you've accomplished? Any patterns you notice?


## Pairs For Today

1. Davon Bridgett, Mikal Wazeerud-Din
2. Anile Choice, Keith Camacho
3. Addis Jackson, Elisaul Batista
4. Ruslan Poptsov, Sung Yi
5. Mayi Gomez, Jalal Jonaid
6. Areebur Rahman, Jefferson Chua
7. Nicole Slater, Emily Mohr
8. Erick Tolentino, Ana Torres
9. Kanique Cox, Genesis Lara
10. Alexander Tsiklidis, Anthony Huarneck
11. Joseph Carter, Michael Caldwell
12. Tonesha Rose, Winder Joel Marte
13. Dwayne Jones, Shanice Griffin
14. Aisha Kleemoff, Franklin Rendon-Ramirez