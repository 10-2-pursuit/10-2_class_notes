import { useState, useEffect } from 'react';
// getting data and saving it in a way that react responds to
// this is not something we need to fully understand until later down the road
const useGetMTG =  () => {
    const _API_URL = "https://api.magicthegathering.io/v1/sets/2ED/booster"
    const [ cards, setCards ] = useState([]);


    useEffect(() => {
        const getCardsData = async () => {
            try {
                const res = await fetch(_API_URL);
                const data = await res.json();
              
                setCards(data.cards)
            } catch (err) {
                console.error("error getting data: ", err)
            }
        } 
        getCardsData()
    }, [])

    return [ cards, setCards ]
};

export default useGetMTG;