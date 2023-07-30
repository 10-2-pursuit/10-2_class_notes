import React from "react";

function Aside({ dogsData }) {

  // JSX can NOT use statements;
  // JSX MUST use expresisons;
  return (
    <aside className="aside-container">
      <h3>Roster:</h3>
      <ol>
        { dogsData.map((dog) => (
         dog.present ? <li>{ dog.name }</li> : null
        ))}
      </ol>
    </aside>
  );
}

export default Aside;
