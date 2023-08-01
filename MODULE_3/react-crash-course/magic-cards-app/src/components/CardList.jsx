import Card from "./Card";

const CardList = (props) => {

  console.log(props.allCards);
  const setSelectedCard = props.setSelectedCard
  // JSX things to remember
  // we cannot use statements - only epxressions
  // expressions resolve to a value - statements do not
  // JSX can NOT render an Object - only primitive values
  // JSX can use `()` to extend a line of code - preventing us form needing to write return
  // Array destructuring ` const [ selectedCard, setSelectedCard ] = useState(null)`;
  // above is a strange way of declaring two varaibles that are returned from one useState call
  return (
    <div className="card-list-container">
      <h2>Cards</h2>
      { props.allCards.map((card, index) => (
        <Card 
        allCards = { props.allCards }
        card = { card }
        key = { index }
        setSelectedCard = { setSelectedCard }
        />
      ) )}
    </div>
  );
};

export default CardList;
