// Map.jsx
import React from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const Map = ({ from, to }) => {
  const [directions, setDirections] = React.useState(null);

  const gmapapi = process.env.REACT_APP_MAPS_API_KEY
  console.log(gmapapi)

  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setDirections(response);
      } else {
        console.error('response: ', response);
      }
    }
  }

  return (
    <LoadScript googleMapsApiKey={gmapapi}>
      <GoogleMap
        id='direction-example'
        mapContainerStyle={{
          height: "400px",
          width: "800px"
        }}
        zoom={2}
        center={{
          lat: 0, 
          lng: -180
        }}
      >
        {
          (from && to) && (
            <DirectionsService
              options={{ 
                destination: { lat: to.lat, lng: to.lng },
                origin: { lat: from.lat, lng: from.lng },
                travelMode: 'DRIVING'
              }}
              callback={directionsCallback}
            />
          )
        }

        {
          directions && (
            <DirectionsRenderer
              options={{ 
                directions: directions
              }}
            />
          )
        }
      </GoogleMap>
    </LoadScript>
  )
}

export default Map;