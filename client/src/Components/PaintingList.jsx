import React, { useContext } from 'react';
import PaintingContext from '../Context/PaintingContext';
import PaintingItem from '../Components/PaintingItem';
import "../Styles/paintingList.css";
import Search from './Search';

const PaintingList = () => {
    const { paintingsArray, painting, setPainting, togglePainting, setTogglePainting, paintingsSearch, reset, cart, setCart, addToCart } = useContext( PaintingContext );


    const handleClick = (item) => {
        setPainting(item);
        setTogglePainting(true);
    };

    console.log(cart);

    return (

        <div className="main-flex-container">
            <div className="painting-list-container">
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
                </ul>
            </div>                
            <div>{togglePainting ? <PaintingItem painting={ painting } setTogglePainting={ setTogglePainting }/> : null}</div>
        </div>
    )
}

export default PaintingList
