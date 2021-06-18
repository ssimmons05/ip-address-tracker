import React from 'react'
import "../App.css"

const SearchBar = () => {
    return (
        <div className="searchBar">
           <input placeholder="Enter your IP address"></input> 
           <button onClick="getLocation">Submit</button>
        </div>
    )
}

export default SearchBar
