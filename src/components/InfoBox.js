import React from 'react'
import "../App.css"

const InfoBox = ({ ipAddress, location, timeZone, isp }) => {
    return (
        <div className="infoBox">
           <h6>IPADDRESS</h6>
           <p>{ipAddress}</p>
           <h6>LOCATION</h6>
           <p>{location}</p> 
           <h6>TIMEZONE</h6>
           <p>{timeZone}</p> 
           <h6>ISP</h6>
           <p>{isp}</p> 
        </div>
    )
}

export default InfoBox
