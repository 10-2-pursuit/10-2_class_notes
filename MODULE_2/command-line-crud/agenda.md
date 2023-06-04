# Command Line Crud 6/4/2023

## Agenda

- 2:00 - 2:05 Announcments
- 2:05 - 4:00 JSON lab work
- 4:00 - 4:10 Break
- 4:10 - 6:00 Command Line Crud walkthrough


## Quote of The Day

<br>
<img src ="jake-the-dog.jpeg" width=400>

"sucking at sumthin’ is the first step towards being sorta good at something." Jake the Dog

### Key Terms

- CRUD

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
  createSomething,
};
```

## Command Line Crud

During this lesson we will create a complete application from scratch that will allow us to CRUD a series of resources. The app will allow users to record a list of animals they've seen and record their points for each animal.

All Applications at their core perform the following actions in some way:

## Files
<div style="display: flex;  border:2px solid">
<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Purpose</th>
</thead>
<tbody>
    <tr>
        <td>Index.js</td>
        <td>Entry point for application.  Get user input and execute proper CRUD funciton</td>
    </tr>
    <tr>
        <td>data/animals-data.json</td>
        <td>Record of our current data. Our database</td>
    </tr>
    <tr>
        <td>data/animals-points.json</td>
        <td>Record of our current data all animals and their point values</td>
    </tr>
    <tr>
        <td>src/helpers.js</td>
        <td>Defines read/write logic to interact with data</td>
    </tr>
    <tr>
        <td>src/animals-controller.js</td>
        <td>defines CRUD acitons for interacting with data</td>
    </tr>
    </tbody>
</tr>   
</table>
</div>

## Application Actions
<div style="display: flex;  border:2px solid">
<table >
  <thead>
    <tr>
      <th>Applications Actions</th>
      <th>JS code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Capture user input</td>
      <td>Process.argv[2] or greater</td>
      <td>`Process.argv` acesses arguments passed to a Node file. <br> Indexing at 2 or greater is the first argument. <br>
       We can use this to capture users input from the command line</td>
    </tr>
    <tr>
      <td>Perform logic based on input</td>
      <td>Switch statement - control flow</td>
      <td> Our `index.js`. file will execute a different function based on the input from the user.  This will dictate our CRUD acitons<td>
    </tr>
    <tr>
      <td>Interact with some sort of database</td>
      <td>`readFileSync()`   `writeFileSync()` </td>
      <td>Node.js built in `fs` module will handle reading/writing data to our application</td>
    </tr>
    <tr>
      <td>Display new information to the user</td>
      <td>console.log()</td>
      <td>Once we complete our aciton we need to inform our user of what we accomplished</td>
    </tr>
  </tbody>
</table>
</div>

## User Stories
<div style="display: flex;  border:2px solid">
<table>
  <thead>
    <tr>
      <th>User Stories</th>
      <th>Crud action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A user can have a list of animals they've seen</td>
      <td>Index (read)</td>
    </tr>
    <tr>
      <td>A user can create a new animal</td>
      <td>Create</td>
    </tr>
    <tr>
      <td>A user can see the details of a new animal</td>
      <td>Show (read)</td>
    </tr>
    <tr>
      <td>A user can delete an animal</td>
      <td>Delete</td>
    </tr>
    <tr>
      <td>A user can update an animal</td>
      <td>Update</td>
    </tr>
    <tr>
      <td>A user can see their score based on the animals they've stored in their DB</td>
      <td>Show (read)</td>
    </tr>
  </tbody>
</table>
</div>

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
8. Buld Delete functionality
9. Build Update functionality

## Today's Lab

[lab](https://github.com/10-2-pursuit/lab-command-line-crud-application)

## Today's Pairs

1. Davon Bridgett, Joseph Carter
2. Sung Yi, Areebur Rahman
3. Franklin Rendon-Ramirez, Ana Torres
4. Winder Joel Marte, Erick Tolentino
5. Aisha Kleemoff, Jalal Jonaid
6. Genesis Lara, Nicole Slater
7. Michael Caldwell, Anile Choice
8. Mikal Wazeerud-Din, Keith Camacho,
9. Alexander Tsiklidis, Anthony Huarneck
10. Brandon Harris, Dwayne Jones
11. Shanice Griffin, Addis Jackson
12. Ruslan Poptsov, Mayi Gomez
13. Jefferson Chua, Erick Martinez
14. Emily Mohr, Tonesha Rose
15. Elisaul Batista, Kanique Cox
