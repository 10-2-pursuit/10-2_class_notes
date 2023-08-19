import React from 'react';
import useGetMTG  from "../hooks/getMtgCards"
const DnDpage = () => {
    const { allCards, displayedCards, getNewCards, setDisplayedCards } = useGetMTG();
    return (
        <div>
            <h1>coming soon dungeons and dragons stuff...nerd</h1>
            <h2>did you know we have {allCards.length} cards just chilling in state??? </h2>
        </div>
    );
}

export default DnDpage;
