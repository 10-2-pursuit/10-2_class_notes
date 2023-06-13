#  Intro to HTML 6/12/2023

## Quote of The Day
_"Your comfort zone will get you nowhere"_
  – Tony Robbins

## Agenda
* 6:00 - 6:05 Announcements
* 6:05 - 6:35 isPalindrome challenge / solution
* 6:35 - 7:30 - html lecture
* 7:30 - 7:50 - html pair activity
* 7:50 - 8:00 - break
* 8:00 - 10:00 html lab / flex time.

### Key Terms
- tag
- self closing-tag
- element 
- attribute
- semantic-html

### Guiding Quesitons

- What does HTML stand for?
  Hypertext Markup Lanugage
    - markup : simply means that we encode how things are displayed

- How do we create a new html file?
create any file with an .html extension is html 


- What does it mean that HTML is a markup language? How is this different than JavaScript?

html is what is displayed to user; 
JS handles logic. JS has funcitonality.
JS integrates with HTML makes them - dynamic

if a website is a house:
HTML - is the frame
CSS - is the furniture and the paint
JS - is the plumbing, the electrical etc.

- What is an HTML element?
  A special tag, and its contents and attributes;
  <div class="container"> </div>
  <a href="pursuit.org">This is a link</a>


- What is the purpose of the `DOCTYPE` element?
tells our browser what type of document we are looking at

- What is the purpose of the `html` element?

wraps our entire document in HTML

- What is the purpose of the `head` element?
contains metadata - links to CSS etc


- What is the purpose of the `body` element?

body tag is what the user sees on the page

- The `head` and `body` elements appear between the opening and closing tags of the `html` element. What is an opening and closing tag?

- To create an HTML file, what file extension should you use? Create one now.

- Is the following HTML valid? Why or why not?

```html
<html></html>
<head></head>
<body></body>
```

- If the HTML code is invalid, will you see an error?

- The following is a paragraph element. How can you tell the difference between the opening and closing tags?

```html
<p>
  The notable 19th-century architect of skyscrapers, Louis Sullivan, promoted an
  overriding precept to architectural design: "Form follows function".
</p>
```

- For each of the following elements, describe the element's purpose. Add an example of the element to the HTML page you created earlier.

- How can you add a comment to your HTML page? Do so now.

### Tags && Their Meaning
<div style="display: flex;  border:2px solid">
<table>
  <thead>
    <tr>
      <th>Tag</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>head</td>
      <td> meta data about the page</td>
    </tr>
    <tr>
      <td>body</td>
      <td> what the user sees on the page</td>
    </tr>
      <td>div</td>
      <td> generic divider - should be avoided for higher level divisoin</td>
    <tr>
    </tr>
    <tr>
      <td>section</td>
      <td> a higher level divider signifying a larger peice of a website</td>
    </tr>
    <tr>
      <td>article</td>
      <td> a divider for tesxt usually with a headline and some text</td>
    </tr>
    <tr>
      <td>aside</td>
      <td>similar to an article but often smaller and on the side </td>
    </tr>
    <tr>
      <td>ul</td>
      <td> a list with no order</td>
    </tr>
    <tr>
      <td>ol</td>
      <td>a numbered list </td>
    </tr>
    <tr>
      <td>li</td>
      <td>a list item in either a unordered or ordered list</td>
    </tr>
    <tr>
      <td>nav</td>
      <td>semantic tag that signifies a navbar </td>
    </tr>
    <tr>
      <td>a</td>
      <td> anchor tag or links to other pages</td>
    </tr>
    <tr>
      <td>img</td>
      <td> self closing tag that holds the link to an image</td>
    </tr>
    <tr>
      <td>h1,h2,h3,h4,h5,h6</td>
      <td> Headings - designed for titles in descending size order</td>
    </tr>

  </tbody>
</table>
</div>


## Pair Programming Activity : 20 minutes
In this pair programming activity, you and a random partner will work together to create a small website using HTML. The website will showcase information about both of you, including a brief introduction and an image. You'll also explore the use of semantic HTML tags to enhance the structure and meaning of the content.
## Requirements
1. Create an HTML file named `index.html`.
2. Start by adding the basic structure of an HTML document using the `<!DOCTYPE html>` declaration and `<html>`, `<head>`, and `<body>` tags.
3. Inside the `<body>` tag, create a header section that includes a heading with the project title.
4. Create a section for each team member that includes the following:
   - Add a heading with your name and your partner's name.
   - Write a brief introduction about yourself and your partner using paragraphs (`<p>`).
   - Insert an image of yourself and your partner using the `<img>` tag. Ensure you have the image files ready and saved in the same directory as the HTML file.
5. Use semantic HTML tags to enhance the structure and meaning of the content. For example, you can use `<header>`, `<section>`, `<article>`, `<main>`, and `<footer>` tags appropriately.


## Today's Pairs

1. Winder Joel Marte, Anthony Huarneck
2. Davon Bridgett, Keith Camacho
3. Addis Jackson, Anile Choice
4. Dwayne Jones, Kenny Mercedes
5. Nicole Slater, Jalal Jonaid
6. Aisha Kleemoff, Kanique Cox
7. Jefferson Chua, Ana Torres
8. Ruslan Poptsov, Tonesha Rose
9. Sung Yi, Franklin Rendon-Ramirez
10. Joseph Carter, Mayi Gomez
11. Areebur Rahman, Alexander Tsiklidis
12. Elisaul Batista, Michael Caldwell
13. Genesis Lara, Emily Mohr
14. Shanice Griffin, Mikal Wazeerud-Din
15. Erick Tolentino