const { readJSONFile, writeJSONFile } = require("./src/helpers");
const { 
    create, 
    index,
    show,
    destroy,
    update,
    score
} = require("./src/animals-controller")
/*
    This funciton is responsible for directing the flow of our application.

    In order to properly CRUD some resources we need to perform the following

        1 - get a handle on the user input from te command line- save them in variables
            - what do they want to do?
            - are they passing any extra information we need to CRUD our data
        2 - determine what functions need to be called based on user acitons
            - Create, Read, Update, and Delete will all neeed their own functions 
            - we also need to determin whether or not we need to write our new information to the data file
        3 - Execute CRUD functionalty
            - Save the new state of our data - do we need to re-write our data file?
        4 - Remember to invoke our run() file at the bottom of the file
        
    And thats it.

*/

const run = () => {
// When our users run one of our npm scripts they will pass an argument 
        // we need to get a handle on that argument so we can execute the correct action
            // this argument will always be `prcoess.argv[2]`
    const action = process.argv[2];
    // in the event the user passes a third argument it will always be `process.argv[3]`
        // our app is designed so this will be an animal
    const animal = process.argv[3];
    // in order to get the state of our data we need to invoke our readJSONFile helper
        // we save this in the variable `animals`
    let animals = readJSONFile("./data", "animals-data.json")
    // we will use this variable later 
        // to determine wether or not we need to record new information to the data file
    let writeToFile = false;
    let updatedAnimals = [];
    // switch statement will dictate what we are doing based on the 'action' variable
    switch (action) {
        // the index route will display all of our data
        case "index" :
            const allAnimals = index(animals)
            console.log(allAnimals);
            break;   
        // the create route will create a new record in our data
        case "create" :
            console.log("CREATE IS FIRING")
            updatedAnimals = create(animals, animal) 
            writeToFile = true;
            break;
        // the show route will display information on one specific record
        case "show" :
            const foundAnimal = show(animals, animal)
            console.log(foundAnimal)
            break ;  
        // update will change the data at a specific record
        case "update" :
            console.log(animal,  " %%%%%%% ")
            updatedAnimals = update(animals, animal, process.argv[4]);
            writeToFile = true;
            break; 
        // destroy will delete a record from our data at a specific point
        case "destroy" :
            updatedAnimals = destroy(animals, animal);
            writeToFile = true;
            break ;  
        // score will reduce the data's 'points' value to a number and display it to the user
        case "score" :
            console.log(score(animals))
            break; 
        default :
        console.log("hey there was an error")  
    }
    // once the nescesarry action has been created 
        // we determine whether or not to write new data to the data file
    if (writeToFile) {
        console.log("new data detected - updating")
        // here we pass our `updatedAnimals` to our writeJSONFile to record out new entries
        writeJSONFile("./data", "animals-data.json", updatedAnimals)
    }

}

// executing our application
run()