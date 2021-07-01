import React, {useState, useEffect} from 'react'
import "../App.css"

const SearchBar = ({setLatitude, setLongitude, setInfo, setIPAddress, IPAddress}) => {


    //Updating the state of the IPAddress each time the user types in the input field.
    const takeInput = (event) => {
        setIPAddress(event.target.value);
    }

    const url = `https://geo.ipify.org/api/v1?apiKey=at_9266dgV17onwJseGusY9R1eYLhtne&ipAddress=${IPAddress}`

    //Making a fetch request to the API on initial page load to display the user's API info.
    useEffect(() => {
        runFirstTime();
    },[]);

    function runFirstTime() {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setInfo(data);
            setLatitude(data.location.lat);
            setLongitude(data.location.lng);
        })
    }

    //Fetches data from the API after the user clicks the submit button.
    function getText(event) {
        event.preventDefault();
        console.log(IPAddress);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setInfo(data);
                setLatitude(data.location.lat);
                setLongitude(data.location.lng);
            })
    }

    return (
        <form className="searchBar" onSubmit={getText}>
            <input id="input" placeholder="  Enter your IP address" onChange={takeInput} />
            <button type="submit" id="getText">Submit</button>
        </form> 
    )
}

export default SearchBar
