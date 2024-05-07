import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapShowing = ({ weather }) => {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 11,
  });

  useEffect(() => {
    if (weather && weather.openWeather) {
      const { lat, lon } = weather.openWeather;
      setViewport((prevViewport) => ({
        ...prevViewport,
        latitude: lat,
        longitude: lon,
      }));
    }
  }, [weather]);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxAccessToken="pk.eyJ1IjoiYWd1c3Rpbi1nYXVuYSIsImEiOiJjbHZ2aWI0bHkxbHd2MmtvYm1zY25zdDYxIn0.bzv5wRa5IRm2dFX0YJjJ4Q"
        style={{ width: "100", height: 400 }}
        mapStyle={"mapbox://styles/mapbox/dark-v11"}
        onMove={(evt) => setViewport(evt.viewport)}
      ></ReactMapGL>
    </div>
  );
};

export default MapShowing;
