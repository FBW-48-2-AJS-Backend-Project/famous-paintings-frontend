import React, { useState, useContext } from 'react';
import PaintingContext from '../Context/PaintingContext';

const AddPainting = () => {
    const { addPainting } = useContext( PaintingContext );
    const [newPainting, setNewPainting] = useState({
        title: "",
        artist: "",
        year: "",
        price: "",
        cover: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addPainting( newPainting );
    };

    return (
        <div>
            <h3>Add a Painting</h3>

            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="paintingTitle">Title:
                    <input onChange={(e) => setNewPainting({...newPainting, title: e.target.value })} type="text" name="paintingTitle" id="paintingTitle" />
                </label>

                <label htmlFor="paintingArtist">Artist:
                    <input onChange={(e) => setNewPainting({...newPainting, artist: e.target.value })} type="text" name="paintingArtist" id="paintingArtist" />
                </label>

                <label htmlFor="paintingYear">Year:
                    <input onChange={(e) => setNewPainting({...newPainting, year: e.target.value })} type="text" name="paintingYear" id="paintingYear" />
                </label>

                <label htmlFor="paintingPrice">Price:
                    <input onChange={(e) => setNewPainting({...newPainting, price: e.target.value })} type="text" name="paintingPrice" id="paintingPrice" />
                </label>

                <label htmlFor="paintingURL">Cover URL:
                    <input onChange={(e) => setNewPainting({...newPainting, cover: e.target.value })} type="text" name="paintingURL" id="paintingURL" />
                </label>

                <input type="submit" value="Add Painting" />
            </form>
        </div>
    )
}

export default AddPainting
