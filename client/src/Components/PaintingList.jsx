import React, { useContext } from 'react';
import PaintingContext from '../Context/PaintingContext';
import PaintingItem from '../Components/PaintingItem';
import Search from './Search';

const PaintingList = () => {
    const { paintingsArray, painting, setPainting, togglePainting, setTogglePainting, paintingsSearch, reset } = useContext( PaintingContext );


    const handleClick = (item) => {
        setPainting(item);
        setTogglePainting(true);
    };

    return (
        <div>
            <h2>Paintings List</h2>
            <Search/>
            <ul>
                {reset ? paintingsArray.map(item => {
                    return <li key={item._id} onClick={(e) => handleClick(item)}>
                        <p><strong>{item.title}</strong> by {item.artist}</p>
                    </li>
                }) : paintingsSearch.map(item => {
                    return <li key={item._id} onClick={(e) => handleClick(item)}>
                        <p><strong>{item.title}</strong> by {item.artist}</p>
                    </li>
                })}
                {togglePainting ? <PaintingItem painting={ painting } setTogglePainting={ setTogglePainting }/> : null}
            </ul>
        </div>
    )
}

export default PaintingList
