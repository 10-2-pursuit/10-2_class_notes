import "./App.css";
import { useState } from "react";
import CardList from "./components/CardList";
import MainDisplay from "./components/MainDisplay";
import useGetMTG from "./hooks/getMtgCards";
function App() {
  // set an empty array for our state
  // two items in array,
  // the STATE itself, and a funciton to update it
  const [allCards, setAllCards] = useGetMTG([]);
  // this is how we establish state
  // we return TWO items from the call
  // the first item is the statefullVariable, the second is the function to update
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div>
      <h1 className="title">Welcome To our MTG app</h1>
      <div className="app-container">
        {/* this is passing PROPS */}
        <MainDisplay selectedCard={selectedCard} />
        <CardList allCards={allCards} setSelectedCard={setSelectedCard} />
      </div>
    </div>
  );
}

export default App;
