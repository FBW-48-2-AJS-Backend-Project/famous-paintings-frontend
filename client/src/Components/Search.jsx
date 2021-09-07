import React from 'react'

const Search = () => {
    return (
        <form>
            <label htmlFor="paintingSearch">Search by Artist: </label>
            <input type="text" name="paintingSearch" id="paintingSearch" />
            <input type="submit" value="Search" />
        </form>
    )
}

export default Search
