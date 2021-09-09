import React from 'react';
import '../Styles/paintingItem.css';

const PaintingItem = ({ painting, setTogglePainting }) => {
    
    return (
        <div className="painting-item-div">
            <div className="img-div"><img src={painting.cover} alt={painting.title} /></div>
            <h3>{painting.title}</h3>
            <p>{painting.artist}</p>
            <p>Year: {painting.year}</p>
            <p>Price: {painting.price}</p>
            <button onClick={() => setTogglePainting()}>Back</button>
        </div>
    )
}

export default PaintingItem
