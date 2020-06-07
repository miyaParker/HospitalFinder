import React from 'react'
import ReactDOM from 'react-dom'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


export const MapContainer = ({ hospitals }) => {
    const markers =
        hospitals.map((hospital, index) => {
            return (<Marker key={index} id={index} position={{
                lat: hospital.geometry.lat,
                lng: hospital.geometry.lng
            }} title={hospital.name} 
            />)
        })
    const mapStyles = {
        width: '100%',
        height: '100%',
        display: 'relative',
        top: '1rem',

    };
    return (
        <Map
            google={window.google}
            zoom={12}
            style={mapStyles}
            initialCenter={{
                lat: 6.5244,
                lng: 3.3792
            }}

        >
            {markers}
        </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: `AIzaSyDxeQW0YiShwDz1ireJ8e3hwM5EZ0M6CTE`
})(MapContainer);

