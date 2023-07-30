import React from 'react';

const CardImage = (props) => {
const { imageUrl, imageWidth } = props

    return (
        <div>
             <img src={imageUrl} width = {imageWidth}></img>
        </div>
    );
}

export default CardImage;

