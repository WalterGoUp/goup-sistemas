/* eslint-disable prettier/prettier */
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDGFpg7xsr3jhc0aF9gG5-vFwuMQxh7f-E",
  });
  return (
    <div className="h-full w-full">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          center={{
            lat: -21.13183565960778,
            lng: -42.37948450069418,
          }}
          zoom={15}
        >
          <Marker
            position={{ lat: -21.13183565960778, lng: -42.37948450069418 }}
          />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}
