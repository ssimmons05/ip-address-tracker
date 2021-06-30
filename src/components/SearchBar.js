import React, {useState} from 'react'
import "../App.css"

const SearchBar = ({setLatitude, setLongitude, setInfo, setIPAddress, IPAddress}) => {

    const takeInput = (event) => {
        setIPAddress(event.target.value);
    }

    const url = `https://geo.ipify.org/api/v1?apiKey=at_9266dgV17onwJseGusY9R1eYLhtne&ipAddress=${IPAddress}`
    
    
    function getText(event) {
        event.preventDefault();
        console.log(IPAddress);
        // if (!IPAddress) {
        //     return alert("Please enter an address");
        // }
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setInfo(data);
                setLatitude(data.location.lat);
                setLongitude(data.location.lng);
                let location = (`${data.location.region}, ${data.location.city} - ${data.location.postalCode}`)

                let output = ""
                output +=
                    `<div>
                        <ul id="headings">
                            <h5>IP Address</h5>
                            <h5>ISP</h5>                                                        
                            <h5>Location</h5>                           
                            <h5>TimeZone Address</h5>   
                    </ul>
                   
                    <ul id="information">
                            <li>${data.ip}</li>
                            <li>${data.isp}</li>
                            <li>${location}</li>
                            <li>${data.location.timezone}</li>
                    </ul>
                    </div>`
                    ;

                document.getElementById("output").innerHTML = output;
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
