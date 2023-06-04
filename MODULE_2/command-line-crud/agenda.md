# Command Line Crud 6/4/2023

## Agenda

* 2:00 - 2:05 Announcments 
* 2:05 - 3:00 JSON lab work
* 3:0 - 4:30 Command Line Crud walkthrough
* 4:30 - 4:45 Break
* 4:45 - 6:00 Lab

## Quote of The Day
<br>
<img src ="jake-the-dog.jpeg" width=400>

"sucking at sumthin’ is the first step towards being sorta good at something." Jake the Dog


### Key Terms

- CRUD
    - C
    - R
    - U
    - D

- What is `fs`

- What is `readFileSync()`

- What is `writeFileSync()`

- What is `json`

- What is an `npm package`

- What is `chalk`

- What is `nanoid`

- What is a `npm script`

- Describe the following code

```js
 module.exports = {
    createSomething
 }
```
## Command Line Crud

During this lesson we will create a complete application from scratch that will allow us to CRUD a series of resources.  The app will allow users to record a list of animals they've seen and record their points for each animal.

All Applications at their core perform the following actions in some way:

* Capture user input (the 'user' could be another application)
* Perform some sort of logic based on that input
* Interact with _some sort of database_
* Display new information to the user


The app will accomplish the following User Stories:

* A user can have a list of animals they've seen
* A user can create a new animal
* A user can see the details of a new animal
* A user can delete an animal
* A user can update an animal
* A user can see their score based on the animals they've stored in their DB

This App will make use of the [`chalk`](https://www.npmjs.com/package/chalk) package and the [`nanoid`](https://www.npmjs.com/package/nanoid) packages from NPM.

**Note**: we are installing `chalk@4` and `nanoid@3`.  

## Steps to Succeed
Organizing thoughts and structuring the development process is crucial for building any software application. Before coding we need to have a deep understanding of our app's overall file strucutre.  

Each file has a purpose and it is important we udnerstand how these files will work together before moving to build.

[Our App Diagram](https://miro.com/welcomeonboard/QThEbzZvSW90WEFYdnZISHFXSk9VTmZlUk9qeU5QZnVSOENCdTE1VERWcnVEWjQ2Slc1YUpIRUEyQkE4cEdkVHwzMDc0NDU3MzY3NTczMzc0OTc2fDI=?share_link_id=870439321835)

Now with an understanding of our strucutre we can build our app using the following steps.

0. Install packages
1. ensure all functions and data are exported properly
2. import all functions to index.js
3. create NODE scripts to capture user input
4. create switch statement to control user flow
5. Build helper functions to read and write to our data
6. Build Read/Show functionality
7. Build Create functionality
9. Buld Delete functionality
8. Build Update functionality




## Today's Lab
[lab](https://github.com/10-2-pursuit/lab-command-line-crud-application)







## Today's Pairs

1. Davon Bridgett, Joseph Carter
2. Sung Yi, Areebur Rahman
3. Franklin Rendon-Ramirez, Ana Torres
4. Winder Joel Marte, Erick Tolentino
5.  Aisha Kleemoff, Jalal Jonaid
6. Genesis Lara,  Nicole Slater
7. Michael Caldwell, Anile Choice
8. Mikal Wazeerud-Din, Keith Camacho, 
9. Alexander Tsiklidis, Anthony Huarneck
10. Brandon Harris, Dwayne Jones
11. Shanice Griffin, Addis Jackson
12. Ruslan Poptsov, Mayi Gomez
13. Jefferson Chua, Erick Martinez
14. Emily Mohr, Tonesha Rose
15. Elisaul Batista, Kanique Cox
