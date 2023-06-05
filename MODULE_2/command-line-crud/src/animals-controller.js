// this file will organize all the logic that interacts with our animals data
const { nanoid } = require("nanoid");
const animalPoints = require("../data/animals-points.json")
const inform = console.log
// this is where we will create our CRUD logic

// accepts all of our animals from our data and a name from the user
function create (animals, animalName) {
    const animal = { name: animalName, 
        // nanoid gives us a uniqe id for our animals
        id: nanoid(4),
        points:  animalPoints[animalName]
    };
    // adds to our animals array
    animals.push(animal);
    // returns the animals array with the new object
    return animals
}
// returns a string for all of our animals 
function index (animals) {
    return animals.map((animal) => animal.id + " " + animal.name).join("\n")
}
// accepts all of our animals from our data and an ID from the user
function show (animals, animalId) {
    // finds the matching animal
    const foundAnimal = animals.find((animal) => animal.id === animalId) ;
    // reutrns a formattes string
    return foundAnimal.id + " " + foundAnimal.name + " " + foundAnimal.points + " points"
}
// accepts all of our animals from our data and an ID from the user
function destroy (animals, animalId) {
    // finds the matching animal's index in the animals array
   const index =  animals.findIndex((animal) => animal.id === animalId);
    // if a match is found
   if (index > -1) {
    // removes it from the array if it is fond
    animals.splice(index, 1);
    console.log("we deleted your animal");
    // returns the updated array
    return animals
   } else {
    console.log("couldnt find an animal with that id")
   }
}
// accepts all of our animals from our data and an ID from the user and a new name for the animal to update
function update (animals, animalId, updatedAnimal ) {
   //  finds the matching animal's index in the animals array
    const index =  animals.findIndex((animal) => animal.id === animalId);
    // if a match is found
    if (index > -1) {
        // update the id of the animal at the index we found
       animals[index].id = animalId;
       // update the name of the animal at the index we found
       animals[index].name = updatedAnimal;
       // update the points of the animal at the index we found
        // by accessing our `animalPoints` data at the key of our updatedAnimal from the user
       animals[index].points = animalPoints[updatedAnimal];
       console.log("your animal has been updated");
       // return the modified array
       return animals
   } else {
     console.log("couldnt find an animal with that id")
    }
   
}
// accepts all of our animals data as an array
function score (animals) {
    // iterates over the array and combines the points of each animal
    const total = animals.reduce((a,b) => (a + b.points), 0)
    // returns that number
    return total
}

module.exports = {
   create,
   index, 
   show,
   destroy,
   update,
   score
}

