# Bootstrap

# Intro to Bootstrap CSS with React

## Learning Objectives

By the end of this lesson, you should be able to:

- Adding Bootstrap CSS to a project
- Adding classes to HTML elements to style with Bootstrap CSS


## Getting started

- `cd` into the project and run `npm i` and then `npm start`

**Note:** some classes for images are already set so that they are not too large to work with as we build. The remaining images are also set to `width:100px` in the `index.css` until we can size them correctly. Once they are sized with Bootstrap, we can remove this code from the `index.css`.

There are a few ways to get Bootstrap into your project. We'll start with just adding a `link` tag. This tag works just like any CSS you'd write yourself. It is hosted elsewhere on the internet but will bring in all the code.
[Get the link](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

It looks like this:

`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">`

Paste it inside the `head` tag of the `index.html`, which is inside the `public` folder of your React app.

There are more ways to customize Bootstrap, but we won't cover them today.

The most notable thing will be that the font has changed.

![](../assets/bootstrap-linked.png)

## Hero

First, go to the `index.css` and comment-in the `nav` `display: none` rule. We won't work on the nav during this lesson.

Go to the `Hero` component.

Let's style the main image. It is sometimes referred to as a `hero`, `jumbo`, or `jumbotron` image.

Inside the component `Hero` is a `div` with an `id` of `hero`. Let's add the appropriate class: `container-fluid` - this will make the image stretch 100% of the page, regardless of width.

```html
<div class="container-fluid" id="hero"></div>
```

> **Note** - in `index.css`, all images are set to `width:100px` - to help us see the starting page. We can remove or comment out that code now.

Next, in the `img` tag inside of that div, add the class `img-fluid` - this will keep the image at 100% width.

```jsx
<img src="{heroRoses}" className="img-fluid" alt="many roses" />
```

## Restocked

Go to the `Restocked` component.

Add the class `container` to the top level `div` that contains the `h3` that reads `Just Restocked`. When the width is below a certain amount of pixels, the display will be a wider percentage. When the browser is wider, there will be more space around the sides of the container.

Let's add a class to the `h3` to style it more as a display. Generally, text on a web page serves two purposes - as a title/display eye-catching part of the page or as text meant for easy reading. Adding the class `display-4` will increase the font size of the `h3`.

## A Row of Cards

Go to the `Restocked` component.

If we return to our starter image, we have a row of 3 cards. Let's set up the div that contains these cards as a row inside of the `Restocked` component:

```html
<div className="row">
  <Card details="{detailsCard1}" image="{yellowRose}" />
  <Card details="{detailsCard2}" image="{lavenderRose}" />
  <Card details="{detailsCard3}" image="{apricotRose}" />
</div>
```

<details><summary>
 Other approaches to consistent design
 </summary>
 
 Bootstrap can solve a lot of things, but it can't solve all the things. Here are some things that are better solved differently:
 
One image does not have the same aspect ratio as the other two. When working with images, editing them with a photo/image editor is the best solution.

Many images from places like Unsplash are large because they can be used for printing. Web browser images are typically not as big nor have as high resolution. Therefore reducing the image sizes to an appropriate web browsing size will help decrease load times without losing image quality.

Additionally, an image editor can help set the correct aspect ratio/sizes so that your images have consistent sizing, making your CSS work much more manageable.

Another thing we notice is that the text for the Yellow rose, in most views, wraps to another line, also causing our card to lack consistent design. One way we can overcome this is to customize the appearance ourselves.

We can use the Bootstrap class and add or override the properties there.

**index.css**

```
.card-text {
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
}
```

</details>

## Cards

Go to the `Card` component.

Follow the commented-out prompts to style the cards.

## Best Sellers Table

Go to the `BestSellers` component.

Add a value of `display-5` for the h3 in the Best Sellers section.

```html
<!-- ************************** -->
<!-- Best Sellers table -->
<!-- Set class display-5 on h3 class -->
<!-- ************************** -->
```

For certain elements, like `tables`, despite already being a `table` element, you still have to use a class to opt-in to Bootstrap's table styling. You will find this true for `button`s and other elements.

Let's add another class, `table-striped`, to allow for better division between rows.

```html
<table class="table table-striped"></table>
```

If we want to center the text elements in our table, we could write our CSS in the `index.css` file. But it is better to use Bootstrap whenever possible. Bootstrap has a class called `text-center` that will center our text. This will allow for more consistent styling and less unexpected behaviors with our styles.

```html
<table class="table table-striped text-center"></table>
```

Finally, we can imagine that each row would be a link to an individual view of each tree with more information and the ability to purchase it. We can add a hover effect to assist our users in recognizing that the table would be interactive.

```html
<table class="table table-striped text-center table-hover"></table>
```

## Newsletter Form

Go to the `NewsletterForm` component.

Add a `class` of `container` to the top level `div`.

In the first two `div`s inside the `form`, add the class `mb-3`- this will add some bottom margins.

`mb` is short for `margin-bottom`. There are others like `mt` for `margin-top`, `ml` - left, `mr` -right, `mx` - left and right (x-axis), `my` - top and bottom (y-axis).

In `mb-3`, The value is a multiplier. So if the default margin is 1em, this will multiply the spacer value by 1.

[Learn about the full breakdown here](https://getbootstrap.com/docs/4.0/utilities/spacing/)

### Text Inputs

Add the class `form-label` to the two labels inside the form.

For the two text inputs, add the class `form-control`. This should update our form to look like this:

![](../assets/form-text-input-styled.png)

### Form Checkbox

Add the classes `mb-3 form-check` to style the div that contains the input with the type checkbox.

Add a class `form-check-input` with the type `checkbox` for the input.

For the label, add the class `form-label`.

### Form Select/Options

In the `select` element, add the class `form-select`.

### Checkbox 2 - Style as a Switch

Add the classes `form-check form-switch` to the div that contains an input with the type `checkbox`.

Add the classes' form-check-input' for the final input with the type `checkbox`.

Finally, let's style the submit button by adding the classes `btn btn-primary`.

## Nav (Bonus)

The Nav is a bonus section for you to work on after you have completed the rest of the build. Go to `src/index.css` and comment out the rule for the `nav` to have a display of `none` for now.

## Bonus - Finished early?

Try adding different fonts, font colors, and background-color to add your style in the `index.css` file.

You'll see in the `index.css` file that the `nav` `display` is set to `none`. Remove that code and go back to the mockup image. Use the Bootstrap documentation to get it styled like the mockup.

This navigation bar is responsive, so adding suitable classes should automatically change the appearance based on the browser window's width.

![nav bar short width](../assets/nav-bar-long.png)

![nav bar larger width](../assets/nav-bar-short.png)

## Bonus Bonus

Bootstrap has also been built to integrate with React with custom components. The npm package is called [react-bootstrap ](https://react-bootstrap.github.io/getting-started/introduction).

Rebuild Rosier using react-bootstrap. Be sure to use all the components available (see the left menu under `components`. For example, be sure to check out the following:

- cards
- table
- buttons
- forms
- nav


- `npm i`
- `npm start`

## [Today's Lab](https://github.com/10-2-pursuit/lab-intro-to-bootstrap-w-react)
## Today's Pairs

1. Michael Caldwell, Shanice Griffin
2. Mikal Wazeerud-Din, Kanique Cox
3. Jalal Jonaid, Keith Camacho
4. Anile Choice, Alexander Tsiklidis
5. James Edmond, Nicole Slater
6. Emily Mohr, Abel Vargas
7. Erick Tolentino, Anthony Huarneck
8. Isaiah Derosiers, Joseph Carter
9. Davon Bridgett, Jefferson Chua
10. Genesis Lara, Addis Jackson
11. Dwayne Jones, Aisha Kleemoff
12. Winder Joel Marte, Elisaul Batista
13. Sung Yi, Tonesha Rose