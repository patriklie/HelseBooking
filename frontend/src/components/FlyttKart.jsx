import { useMap } from "react-leaflet";
import { useEffect } from "react";

export const FlyttKart = ({ latitude, longitude, zoom }) => {
    const map = useMap();

    useEffect(() => {
        map.flyTo([latitude, longitude], zoom);
    }, [latitude, longitude]);

    return null;
};