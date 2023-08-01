import DogDetails from "./DogDetails";
import { dogsData } from "./data";
import { useState } from "react";

function App() {
  const [dogs, setDogs] = useState(dogsData);

  function addDog() {
    const newDog = {
      id: 100000,
      name: "Taco",
      present: false,
      grade: "60",
      notes: "Stole Prince's toys repeatedly.",
    };
    // to update state in an array we MUST MAKE A NEW ARRAY;
    // unpack the old state into a new array,
    setDogs([...dogs, newDog]);
  }
  function removeDog(dogId) {
    // filter returns a new array
    const filteredDogs = dogs.filter((dog) => dog.id !== dogId);
    setDogs(filteredDogs);
  }
  function updateDogAttendance(dogId) {
    // create a new array based on the old state called updatedDogs
    const updatedDogs = [ ...dogs] ;

    // we need to find the dog to update - find it by its index
    // this will return a number
    const index = updatedDogs.findIndex((dog) => dogId === dog.id);

    updatedDogs[index].present = !updatedDogs[index].present;

    // then we gotta update the dog
    
    // set the new state;

    setDogs(updatedDogs)
  }
  return (
    // jsx is a different animal - CLASS was already reserved
    <div className="App">
      <header>
        <h1> Bark and Bowl Doggy Day Care</h1>
        <h2>{new Date().toDateString()}</h2>
      </header>
      <aside></aside>
      <main>
        <ul>
          {dogs.map((dog) => {
            return (
              <li key={dog.id}>
                <span onClick={ () => { updateDogAttendance(dog.id) } }
                  style= {
                    dog.present
                      ? { textDecoration: "none" }
                      : { textDecoration: "line-through" }
                  }
                >
                  {dog.name}
                </span>
                <DogDetails dog={dog} />
                <button
                  onClick={() => {
                    removeDog(dog.id);
                  }}
                >
                  remove dog
                </button>
              </li>
            );
          })}
        </ul>
        <button onClick={addDog}>add dog</button>
      </main>
    </div>
  );
}

export default App;
