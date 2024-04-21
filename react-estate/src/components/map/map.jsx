import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "./map.css";
import Pin from "../pin/page";

function Map({ items }) {
  return (
    <MapContainer
      center={
        items.length === 1
          ? [items[0].latitude, items[0].longitude]
          : [52.4797, -1.90269]
      }
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[31.858148, 35.962723]}>
        <Popup></Popup>
      </Marker>
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}

export default Map;
