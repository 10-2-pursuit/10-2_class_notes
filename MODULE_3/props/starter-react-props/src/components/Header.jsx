import React from "react";
// destructuring the properties from App
function Header({ name, todaysDate }) {
// function Header(props) {
  // this props object is available to access inside of this scope

  // either way works!

  return (
    <header>
      <></>
      <h1>
        { name }
        {/* props.name */}
      </h1>
      <h2>{ todaysDate }</h2>
      {/* <h2>{ props.todaysDate }</h2> */}
    </header>
  );
}

export default Header;
