import React from 'react';

const PaintingItem = ({ painting }) => {
    console.log(painting);
    return (
        <div>
            <h3>{painting.title}</h3>
            <p>{painting.artist}</p>
            <p>{painting.year}</p>
            <p>{painting.price}</p>
        </div>
    )
}

export default PaintingItem
