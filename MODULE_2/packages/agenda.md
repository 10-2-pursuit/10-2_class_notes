# Npm Packages 5/30/2023

## Agenda
* 7:00 - 7:05 Announcements 
* 7:05 - 7:20 Review / Discussion 
* 7:20 - 8:20 Dictionay App Code Along 
* 8:20 - 8:30 Break
* 8:30 - 10:00 Lab


## Today's Lab
[NPM Packages](https://github.com/10-2-pursuit/lab-npm-packages)

## Quick Review

- What is a node module? 

- What is NPM?

- What is a `package.json`

- What is the `node_modules` directory?

- What does `require()` mean in JS?

- What does `module.exports` mean JS?

- What is a `gitignore`?


## Dictionary App Planning
Today is our first in class walkthrough to create a real working application.  You may code along with this walkthrough should you please but keep in mind that most likely we will not have the time to stop and debug your code if your code is not working.  If you are stuck sometimes it is best to simply follow along rather than attmept to try to debug your work during the walkthrough.  

**Note** This is our first time implementing `open-source` software.  When working with npm packages it is not important to understand the entire library.  It is our job to find the funcitonality we need and execute the code to the extent that we need it - **NOT** understand the whole thing.

This app will have the follwing functionality:
- Collect a word of phrase from a  user
- Use `simple-spellchecker` to check if a user's word input is spelled correctly.
- Use `simple-spellcheker` to see if all wods in a users phrase input are spelled correctly
- return a number of words in a setence spelled correctly
- use `chalk` to format our terminal response with color.

### Development Steps
1.  Set up NPM project and install Dependencies
    - how do we know we've installed everything?
2.  Create custom node script to execute function from `index.js`
    - how can we connect our files to execute `spell-check`- from `index.js`?
    - how can we set up a custom script to execute `npm run checkWord  <user input>` so that userInput will be logged to the console 
3.  Invoke `simple-spellcheck` to verify spelling of a word in a custom function;
    - Where do we learn how to use `simple-spellcheker`?
    - What are some pseudo-code steps to make this funcitonality?
4.  create functionality to verify spelling of a sentence;
    - How can we take what we've already done with a single word and exapnd on that for a sentence?
5. Import `chalk` into `ui.js`.  Export `warning()` and `success()` files to change the look of our function output.
    - How do we connect this to our `index.js` file?
6. Expand functionality to outpus colorized resposes to the terminal.
7.  Review functionality as a group and create our own code comments


## Today's Pairs 
1. Winder Joel Marte, Mikal Wazeerud-Din
2. Kenny Mercedes, Jefferson Chua
3. Anthony Huarneck, Genesis Lara
4. Tonesha Rose, Erick Tolentino
5. Alexander Tsiklidis, Ruslan Poptsov
6. Sung Yi, Franklin Rendon-Ramirez
7. Elisaul Batista, Jalal Jonaid
8. Dwayne Jones, Anile Choice
9. Mayi Gomze, Michael Caldwell
10. Brandon Harris, Keith Camacho
11. Areebur Rahman, Nicole Slater
12. Shanice Griffin, Ana Torres
13. Aisha Kleemoff, Joseph Carter
14. Emily Mohr, Addis Jackson
15. Kanique Cox, Erick Martinez
16. Davon Bridgett

