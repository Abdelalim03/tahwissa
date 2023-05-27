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

import { useCallback, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export const AlgeriaMap = ({ cities, landing }) => {
  const [popupInfo, setPopupInfo] = useState(null);
  const mapStyle = useSelector((s) => s.mapStyle);
  const viewState = useSelector((s) => s.viewState);
  const dispatch = useDispatch();

  const onMove = useCallback((evt) => {
    dispatch({ type: "setViewState", payload: evt.viewState });
  }, []);

  const pins = useMemo(
    () =>
      cities.map((position) => {
        return (
          <Marker
            key={position.id}
            longitude={position.x}
            latitude={position.y}
            anchor="bottom"
            color="red"
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
      }),
    [cities]
  );

  return (
    <Map
      {...viewState}
      onMove={onMove}
      style={{ width: "100%", height: "100%" }}
      mapStyle={mapStyle}
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
          closeButton={false}
          anchor="top"
          longitude={Number(popupInfo.x)}
          latitude={Number(popupInfo.y)}
          onClose={() => setPopupInfo(null)}
        >
          <div className="relative">
           <FontAwesomeIcon onClick={()=>setPopupInfo(null)} className="cursor-pointer absolute  -top-3.5 -right-3.5"  size="xl" icon={faCircleXmark}    />
            <div className=" rounded-sm  flex flex-col items-start justify-center ">
              <img className="rounded-sm w-full" src={popupInfo.img} alt="" />
              <div className="ml-5 ">
                <Link href={`/interestpoints/${popupInfo.id}`}>
                  <h2 className="text-xl mb-2">{popupInfo.title}</h2>
                </Link>
                <span className="text-base  text-[#42A7C3]">
                  {popupInfo.category}
                </span>
              </div>
            </div>
          </div>
        </Popup>
      )}
    </Map>
  );
};
export default Map;
