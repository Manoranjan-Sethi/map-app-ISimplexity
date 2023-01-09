import React from "react";
import "./Maplayer.css";
import {
  MapContainer,
  TileLayer,
  Popup,
  LayersControl,
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
        <LayersControl.Overlay name="Marker with popup"></LayersControl.Overlay>
        <LayersControl.Overlay
          checked
          name="Layer group with circles"
        ></LayersControl.Overlay>
        <LayersControl.Overlay name="Feature group">
          {data?.map((ele) => (
            <FeatureGroup
              key={ele.id}
              pathOptions={{
                color:
                  ele.dataUsage < 101
                    ? "red"
                    : ele.dataUsage < 201
                    ? "green"
                    : ele.dataUsage < 301
                    ? "blue"
                    : ele.dataUsage < 401
                    ? "cyan"
                    : ele.dataUsage < 501
                    ? "orange"
                    : ele.dataUsage < 601
                    ? "black"
                    : ele.dataUsage < 701
                    ? "purple"
                    : "white",
              }}
            >
              <Popup>Data usage is {ele.dataUsage}</Popup>
              <Circle center={[ele.lat, ele.lon]} radius={ele.area} />
            </FeatureGroup>
          ))}
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
}

export default Maplayer;
