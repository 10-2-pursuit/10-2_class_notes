
import { dogsData } from "./data";
// why doe these have `{}` on import?
import { useState } from "react";
import DogDetails from "./DogDetails";

import { v1 as generateUniqueID } from "uuid";
// we n
function App() {
  const [dogs, setDogs] = useState(dogsData);
  const [example, setExample] = useState("");
  // toggle to show or hide the form!
  const [showNewDogForm, setNewDogForm] = useState(true);
  const [checked, setChecked] = useState(false);
  const [selectOption, setSelectOption] = useState("")
  // are tracking our NEWDOG from the form, and updating it;
  // later down the road we will add this state to our setDogs()
  const [ newDog, setNewDog ] = useState({
    id: "",
    name: "",
    present: false,
    grade: 100,
    age: "",
    likesSwimming: "",
    favFlavor: "",
    contact: "",
  });
  const handleExampleChange = (e) => {
    setExample(e.target.value)
  }
  // this is another toggle
  const handleCheckboxChange = () => {
    setChecked(!checked)
  }

  function handleSubmit(e) {
    e.preventDefault();
    // if we do reset prior to add dog we wont have state to add
    addDog();
    resetDogForm();
    toggleNewDogForm();

  }
 
  const handleTextChange = (e) => { 
    setNewDog({
      ...newDog,
      // key of whatever the input was : the value 
      [e.target.id] : e.target.value
    })
    
  }
  const handleSelectChange = (e) => {
    setSelectOption(e.target.value)
  }
  
  function addDog() {
    const dogToAdd = {
      id: generateUniqueID(),
      name:newDog.name,
      present:false,
      grade:100,
      notes:"",
      age:newDog.age,
      contact:newDog.contact,
      favFlavor:selectOption,
      likesSwimming:checked
    }
      // this wasn't supposed to be here - oops
    setDogs([...dogs, dogToAdd]);
  }
  
  function removeDog(dogID) {
    const filteredDogArray = dogs.filter((dog) => dog.id !== dogID);
    setDogs(filteredDogArray);
  }

  function toggleNewDogForm() {
    setNewDogForm(!showNewDogForm);
  }

  function updateDogAttendance(dogId) {
    const dogArray = [...dogs];
    const index = dogArray.findIndex((dog) => dogId === dog.id);
    dogArray[index].present = !dogArray[index].present;
    setDogs(dogArray);
  }
  const resetDogForm = () => {
    const dogToAdd = {
      id: "",
      name:"",
      present:false,
      grade:100,
      notes:"",
      age:"",
      contact:'',
      favFlavor:"",
      likesSwimming:""
    }
    setNewDog(dogToAdd)
    // checkbox?
    setChecked(false)
    // select?
    setSelectOption("")
  }




  return (
    <div className="App">
      <header>
        <h1> { example }</h1>
      </header>
      <label htmlFor="example">example only</label>
      <input id="example" 
      onChange={handleExampleChange}
      // we need to connect this to the state we want to update
    // to Controll the component
      value={ example }
      type="text"></input>
      <main>
        <div >
          {/* when the event is triggered - a synthetic event is passed to the function */}
          <button onClick={ toggleNewDogForm }>
            {showNewDogForm ? "hide form" : "Add a new dog"}
          </button>
          {showNewDogForm ? (
            // this is the handler for when our form is submitted
            <form onSubmit={ handleSubmit }>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                onChange={ handleTextChange }
                value={ newDog.name }
              />

              <label htmlFor="age">Age:</label>
              <input
                type="number"
                min="0"
                id="age"
                onChange={ handleTextChange }
                value={ newDog.age }
              />

              <label htmlFor="contact">Contact:</label>
              <input
                type="email"
                id="contact"
                placeholder="enter email"
                onChange={ handleTextChange }
                value={ newDog.contact }
              />
              <label htmlFor="favFlavor">Favorite flavor:</label>
              {/*  each event creates a React.SyntheticEvent */}
              <select id="favFlavor" value = {selectOption} onChange={ handleSelectChange }>
                {/* we need to get the value from the event */}
                <option value=""></option>
                <option value="beef">Beef</option>
                <option value="chicken">Chicken</option>
                <option value="carrot">Carrot</option>
                <option value="bacon">Bacon</option>
              </select>
              <label>Likes swimming:</label>
              <input type="checkbox" checked = {checked} onChange={ handleCheckboxChange } />
              <br />
              <input type="submit" />
            </form>
          ) : null}
        </div>
        <div>
          <ul>
            {dogs.map((dog) => {
              return (
                <li key={dog.id}>
                  <span
                    onClick={() => updateDogAttendance(dog.id)}
                    style={
                      dog.present
                        ? { textDecoration: "none" }
                        : { textDecoration: "line-through" }
                    }
                  >
                    {dog.name}{" "}
                  </span>

                  <button onClick={() => removeDog(dog.id)}>remove</button>
                  <DogDetails dog={dog} />
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
