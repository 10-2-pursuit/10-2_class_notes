import MagicCard from "./MagicCard";
// props is short for properties
// oop - object oriented 
const CardList = (props) => {
  const { setSelectedCard, displayedCards } = props;
  // props is always an object
  // props looks like this 
  /*
  props = { 
      displayedCards: displayedCards,
      setSelectedCards: setSelectedCards 
    }
  
  */ 
  // JSX things to remember
  // we cannot use statements - only epxressions
  // expressions resolve to a value - statements do not
  // JSX can NOT render an Object - only primitive values
  // JSX can use `()` to extend a line of code - preventing us form needing to write return
  // Array destructuring ` const [ selectedCard, setSelectedCard ] = useState(null)`;
  // above is a strange way of declaring two varaibles that are returned from one useState call
  return (
    <div className="card-list-container">
      <h2>Displaying {displayedCards.length} Cards</h2>
      {/* card ===  obj in state var displayedCards; index === the index of the arr displayedCards*/}
      { displayedCards.map( (card, index) => (
        < MagicCard
          displayedCards={ displayedCards }
          card={ card } 
          key={ index }
          setSelectedCard={ setSelectedCard }
        />
      )
      )}
    </div>
  );
};

export default CardList;
