import { useState } from "react";
// we are destructuring our prop
export default function DogDetails({ dog }) {
  // we are taking an array apart 
  // useState comes from react;
  // whatever we pass it BECOMES the state of the first variable
  // second item is the function to update the first
  // const showDetails = useState(false)[0]
  // const setShowDetails = useState(false)[1]
  // the big takeaway is we get a STATEFUL VARIABLE (react magic)
  // and a way to UPDATE THAT STATEFUL VARAIABLE
  const [ showDetails, setShowDetails ] = useState(false);

  function toggleDogDetails() {
    // sets the state to the opposite of what it is
    setShowDetails(!showDetails);
  }

  return (
    <>
      <button onClick={ toggleDogDetails }>
        { !showDetails ? "Show details" : "Hide details"}
      </button>
      {showDetails ? (
        <>
          <p>id:{dog.id}</p>
          <p>present:{dog.present ? "true" : "false"}</p>
          <p>grade: {dog.grade}</p>
          <p>notes: {dog.notes}</p>
        </>
      ) : null}
    </>
  );
}
