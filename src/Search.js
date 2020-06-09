import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Select, MenuItem, Input, Button } from '@material-ui/core';
import MapContainer from './Map'
import './App.css'

const Search = () => {
    const [radius, setRadius] = useState('10000')
    const [location, setLocation] = useState('Lagos')
    const [hospitals, setHospitals] = useState([{
        location: {
            lat: 6.5244,
            lng: 3.3792
        },
        name: 'Ikeja General hospital'
    }])
    const [facility, setFacility] = useState('hospitals')
    const [searchHistory] = useState([])
    useEffect(() => {
        let query = `${facility}+in+${location}`
        const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=AIzaSyBjuNlidxM3Hf3eMRI24CTCyOf8_EK82IM&radius=${radius}`
        axios({
            url,
            method: "get",
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        })
            .then(({ data: { results } }) => {
                const hospitalArray = results.map(({ name, geometry }) => {
                    let hospitalObj = {}
                    hospitalObj['name'] = name
                    hospitalObj['location'] = geometry.location
                    return hospitalObj
                })
                setHospitals(hospitalArray)

            })
            .catch(console.error)
    }, [radius, setHospitals, location, facility])

    const clickTag = (e) => {
        const tags = document.querySelectorAll(".active")
        if (!e.target.classList.contains('active')) {
            console.log(e.target)
            setFacility(e.target.innerText)
            tags.forEach(tag => {
                tag.classList.remove('active')
            })
            e.target.classList.add('active');
        }
        else {
            e.target.classList.remove('active')
        }
    }

    return (
        <div>
            <div className="search">
                <h1>Finder</h1>
                <div> <Button color="primary" onClick={clickTag} value="hsp">Hospitals</Button>
                    <Button color="primary" onClick={clickTag}>Pharmacies</Button>
                    <Button className="tag" color="primary" onClick={clickTag}>Clinics</Button></div>
                <Input placeholder="search" onChange={e => {
                    setLocation(e.target.value)
                }} />
                <Select labelId="radius" id="select" value="10000" onChange={e => {
                    if (e.target.value !== 'Select radius') {
                        setRadius(+e.target.value)
                        searchHistory.push(e.target.value)
                        console.log(searchHistory)
                    }
                }}>
                    <MenuItem value="select radius">Select radius</MenuItem>
                    <MenuItem value="10000">10km</MenuItem>
                    <MenuItem value="20000">20km</MenuItem>
                    <MenuItem value="30000">30km</MenuItem>
                    <MenuItem value="40000">40km</MenuItem>
                    <MenuItem value="50000">50km</MenuItem>
                </Select>
            </div>

            <MapContainer hospitals={hospitals} />
        </div >
    )
}
export default Search


