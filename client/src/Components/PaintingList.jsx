import React, { useState, useContext } from 'react';
import PaintingContext from '../Context/PaintingContext';
import PaintingItem from '../Components/PaintingItem';

const PaintingList = () => {
    const paintings = useContext( PaintingContext );
    const [painting, setPainting] = useState({});
    const [togglePainting, setTogglePainting] = useState(false);

    console.log(painting);

    const handleClick = (item) => {
        setPainting(item);
        setTogglePainting(!togglePainting);
    }

    return (
        <div>
            <h2>Paintings List</h2>
            <ul>
                {paintings.map(item => {
                    return <li onClick={(e) => handleClick(item)}>
                        <p><strong>{item.title}</strong> by {item.artist}</p>
                    </li>
                })}
                {togglePainting ? <PaintingItem painting={ painting }/> : null}
            </ul>
        </div>
    )
}

export default PaintingList
