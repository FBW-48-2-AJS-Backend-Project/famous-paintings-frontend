import React, { useContext } from 'react';
import PaintingContext from '../Context/PaintingContext';
import EditItem from '../Components/EditItem';
import Search from './Search';
import AddPainting from './AddPainting';
import Navbar from './Navbar';

const Admin = () => {
    const { paintingsArray, setPaintingsArray, painting, setPainting, togglePainting, setTogglePainting, paintingsSearch, reset, deletePainting } = useContext( PaintingContext );

    const handleClick = (item) => {
        setPainting(item);
        setTogglePainting(true);
    };

    const handleDelete = (item) => {
        alert("Do you really want to delete this painting?");
        deletePainting(item);
    }

    return (
        <div>
            <h2>Admin Page</h2>
            <Navbar/>
            <Search/>
            <AddPainting/>
            <ul>
                {reset ? paintingsArray.map(item => {
                    return <li key={item._id} onClick={(e) => handleClick(item)}>
                        <p><strong>{item.title}</strong> by {item.artist}</p>
                        <button onClick={() => handleDelete(item)}>Delete</button>
                    </li>
                }) : paintingsSearch.map(item => {
                    return <li key={item._id} onClick={(e) => handleClick(item)}>
                        <p><strong>{item.title}</strong> by {item.artist}</p>
                        <button onClick={() => handleDelete(item)}>Delete</button>
                    </li>
                })}
                {togglePainting ? <EditItem painting={ painting } setTogglePainting={ setTogglePainting }/> : null}
            </ul>
        </div>
    )
}

export default Admin
