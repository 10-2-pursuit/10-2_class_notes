# Media queries

## Learning Objectives

By the end of this lesson you should be able to:

- Describe what is meant by responsive design.
- Modify the layout of a page with media queries so that it displays differently depending on the screen size.

---

- What does it mean for a website to be responsive?
The design is adabptable to different screen sizes 

- Try changing the size of this page. As it grows smaller, does anything on the webpage change besides the text wrapping? Would you consider this website responsive?

- What does "mobile-first" mean in regards to responsive design?
desigining mobile layouts first and building out design

- What `meta` element attribute is required for your page to be responsive?
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- What is a media query?
  A CSS rule breakpoint that only fires if certain conditions are met.
- Write a media query that will apply a set of rules while the screen size is less than 500px.
```css
@media (max-width: 499px) {
    // add rules here 
}
```

- Write a media query that will apply a set of rules while the screen size is more than 1200px.
```css
@media (min-width: 1200px) {
    // add rules here 
}
```

- Write a media query that will apply a set of rules while the screen size is between 760px and 1000px.
```css
@media (min-width: 760px) and (max-width: 1000px) {
    // add rules here 
}
```

- Take a look at the following CSS. Then, answer the questions below.

  ```css
  p {
    color: green;
  }

  @media (min-width: 800px) {
    p {
      color: blue;
    }
  }

  @media (max-width: 700px) {
    p {
      color: red;
    }
  }
  ```

  - What color will the `p` text be if the width of the page is 850px?
   Blue - the min-width rule will be used as the max-width media query will only activate on screens up until 700px

  - What color will the `p` text be if the width of the page is 750px?
    red - the final media query is the one that is activated as it is LAST in the file
  - What color will the `p` text be if the width of the page is 650px?
  red
