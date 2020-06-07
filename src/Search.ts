import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import  axios  from 'axios'
import { Select, MenuItem, Input } from '@material-ui/core';
import  MapContainer  from './Map'

const Search = ():JSX.Element => {
    const [radius, setRadius] = useState('10000')
    const [searchParams, setSearchParams] = useState('')
    const [hospitals, setHospitals] = useState([{
        geometry: {
            lat: 6.5244,
            lng: 3.3792
        },
        name: 'Ikeja General hospital'
    }])
    let hospitalArray = []
    useEffect(() => {
        setHospitals([])
        const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=hospitals+in+${searchParams}&key=AIzaSyBjuNlidxM3Hf3eMRI24CTCyOf8_EK82IM&radius=${radius}`
        console.log(url)
        axios(url)
            .then(({ data: { results } }) => {
                results.forEach(result => {
                    const geometry = result.geometry.location
                    const name = result.name
                    hospitalArray.push({ geometry, name });
                });
                console.log(hospitals);
                setHospitals(hospitalArray)
            })
            .catch(err => console.error(err))
    }, [searchParams, setSearchParams, radius, setRadius])

    return (
        <div>
            <h1>Hospital Finder</h1>
            <Input placeholder="search" onChange={e => {
                setSearchParams(e.target.value)
            }} />
            <Select labelId="radius" id="select" value="10000" onChange={e => {
                if(e.target.value !== 'Select radius'){
                    setRadius(+e.target.value)   
                }   
            }}>
                <MenuItem value="select radius">Select radius</MenuItem>
                <MenuItem value="10000">10km</MenuItem>
                <MenuItem value="20000">20km</MenuItem>
                <MenuItem value="30000">30km</MenuItem>
                <MenuItem value="40000">40km</MenuItem>
                <MenuItem value="50000">50km</MenuItem>
            </Select>
            <MapContainer hospitals={hospitals} />

        </div>
    )
}
export default Search


