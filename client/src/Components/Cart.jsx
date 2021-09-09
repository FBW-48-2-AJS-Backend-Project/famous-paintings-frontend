import React, { useContext } from 'react';
import PaintingContext from '../Context/PaintingContext';
import Navbar from './Navbar';

const Cart = () => {
    const { cart, setCart } = useContext( PaintingContext );


    return (
        <div>
            <h2>This is the Cart</h2>
            <Navbar/> 
            <ul>
                {cart.map(item => {
                    return <li key={item._id}>
                        <p><strong>{item.title}</strong></p>
                        <p>Artist: {item.artist}</p>
                        <p>Year: {item.year}</p>
                        <p>Price: {item.price}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Cart
