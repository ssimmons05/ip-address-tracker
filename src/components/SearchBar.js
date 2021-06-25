import React, {useState} from 'react'
import "../App.css"

const SearchBar = () => {
    // const [info, setInfo] = useState("");
    // let info = document.querySelector(".searchBar").innerHTML;
    // console.log(info);


    function getText() {
        // let address=document.querySelector(".searchBar").innerHTML;
        fetch(`https://geo.ipify.org/api/v1?apiKey=at_9266dgV17onwJseGusY9R1eYLhtne&ipAddress=208.80.152.2`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
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
                console.log(output);
            })
    }

    return (
        <div className="searchBar">
            <input placeholder="Enter your IP address"></input> 
            <button id="getText" onClick={getText}>Submit</button>
        </div> 
    )
}

export default SearchBar
