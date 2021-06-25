import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import SearchBar from './SearchBar';



const BottomSection = () => {  

    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");

    setLat(data.location.lat);
    setLong(data.location.lng);

    //  const position = [51.505, -0.09] 
    const position = [lat, long];
    console.log(position);

    return(
    
    <div id = "map">
      <MapContainer style={{height: "60vh", zIndex: "-2", display: "absolute", top: "0", marginTop: "-100px"}}  center={position} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          id='mapbox/streets-v11'
          url='https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
          accessToken="pk.eyJ1Ijoic3RldmUwNSIsImEiOiJja3E4a3kwMmIwMjRpMm5vYnNjN2tlb3R0In0.gaND5Fwpv3rmauTmFraR2A"
        //   tileSize="512"
        //   zoomOffset= "-1"
      
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
    )
}
    

export default BottomSection
