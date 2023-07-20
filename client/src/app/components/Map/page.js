import React from 'react';
import {useState} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow   } from '@react-google-maps/api';



const containerStyle = {
    width: '100vw',
    height: '40vh'
  };
  
  const center = {
    lat: 27.685222,
    lng: 85.345017
  };
  
  const Map=()=>{
    const [showInfoWindow, setShowInfoWindow] = useState(false);
    const storeName = 'Your Choice'
    const toggleInfoWindow = () => {
      setShowInfoWindow(!showInfoWindow)
    }
    return (
        <LoadScript
        googleMapsApiKey="AIzaSyDLfjmFgDEt9_G2LXVyP61MZtVHE2M3H-0"
        libraries={["places"]}
      >
          <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
        >
          <Marker position={center} onClick={toggleInfoWindow}/>
           {showInfoWindow && (
          <InfoWindow position={center} onCloseClick={toggleInfoWindow}>
            <div>
              <h3>{storeName}</h3>
              <p>Address: koteshwor kathmandu</p>
              {/* Add other store information here */}
            </div>
          </InfoWindow>
        )}
        </GoogleMap>
      </LoadScript>

    )
}

export default Map;