import "./App.css";
import dogs from "./data.js";
import React from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";

const todaysDate = new Date().toDateString();
const dayCareName = "Bark and Bowl Doggy Day Care";

function App() {
  return (
    <div className="App">
      <Header 
      id="one" 
      breakfast="eggs and bacon"
      todaysDate={ todaysDate } 
      name={ dayCareName } 
      />
      <Aside dogsData={ dogs } />
      <Main dogs={ dogs } />
    </div>
  );
}
// example of what this *kinda* looks like under the hood
// Aside(dogs);

export default App;
