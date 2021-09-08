import React, { useState, useContext } from 'react';
import PaintingContext from '../Context/PaintingContext';

const Search = () => {
    const { paintingsArray, paintingsSearch, setPaintingsSearch, reset, setReset } = useContext( PaintingContext );
    const [query, setQuery] = useState("");

    const handleChange = e => {
        const typedText = e.target.value;
        setQuery( typedText );
    };

    const handleSubmit = e => {
        e.preventDefault();
        const tempArr = paintingsArray.filter(item => {
            return item.artist.toLowerCase().includes( query );
        });
        setPaintingsSearch( tempArr );
        setQuery("");
        setReset(false);
    };
    
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="paintingSearch">Search by Artist: </label>
            <input onChange={(e) => handleChange(e)} type="text" name="paintingSearch" id="paintingSearch" value={ query }/>
            <input type="submit" value="Search" />
            <input onClick={() => setReset(!reset)} type="reset" value="Reset" />
        </form>
    )
}

export default Search
