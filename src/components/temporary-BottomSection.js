import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const BottomSection = ({position}) => {  
   

  // console.log(latitude);
  // console.log(longitude);
    

    //  let position =[];
    //  position.push(latitude);
    //  position.push(longitude);
     console.log(position);

     const position2 = [39.09973, -94.57857];
     console.log("Position2:" + position2);

    //  const position3 = [latitude, longitude];
    //  console.log("Position3:" + position3);


    return(
    
    // <div id = "map">
      <MapContainer style={{height: "60vh", zIndex: "-2", display: "absolute", top: "0", marginTop: "-100px"}}  center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          // id='mapbox/streets-v11'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          // accessToken="pk.eyJ1Ijoic3RldmUwNSIsImEiOiJja3E4a3kwMmIwMjRpMm5vYnNjN2tlb3R0In0.gaND5Fwpv3rmauTmFraR2A"
       
      
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    // </div>
    )
}
    

export default BottomSection
