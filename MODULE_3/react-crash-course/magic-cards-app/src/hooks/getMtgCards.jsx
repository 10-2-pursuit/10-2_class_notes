import { useState, useEffect } from 'react';

const useGetMTG = () => {

    // our url
  const _API_URL = "https://api.magicthegathering.io/v1/sets/2ED/booster";
  // setting initial state for all current cards
  const [allCards, setAllCards] = useState([]);
  // setting a secondary state for the cards to be filtered
  const [displayedCards, setDisplayedCards] = useState([]);
// function to get new cards
  const getNewCards = async () => {
    try {
      const res = await fetch(_API_URL);
      const data = await res.json();
      // once await is over the next lines fire
      setAllCards(data.cards);
      setDisplayedCards(data.cards);
    } catch (err) {
      console.error("error getting data: ", err);
    }
  };
  // Method that fires once to get the cards
  useEffect(() => {
    getNewCards();
  }, []);

  return { allCards, displayedCards, getNewCards, setDisplayedCards };
};

export default useGetMTG;