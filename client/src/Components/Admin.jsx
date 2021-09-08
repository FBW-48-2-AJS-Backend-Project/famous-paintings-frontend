import React, { useContext } from 'react';
import PaintingContext from '../Context/PaintingContext';

const Admin = () => {
    const { paintingsArray, setPaintingsArray } = useContext( PaintingContext );

    return (
        <div>
            <h2>Admin Page</h2>
            <ul>
                {paintingsArray.map(item => {
                    return <li>
                            <p><strong>{item.title}</strong> by {item.artist}</p>
                        </li>})}
            </ul>
        </div>
    )
}

export default Admin
