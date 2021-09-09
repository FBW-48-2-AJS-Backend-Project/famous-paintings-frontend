import React, { useContext } from 'react';
import PaintingContext from '../Context/PaintingContext';
import PaintingItem from '../Components/PaintingItem';
import Search from './Search';

const PaintingList = () => {
    const { paintingsArray, painting, setPainting, togglePainting, setTogglePainting, paintingsSearch, reset, cart, setCart } = useContext( PaintingContext );


    const handleClick = (item) => {
        setPainting(item);
        setTogglePainting(true);
    };

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    console.log(cart);

    return (
        <div>
            <h2>Paintings List</h2>
            <Search/>
            <ul>
                {reset ? paintingsArray.map(item => {
                    return <li key={item._id} onClick={(e) => handleClick(item)}>
                        <p><strong>{item.title}</strong> by {item.artist}</p>
                        <button onClick={(e) => addToCart(item)}>Add Painting to Cart</button>
                    </li>
                }) : paintingsSearch.map(item => {
                    return <li key={item._id} onClick={(e) => handleClick(item)}>
                        <p><strong>{item.title}</strong> by {item.artist}</p>
                        <button onClick={(e) => addToCart(item)}>Add Painting to Cart</button>
                    </li>
                })}
                {togglePainting ? <PaintingItem painting={ painting } setTogglePainting={ setTogglePainting }/> : null}
            </ul>
        </div>
    )
}

export default PaintingList
