const { readJSONFile, writeJSONFile } = require("./src/helpers");
const { 
    create, 
    index,
    show,
    destroy,
    update,
    score
} = require("./src/animals-controller")
// this file serves as the entry point for our app
// function to actually start the applicaiton
    // should:
    // get a handle on user input
    // read current data
    // determine aciton based on user input
    // update data if needed
const run = () => {
    // get user input
    const action = process.argv[2];
    const animal = process.argv[3];
    let animals = readJSONFile("./data", "animals-data.json")
    let writeToFile = false;
    let updatedAnimals = [];
    // switch statement will dictate what we are doing
    switch (action) {
        case "index" :
            const allAnimals = index(animals)
            console.log(allAnimals);
            break;   
        case "create" :
            console.log("CREATE IS FIRING")
            updatedAnimals = create(animals, animal) 
            writeToFile = true;
            break;
        case "show" :
            const foundAnimal = show(animals, animal)
            console.log(foundAnimal)
            break ;  
        case "update" :
            console.log(animal,  " %%%%%%% ")
            updatedAnimals = update(animals, animal, process.argv[4]);
            writeToFile = true;
            break; 
        case "destroy" :
            updatedAnimals = destroy(animals, animal);
            writeToFile = true;
            break ;  
        case "score" :
            console.log(score(animals))
            break; 
        default :
        console.log("hey there was an error")  
    }
    if (writeToFile) {
        console.log("new data detected - updating")
        writeJSONFile("./data", "animals-data.json", updatedAnimals)
    }

}

// executing our application
run()