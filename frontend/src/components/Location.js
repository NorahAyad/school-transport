import React, { useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const Location = ({ currentPosition, setCurrentPosition }) => {
  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const mapStyles = {
    height: "39vh",
  };

  const onMarkerDragEnd = (e) => {
    const lat = parseFloat(e.latLng.lat()).value;
    const lng = parseFloat(e.latLng.lng()).value;

    setCurrentPosition({ lat, lng });
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyDlLNJnrlRPNd1RcoB_1tN5mf4YzEQc0BY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentPosition}
      >
        {currentPosition.lat ? (
          <Marker
            position={currentPosition}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            draggable={true}
          />
        ) : null}
      </GoogleMap>
    </LoadScript>
  );
};
export default Location;
