import Button from "../shared/Button";
import CardImage from "./CardImage";

const Card = (props) => {
  const { name, imageUrl, originalText, originalType} =
    props.card;
  const { setSelectedCard, isSelectedCard } = props;

  // short circuit
  // if no value is passed props.imageWidth is 'undefined'
  const imageWidth = props.imageWidth || "150px";

  const handleClick = (cardName) => {
    // this is our ENTIRE CARD OBJECT from our cards array
    const selectedCard = props.allCards.find((card) => {
      return card.name === cardName;
    });
    // this function is still wired up to update the state in APP
    // app then passes it to MainDisplay and we see the update
    // lifting state
    setSelectedCard(selectedCard);
  };

  const hanldeDelete = (cardName) => {
    const cardIndexToDelete = props.allCards.findIndex((card) => {
      return card.name === cardName;
    });
  };

  return (
    <div className="card-container">
      <div className="card-body">

        <CardImage imageUrl={imageUrl} imageWidth={imageWidth} />
        
        <div className="card-text">
          <h2>{name}</h2>
          <h3>{originalType}</h3>
          <p>{originalText}</p>
          {! isSelectedCard ? (
            <Button
              styles={{
                backgroundColor: "green",
                padding: "5px",
                textShadow: "2px solid black",
              }}
              onClick={() => handleClick(name)}
            >
              <p>Select {name}</p>
            </Button>
          ) : (
            <Button
              styles={{
                backgroundColor: "red",
                padding: "5px",
                textShadow: "2px solid black",
              }}
              onClick={() => {setSelectedCard("")}}
            >
              <p>Reset Selected </p>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
