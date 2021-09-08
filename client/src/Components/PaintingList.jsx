import React, { useState, useContext } from 'react';
import PaintingContext from '../Context/PaintingContext';
import PaintingItem from '../Components/PaintingItem';
import Search from './Search';

const PaintingList = () => {
    const { paintingsArray, painting, setPainting, togglePainting, setTogglePainting, paintingsSearch, setPaintingsSearch, reset, setReset} = useContext( PaintingContext );


    const handleClick = (item) => {
        setPainting(item);
        setTogglePainting(true);
    };

    return (
        <div>
            <h2>Paintings List</h2>
            <Search paintingsSearch={ paintingsSearch } setPaintingsSearch={ setPaintingsSearch } reset={ reset } setReset={ setReset } />
            <ul>
                {reset ? paintingsArray.map(item => {
                    return <li onClick={(e) => handleClick(item)}>
                        <p><strong>{item.title}</strong> by {item.artist}</p>
                    </li>
                }) : paintingsSearch.map(item => {
                    return <li onClick={(e) => handleClick(item)}>
                        <p><strong>{item.title}</strong> by {item.artist}</p>
                    </li>
                })}
                {togglePainting ? <PaintingItem painting={ painting } setTogglePainting={ setTogglePainting }/> : null}
            </ul>
        </div>
    )
}

export default PaintingList
