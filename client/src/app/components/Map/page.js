import { GoogleMap, LoadScript } from '@react-google-maps/api';



const containerStyle = {
    width: '100vw',
    height: '40vh'
  };
  
  const center = {
    lat: 27.685222,
    lng: 85.345017
  };
  
  const Map=()=>{
    return (
        <LoadScript
        googleMapsApiKey="AIzaSyDLfjmFgDEt9_G2LXVyP61MZtVHE2M3H-0"
        libraries={["places"]}
      >
          <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
        ></GoogleMap>
      </LoadScript>

    )
}

export default Map;