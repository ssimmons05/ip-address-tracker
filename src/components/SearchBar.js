import React from 'react'
import "../App.css"

const SearchBar = () => {

    document.getElementById("getText").addEventListener('submit', getText);

    function getText() {
        fetch("https://geo.ipify.org/api/v1?apiKey=at_9266dgV17onwJseGusY9R1eYLhtne&ipAddress=8.8.8.8")
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("output").innerHTML = data;
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className="searchBar">
           <input placeholder="Enter your IP address"></input> 
           <button id="getText">Submit</button>
        </div>
    )
}

export default SearchBar
