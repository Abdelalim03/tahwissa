import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import GeocoderControl from "./geocoder-control";

import { useState } from "react";

export const AlgeriaMap = ({ cities }) => {
  const [popupInfo, setPopupInfo] = useState(null);

  const [viewport, setViewport] = useState({
    longitude: 3.1845359510239177,
    latitude: 36.720780606450575,
    zoom: 10,
  });

  const pins = cities.map((position) => {
    return (
      <Marker
        key={position.x}
        longitude={position.x}
        latitude={position.y}
        anchor="bottom"
        onClick={(e) => {
          // If we let the click event propagates to the map, it will immediately close the popup
          // with `closeOnClick: true`
          e.originalEvent.stopPropagation();
          setPopupInfo(position);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#004AE2"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      </Marker>
    );
  });

  return (
    <Map
      initialViewState={viewport}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.NEXT_PUBLIC_ACCESS_TOKEN}
    >
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" />
      <ScaleControl />
      <GeocoderControl
        mapboxAccessToken={process.env.NEXT_PUBLIC_ACCESS_TOKEN}
        countries="dz"
        position="top-right"
      />

      {pins}

      {popupInfo && (
        <Popup
          anchor="top"
          longitude={Number(popupInfo.x)}
          latitude={Number(popupInfo.y)}
          onClose={() => setPopupInfo(null)}
        >
          <div>
            {popupInfo.city}, {popupInfo.state} |{" "}
            <a
              target="_new"
              href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.state}`}
            >
              Wikipedia
            </a>
          </div>
          <img
            width="100%"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Bougaa_%D8%A8%D9%88%D9%82%D8%A7%D8%B9%D8%A9.jpg/1280px-Bougaa_%D8%A8%D9%88%D9%82%D8%A7%D8%B9%D8%A9.jpg"
            }
          />
        </Popup>
      )}
    </Map>
  );
};
export default Map;
