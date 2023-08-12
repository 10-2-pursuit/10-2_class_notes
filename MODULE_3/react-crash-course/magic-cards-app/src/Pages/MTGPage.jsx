import React from "react";
import { useState } from "react";
import CardList from "../components/CardList";
import MainDisplay from "../components/MainDisplay";
import useGetMTG from "../hooks/getMtgCards";
import Controlls from "../components/Controlls";
import Navbar from "../components/Navbar";
const MTGPage = () => {
  // set an empty array for our state
  // two items in array,
  // the STATE itself, and a funciton to update it
  const { allCards, displayedCards, getNewCards, setDisplayedCards } = useGetMTG();
  // this is how we establish state
  // we return TWO items from the call
  // the first item is the statefullVariable, the second is the function to update
  const [selectedCard, setSelectedCard] = useState(null);

  const filterDisplayedCards = (cardType) => {
    // filter the cards based on whether or not they match the type
    if (!cardType) {
      setDisplayedCards([...allCards]);
    } else {
      const filteredCards = allCards.filter((card) =>
        card.types.includes(cardType)
      );
      setDisplayedCards(filteredCards);
    }
  };
  return (
    <div>
      <header>
        <h1 className="title">Welcome To our MTG app</h1>
        <Controlls
          filterDisplayedCards={filterDisplayedCards}
          getNewCards={getNewCards}
          setSelectedCard={setSelectedCard}
        />
      </header>
      <div className="app-container">
        {/* this is passing PROPS */}
        <MainDisplay selectedCard={selectedCard} />
        <CardList
          displayedCards={displayedCards}
          setSelectedCard={setSelectedCard}
        />
      </div>
    </div>
  );
};

export default MTGPage;
