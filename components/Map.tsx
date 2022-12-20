import mapboxgl from 'mapbox-gl';
import { useEffect, useContext } from 'react';
import { UberContext } from '../context/uberContext';

const style = {
    wrapper: 'flex-1 h-full w-full',
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export const Map = () => {
    const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext);
    
    
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [74.358749, 31.520370],
            zoom: 10,
        })
        
        if (pickupCoordinates) {
            addToMap(map, pickupCoordinates);
        }
    
        if (dropoffCoordinates) {
            addToMap(map, dropoffCoordinates);
        }
    
        if (pickupCoordinates && dropoffCoordinates) {
            map.fitBounds([pickupCoordinates, dropoffCoordinates], { padding: 60 })
        }
        
    }, [])

    const addToMap = (map: mapboxgl.Map, coordinates: number[]) => {
        const marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
    }

    return (
        <div className={style.wrapper} id='map' />
    )
}