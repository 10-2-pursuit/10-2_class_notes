import "./App.css";
import { useState } from "react";
import CardList from "./components/CardList";
import MainDisplay from "./components/MainDisplay";
import useGetMTG from "./hooks/getMtgCards";
import ControlsContainer from "./components/ControlsContainer";

function App() {
  // custom logic in a "Hook" to fetch our data and return two stateful variables
  // and one function to update
  const { allCards, displayedCards, getNewCards, setDisplayedCards } = useGetMTG();
  // state for our selected card
  const [selectedCard, setSelectedCard] = useState(null);
  const resetCards = () => {
    getNewCards();
    setSelectedCard(null)
  }
  return (
    <div>
      <h1 className="title">Welcome To our MTG app</h1>
      <ControlsContainer
        displayedCards={displayedCards}
        allCards={allCards}
       resetCards = {resetCards}// Pass the resetCards function to ControlsContainer
        setDisplayedCards={setDisplayedCards}
      />
      <div className="app-container">
        <MainDisplay 
        selectedCard={selectedCard} 
        allCards={allCards}
        setSelectedCard={setSelectedCard}
        />
        <CardList
          allCards={allCards}
          setSelectedCard={setSelectedCard}
          displayedCards={displayedCards}
        />
      </div>
    </div>
  );
}

export default App;
