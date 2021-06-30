import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, MapConsumer } from 'react-leaflet'

const BottomSection = ({position}) => { 
  
  const [coordinates, setCoordinates] = useState(position);

  useEffect(() => {
    setCoordinates(position);
    console.log("3: Runs on initial render and on change of dependencies.");
  },[position]);

  console.log(position + "this is where we're looking.");

    return(
    
    // <div id = "map">
    <MapContainer
      style={{height: "60vh"}}
      center={coordinates}
      zoom={13}
      scrollWheelZoom={false}
    >
      <MapConsumer>
        {(map) => {
          console.log('map center:', map.getCenter());
          return null;
        }}
      </MapConsumer>

      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}>
        <Popup>
          A pretty CSS3 popup.
          {' '}
          <br />
          {' '}
          Easily customizable.
        </Popup>
      </Marker>
  </MapContainer>

    //  </div>
    )
}
    

export default BottomSection
