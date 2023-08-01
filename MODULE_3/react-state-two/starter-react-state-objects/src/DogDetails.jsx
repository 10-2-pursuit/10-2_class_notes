import { useState } from "react";
export default function DogDetails({ dog }) {
  const [showDetails, setShowDetails] = useState(false);
  function toggleDogDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <>
      <button onClick={toggleDogDetails}>
        {!showDetails ? "Show details" : "Hide details"}
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
