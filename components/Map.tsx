import mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';
// import "mapbox-gl/dist/mapbox-gl.css";

const style = {
    wrapper: 'flex-1 h-full w-full',
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export const Map = () => {
    useEffect(() => {
        new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [74.358749, 31.520370],
            zoom: 10,
        })        
    }, [])
    

    return (
        <div className={style.wrapper} id='map' />
    )
}