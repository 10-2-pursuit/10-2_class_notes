# Inventory App

## Setting Expectations
This project will test what he have learned so far about HTML, CSS and DOM manipulation.  

If you are stuck, or need help it is __essential__ that you __ask for help__.  

__You must Own Your Pursuit__ .  If you do not understand a topic, this is where we learn it.

### Steps to Complete the HTML Inventory App

Below is a helpful guide to assist in organizing your working process.


1. **Project Setup**
   - Create a new GitHub repository for the inventory app.
   - Create an `index.html` file and a separate `styles.css` file in the project directory.
   - Set up a basic HTML structure in the `index.html` file.
   - add some basic stlye and simple `console.log()` to ensure your files are connected

2. **HTML Structure**
   - Create basic HTML structure including `<header>` that displays title, a contianer `<div>` to display resources, `<form>` element for user to input new reousrces  
   - Choose your Resource - model your resource (books, recipee, shoes) to have three fields inluding __inStock__, price, name, and two other resource of your choosing 
   - Inside the container create one resource with fields of your choice in each resource element.  Use this field to build and test your functionality.  Add more resources once everything is stlyed and functional.

3. **Form Setup**
   - Add a form at the bottom of the page to allow users to add new resources.
   - Include input fields for all the required fields: name, price, in stock, and any other needed fields.
   - Include a "Submit" button and a "Reset" button in the form.

4. **Interactive Features**
   - Create 'click' event listeners.  Have them console log the `event.target` first.  Add functionality later.
   - Write JavaScript code to handle the "Remove" button functionality. Connect it with your remove button.
   - When a user clicks the "Remove" button for a resource, remove the corresponding resource element from the page.
   - Implement an interaction to update the "in stock" value for existing resources.  Connect it to your update button.
   - Toggle the "in stock" status between "in stock" and "out of stock" when the user interacts with this element.

5. **Form Validation and Resource Creation**
   - Add form validation using JavaScript.  How do we know a user entered the correct data?
   - Ensure that at least three fields in the form are required.
   - If the form is submitted with missing or invalid fields, display an error message to the user.
   - Clear the form fields and do not create a resource if the requirements are not met.
   - When the form is completed correctly, clear the form and add a new resource element at the top of the existing resources.

6. **Styling**
   - Open the `styles.css` file and link it to your `index.html` file using the `<link>` tag.
   - Decide on your grid - how will you display your columns.
   - Choose a color scheme for your applicaiton. 
   - Utilize CSS Grid to create a two-column or greater layout for the page.
   - Apply cohesive and professional styling to the elements, making use of the specified colors.
   - Create proper media queries to update our display for secific screen sizes.
   

7. **Scale**
   -  If your application is working with _one_ resource, create multiple instances of your resource and ensure your functionality is working for each.
   - Update the `README.md` file in your GitHub repository with setup instructions and a guide on how to run your application.
   - implement flex features



## Tips 
- commit every hour or more
- do not start this project on Saturday
- `console.log()` every step of the way
- do not copy code from the lecture notes - look at the lecture notes and _write_ your own code;







