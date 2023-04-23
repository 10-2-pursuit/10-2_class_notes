# Introduction to Markdown

## What is Markdown?

Markdown is a lightweight markup language that can be used to format text. It is often used for creating content for the web, such as blog posts, documentation, and README files. Markdown is easy to read and write, and can be converted into HTML or other formats.

## Why do we use markdown?

- It's the industry standard
- It's easy to learn and use
- It's easy to convert to HTML
- many platforms use it  (Github etc)
- it's easy to organize a standard for the web

## Basic Markdown Syntax

### Preview 
CMD + SHIFT + V creates a preview in VScode 

### Headings

It's a kind of title -  header
Use the `#` symbol to indicate headings. The number of `#` symbols determines the level of the heading. For example:

### Paragraphs

To create a paragraph, simply write your text on a new line. To create a line break, add two spaces at the end of a line.

### Emphasis

Use `*` or `_` to create *emphasis* or **bold** or like __this__ or _this_

### Lists
To create an _unordered_ list we can use `*` or `-`

* list item 1
* list item 2
* list item 3

- list item a
- list item b
- list item c

To create an __ordered__ list we can use numbers
1. item 1
2. item 2
3. item 3

### Links
To create a link we start with a `[]` inside the bracket we place our text

After the bracket we create a `()`.  Inside the parenthesis we write our url we want the use to visit.
```
[Click here for Pursuit](https://pursuit.org)
```
[Click here for Pursuit](https://pursuit.org)

### Images
To create an image we start with a `![]` inside the bracket we place our text

After the bracket we create a `()`.  Inside the parenthesis we write our url we want the use to visit.
```
![two adorable yellow lab puppies on a soft white bed](https://i.cbc.ca/1.5507480.1585002199!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/puppy-facts.jpg)
```
![two adorable yellow lab puppies on a soft white bed](https://i.cbc.ca/1.5507480.1585002199!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/puppy-facts.jpg)

### Code 
to create a codeblock we need to nest our code inside of three backticks

we can also append the language we are coding with to the end of our first three ticks
```js
const myVar = "markdown is cool"
```


