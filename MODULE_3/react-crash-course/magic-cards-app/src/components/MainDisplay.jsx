import React, { Component } from "react";
import MagicCard from "./MagicCard";
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
  
  const selectedCard = props.selectedCard;

  return selectedCard ? (
    <div className="main-display-container">
        <h1>{ selectedCard.name }</h1>
      <MagicCard card ={ selectedCard } imageWidth = '550px'/>
    </div>
  ) : (
    <div>
      <h1>no card selected</h1>
    </div>
  );
};

export default MainDisplay;
