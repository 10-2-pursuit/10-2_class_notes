import { useState } from 'react';
// this file is going to be in charge
// of rendering the inputs for our state updating


const Controlls = ({filterDisplayedCards, getNewCards, setSelectedCard }) => {
    const [selectedType, setSelectedType] = useState("");

    const handleSelect = (e) => {
        const type = e.target.value;
        setSelectedType(type);
        filterDisplayedCards(type)
        
    }

    const handleClick = () => {
        getNewCards()
        setSelectedCard(null)
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
        <div>
            <h1>Controls</h1>
            <ul>
                <li>
                    <label htmlFor='select-type'></label>
                    <select id="select-type" onChange={handleSelect}>
                        <option value="">All cards</option>
                        { types.map(type => (
                            <option value={type}>{type}</option>
                        ))}
                    </select>
                </li>
                <li>
                    <button onClick={handleClick}>Get New Cards</button>
                </li>
            </ul>
        </div>
    );
}

export default Controlls;
