import React, { useContext } from 'react';
import PaintingContext from '../Context/PaintingContext';

const PaintingList = () => {
    const paintings = useContext( PaintingContext );

    return (
        <div>
            <h2>Paintings List</h2>
            <ul>
                {paintings.map(item => {
                    return <li>
                        <strong>{item.title}</strong> by {item.artist}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default PaintingList
