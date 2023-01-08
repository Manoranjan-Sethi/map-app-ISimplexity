import React from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import data from "../../data/data.json";

function Map() {
  console.log(data);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data.map((tile) => (
        <Marker key={tile.id} position={[tile.lat, tile.lon]}></Marker>
      ))}
    </MapContainer>
  );
}

export default Map;

{
  /* <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup> */
}
