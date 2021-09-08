import React, { useState, useContext } from 'react';
import PaintingContext from '../Context/PaintingContext';

const EditItem = ({ painting, setTogglePainting }) => {
    const { updatePainting } = useContext( PaintingContext );
    const [editPainting, setEditPainting] = useState({
        title: painting.title,
        artist: painting.artist,
        year: painting.year,
        price: painting.price,
        cover: painting.cover,
        _id: painting._id
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePainting( editPainting );
    };

    return (
        <div>
            <h3>Edit Painting</h3>

            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="editPaintingTitle">Title:
                    <input onChange={(e) => setEditPainting({...editPainting, title: e.target.value })} type="text" name="editPaintingTitle" id="editPaintingTitle" placeholder={ painting.title } />
                </label>

                <label htmlFor="editPaintingArtist">Artist:
                    <input onChange={(e) => setEditPainting({...editPainting, artist: e.target.value })} type="text" name="editPaintingArtist" id="editPaintingArtist" placeholder={ painting.artist }  />
                </label>

                <label htmlFor="editPaintingYear">Year:
                    <input onChange={(e) => setEditPainting({...editPainting, year: e.target.value })} type="text" name="editPaintingYear" id="editPaintingYear" placeholder={ painting.year }  />
                </label>

                <label htmlFor="editPaintingPrice">Price:
                    <input onChange={(e) => setEditPainting({...editPainting, price: e.target.value })} type="text" name="editPaintingPrice" id="editPaintingPrice" placeholder={ painting.price }  />
                </label>

                <label htmlFor="editPaintingURL">Cover URL:
                    <input onChange={(e) => setEditPainting({...editPainting, cover: e.target.value })} type="text" name="editPaintingURL" id="editPaintingURL"  placeholder={ painting.cover } />
                </label>

                <input type="submit" value="Edit Painting" />
            </form>

            <button onClick={() => setTogglePainting()}>Back</button>
        </div>
    )
}

export default EditItem
