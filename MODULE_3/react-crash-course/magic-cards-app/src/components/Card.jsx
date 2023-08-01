import CardImage from "./CardImage";


const Card = (props) => {
  const { name, imageUrl, originalText, originalType, color} = props.card;
  const setSelectedCard = props.setSelectedCard
  // short circuit 
  // if no value is passed props.imageWidth is 'undefined'
  const imageWidth = props.imageWidth || '150px'

  const handleClick = (e) => {
    const cardName = e.target.id;
    // this is our ENTIRE CARD OBJECT from our cards array
    const selectedCard = props.allCards.find((card) => {
        return card.name === cardName
    })
    // this function is still wired up to update the state in APP
    // app then passes it to MainDisplay and we see the update
    // lifting state 
    setSelectedCard(selectedCard)
  }

  return (
    <div className="card-container">
      <div className="card-body">
       <CardImage imageUrl={imageUrl} imageWidth = {imageWidth}/>
        <div className="card-text">
          <h2>{name}</h2>
          <h3>{originalType}</h3>
          <p>{originalText}</p>
          <button id={ name }  onClick={ handleClick }>select</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
