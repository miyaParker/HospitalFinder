import React from 'react'
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';

export const MapContainer = ({ hospitals }) => {
    const markers =
    hospitals.map((hospital, index) => {
        return (<Marker key={index} id={index} position={{
            lat: hospital.location.lat,
            lng: hospital.location.lng
        }} title={hospital.name} name={hospital.name} onClick={console.log(hospital.name)}
        />)
    })
    console.log(markers)
    const mapStyles = {
        width: '100%',
        height: '100%',
        display: 'relative',
        top: '1rem',
    };
    return (
        <div>
            <Map
                google={window.google}
                zoom={11}
                style={mapStyles}
                initialCenter={{
                    lat: 6.5244,
                    lng: 3.3792
                }}
            >
               {markers}
            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: `AIzaSyDxeQW0YiShwDz1ireJ8e3hwM5EZ0M6CTE`
})(MapContainer);

