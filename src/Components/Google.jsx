import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '1000px', // Ensure container has proper dimensions
  height: '400px',
};

const center = {
  lat: 22.71792, // Latitude for Indore
  lng: 75.8333, // Longitude for Indore
};

const markerPosition = {
  lat: 22.7196, // Latitude for Indore
  lng: 75.8333, // Longitude for Indore
};

function MyComponent() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDBfkbGkKTTkHStLERJ5SHIPFAPfJcqafo" // Your API key
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
    console.log('Map loaded:', map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  if (loadError) {
    return <div>Error loading map: {loadError.message}</div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false
      }}
    >
      <Marker
        position={markerPosition}
        label={{
          text: 'Black Grapes Investment & Securities',
          color: 'red',
          fontSize: '14px',
          fontWeight: 'bold',
        }}
      />
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
}

export default React.memo(MyComponent);
