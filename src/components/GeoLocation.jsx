import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];

function GeoLocation() {
  const [location, setLocation] = useState({});
  const [mapError, setMapError] = useState(null);

  const apiKey = process.env.REACT_APP_MAPS_API_KEY;
  
  const successCallback = (position) => {
    setLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };

  const errorCallback = (error) => {
    setMapError(error.message);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      setMapError("Geolocation is not supported by your browser");
    }
  }, []);

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  if (mapError) {
    return <div>Error: {mapError}</div>;
  }

  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={libraries}>
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={15} center={location}>
        {location.lat && location.lng && (
          <Marker key="userLocation" position={location} title="Your Location" />
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default GeoLocation;