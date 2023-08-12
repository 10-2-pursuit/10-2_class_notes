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
    const cardsData = await fetch(_API_URL);
    const cardJson = await cardsData.json();
    setAllCards(cardJson.cards);
    setDisplayedCards(cardJson.cards);
    // fetch(_API_URL).then()
  }

  // Method that fires once to get the cards
  // this fires WHENEVER STATE CHANGES
  // by default useEffect will fire on every state change;
  // so if we set state in a useEffect it will run indefinitely
  useEffect(() => {

    // secondary useEffect arg is a dependecy array
    // this tells useEffect what variables to listen for changes in 
    // if there are no varaibles useEffect will run only once it is mounted to the DOM
    getNewCards()
  },[])



  return { allCards, displayedCards, getNewCards, setDisplayedCards };
};

export default useGetMTG;