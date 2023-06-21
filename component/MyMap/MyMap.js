import React, { useRef, useState } from "react";
/* import Link from "next/link"; */
import Map, { Marker, Popup, ViewState } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function MyMap() {
  const mapRef = useRef(null);
  const [viewport, setViewport] = useState({
    latitude: 52.531677,
    longitude: 13.381777,
    zoom: 10,
  });
  return (
    <>
      <div className=" position-relative ">
        <Map
          initialViewState={{ ...viewport }}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          ref={(instance) => (mapRef.current = instance)}
          /* minZoom={1} */
          maxZoom={15}
          style={{ width: "100vw", height: "40vh" }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
        ></Map>
      </div>
    </>
  );
}
