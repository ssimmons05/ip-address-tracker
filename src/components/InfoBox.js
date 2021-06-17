import React from 'react'
import "../App.css"

const InfoBox = ({ ipAddress, location, timeZone, isp }) => {
    return (
        <div className="infoBox">
           <p>{ipAddress}</p> 
           <p>{location}</p> 
           <p>{timeZone}</p> 
           <p>{isp}</p> 
        </div>
    )
}

export default InfoBox
