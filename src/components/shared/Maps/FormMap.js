
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
  import {useSelector, useDispatch} from 'react-redux';
  import { initialViewState } from "@/data/data";
  
  
  export const FormMap = ({  viewState, setViewState, position, setPosition }) => {
    const mapStyle = useSelector(s => s.mapStyle);
    const dispatch = useDispatch();
  
    const onMove = useCallback(evt => {
        setViewState(evt.viewState);
    }, []);
  

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
        <Marker
        key={1}
        longitude={position.longitude}
        latitude={position.latitude}
        anchor="bottom"
        color="yellow"
        draggable={true}
        onDragEnd={(e)=>setPosition({longitude:e.lngLat.lng,latitude:e.lngLat.lat})}
      >
        
      </Marker>

      </Map>
    );
  };
  export default Map;
  