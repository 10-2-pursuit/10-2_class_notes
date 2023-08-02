import React, { Component } from "react";
import Card from "./Card";
import ControlsContainer from "./ControlsContainer";
// object oriented programming - everything is an object
// { state: true, wheels: 4 }
// class MainDisplay extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         );
//     }
// }

// functional programming - everything is a function
// useState([]) => function call holds the logic
// hasWheels(4) ;

const MainDisplay = (props) => {
  
  const { selectedCard, allCards, setSelectedCard} = props
  
  return selectedCard ? (
    <div className="main-display-container">
        <h1>{ selectedCard.name }</h1>

        <div>
        </div>  
      <Card 
      card ={ selectedCard } 
      isSelectedCard = { true } 
      imageWidth = '350px'
      allCards = {allCards}
      setSelectedCard = {setSelectedCard}
      />
    </div>
  ) : (
    <div>
      <h1>no card selected</h1>
      
    </div>
  );
};

export default MainDisplay;
