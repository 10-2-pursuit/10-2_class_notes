import React from "react";

function Main({ dogs }) {
  
  const getAverage = (arr) => {
    let sum = 0;
    for(let dog of arr) {
      sum += parseInt(dog.grade)
    }
    return (sum / arr.length).toFixed(2)
  }
  const doggoAverage = getAverage(dogs)
  // the return is where JSX lives
  // only in the return can we NOT use expressions
  return (
    <main>
      <h2>Class Average: {doggoAverage}</h2>
      <h3>Notable performances and grades:</h3>
      <ul>{dogs.map((dog) =>(
        <li> 
          <span>{dog.name}:</span> {dog.notes} 
          <span>Grade: {dog.grade}</span>
          </li>
      ))}
      </ul>
    </main>
  );
}

export default Main;
