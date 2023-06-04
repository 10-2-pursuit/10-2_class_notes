# Jest 5/31/23
## Quote Of The Day
_"Get comfortable being uncomfortable."_ US Navy SEALS training motto.

## Agenda
* 7:00 - 7:20 Jest iscusssion
* 7:20 - 8:30 Jest Code A-long 
* 8:30 - 8:40 Break
* 8:40 - 9:45 Lab
* 9:45  - 10:00 End of Week Survey



## Do Now 

### Clone this if you haven't
[Jest Starter Code](https://github.com/pursuit-curriculum-resources/starter-test-with-jest)
### As you arrive in class attempt to write a one sentence description for the following quesitons /code 
- Describe the following code
```js 

function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}

module.exports = {
    add,
    subtract
}
// { add: add, subtract: subtract }
```
we have a function that adds two numbers and returns
we have another function that subtracts two numbers and returns it
on the bottom 

module.exports allows us to export our declared functions -anthony
Spereation of concerns allow sus to organzie our code

this gives us access to other files in other places - alexander

- How would you import these functions in another file?
we are destrucutring our object because it was exported as an an object

```js
  const { 
    add, 
    subtract,
    this, 
    that, 
    other 
  } = require("file_path")
```

- What is the purpose of NPM?
npm provides a collection of open-sourced packages that we can use in our projects; - elisaul

- What is a Node.js project?
  A node project is serires of files that run in the NodeJS runtime environment;

  Js Runtime environment is a place where the code is executed;
  It allows these projects to exist on their computer outside of the browser


- How can we tell if we are in a Node Project?
one way is a the node_modules folder 
if there is a package.json file 


- How can we tell if we have installed our dependencies?
node_modules;

- What is the file bellow?  What's its purpose
it holds metadata about the project
jsut gives us information about the project,
things like dependencies 
scripts - custom executions for our project 
```
{
  "name": "10.2_packages",
  "version": "1.0.0",
  "description": "spellchecker lecture that checks spelling of user input",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "checkword": "node index.js"
  },
  "author": "10.2_pursuit",
  "license": "ISC",
  "dependencies": {
    "simple-spellchecker": "^1.0.2"
  }
}
```


### Key Terms
- Production Dependencey

- Dev Dependency 

- NPM script

- Jest

- Unit Test

- Assertion

- describe()

- test()

- it()

## Today's Lab
[Test with Jest](https://pursuit.instructure.com/courses/43/assignments/1176?module_item_id=5644)

## Today's Pairs
1. Davon Bridgett, Areebur Rahman
2. Sung Yi, Ana Torres
3. Franklin Rendon-Ramirez, Erick Tolentino
4. Winder Joel Marte, Jalal Jonaid
5.  Aisha Kleemoff, Nicole Slater
6. Genesis Lara,  Anile Choice
7. Michael Caldwell, Keith Camacho
8. Mikal Wazeerud-Din, Anthony Huarneck, 
9. Alexander Tsiklidis, Dwayne Jones
10. Brandon Harris, Addis Jackson
11. Shanice Griffin, Mayi Gomez
12. Ruslan Poptsov, Erick Martinez
13. Jefferson Chua, Tonesha Rose
14. Emily Mohr, Kanique Cox
15. Elisaul Batista, Joseph Carter


