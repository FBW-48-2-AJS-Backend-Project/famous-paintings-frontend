import React from 'react';

const PaintingItem = ({ painting, setTogglePainting }) => {
    
    return (
        <div>
            <h3>{painting.title}</h3>
            <img src={painting.cover} alt={painting.title} />
            <p>{painting.artist}</p>
            <p>Year: {painting.year}</p>
            <p>Price: {painting.price}</p>
            <button onClick={() => setTogglePainting()}>Back</button>
        </div>
    )
}

export default PaintingItem
