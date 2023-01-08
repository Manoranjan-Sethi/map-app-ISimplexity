import React from "react";
import "./Maplayer.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
  Circle,
  FeatureGroup,
} from "react-leaflet";
import data from "../../data/data.json";

function Maplayer() {
  const a = [51.505, -0.09];
  const b = [20.658547, 76.777285];
  const c = [34.764232, -101.113328];

  return (
    <MapContainer center={(a, b, c)} zoom={3} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayersControl position="topright">
        <LayersControl.Overlay name="Marker with popup">
          {/* <Marker position={(a, b, c)}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name="Layer group with circles">
          {/* {data.map((ele) => (
            <div key={ele.id}>
              <Circle
                center={[ele.lat, ele.lon]}
                pathOptions={{ fillColor: "red" }}
                radius={500000}
              />
            </div>
          ))} */}
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Feature group">
          {data?.map((ele) => (
            <FeatureGroup key={ele.id} pathOptions={{ color: "purple" }}>
              <Popup>Data usage is {ele.dataUsage}</Popup>
              <Circle center={[ele.lat, ele.lon]} radius={390000} />
            </FeatureGroup>
          ))}
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
}

export default Maplayer;
