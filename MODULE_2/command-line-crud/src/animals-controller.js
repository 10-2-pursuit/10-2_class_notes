// this file will organize all the logic that interacts with our animals data
const { nanoid } = require("nanoid");
const animalPoints = require("../data/animals-points.json")
const inform = console.log
// this is where we will create our CRUD logic

function create (animals, animalName) {
    const animal = { name: animalName, 
        id: nanoid(4),
        points:  animalPoints[animalName]
    };
    animals.push(animal);
    return animals
}
function index (animals) {
    return animals.map((animal) => animal.id + " " + animal.name).join("\n")
}
function show (animals, animalId) {
    const foundAnimal = animals.find((animal) => animal.id === animalId) ;
    return foundAnimal.id + " " + foundAnimal.name + " " + foundAnimal.points + " points"
}

function destroy (animals, animalId) {
   const index =  animals.findIndex((animal) => animal.id === animalId);
   if (index > -1) {
    animals.splice(index, 1);
    console.log("we deleted your animal");
    return animals
   } else {
    console.log("couldnt find an animal with that id")
   }
}
function update (animals, animalId, updatedAnimal ) {
    console.log(animalId)
    const index =  animals.findIndex((animal) => animal.id === animalId);
    if (index > -1) {
       animals[index].id = animalId;
       animals[index].name = updatedAnimal;
       animals[index].points = animalPoints[updatedAnimal];
       console.log("your animal has been updated");
       return animals
   } else {
     console.log("couldnt find an animal with that id")
    }
   
}
function score (animals) {
    const total = animals.reduce((a,b) => (a + b.points), 0)
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

