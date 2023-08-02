import { useState } from "react";
import Control from "./Control";
import Button from "../shared/Button";

const ControlsContainer = ({ setDisplayedCards , allCards, resetCards}) => {
  const [selectedType, setSelectedType] = useState("");

  const filterCardsByType = (type) => {
    if(!type) setDisplayedCards([...allCards]);
    const filteredCards  = allCards.filter(card => card.type.includes(type));
    setDisplayedCards(filteredCards);
  }
  const handleSelect = (e) => {
    const type = e.target.value;
    setSelectedType(type);
    filterCardsByType(type);
  };
  const handleReset = () => {
    // function that comes all the way down from our cusotm hook
   resetCards();
    
    
  }
  const types = [
    "Artifact",
    "Conspiracy",
    "Creature",
    "Enchantment",
    "Instant",
    "Land",
    "Phenomenon",
    "Plane",
    "Planeswalker",
    "Scheme",
    "Sorcery",
    "Tribal",
    "Vanguard",
  ];
  return (
    <div className="controls-header">
      <h2>Controls</h2>
      <div className="controls-list-container">
        <ul className="controls-container">
          <li>
            <label htmlFor="filter"> Filter by card type </label>
            <select id="filter" onChange={ handleSelect }>
              <option value="">All</option>
              { types.map((type) => (
                <option value={type}>{type}</option>
              ))}
            </select>
          </li>
          <li>
            <Button onClick = {handleReset}>Get New Cards</Button>
          </li>
          <li>
            <input></input>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ControlsContainer;
