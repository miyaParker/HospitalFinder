import React, { useState } from 'react'
import {Animals} from './Animals'
const SearchParams = () => {
    const [location, setLocation] = useState('Lagos')
    const [animal, setAnimal] = useState('dog')
    return (
        <div className='search-params'>
            <label htmlFor="location">
                <input type="text" placeholder="search" id="location" value={location} onChange={e => setLocation(e.target.value)}></input>
            </label>
            <label htmlFor="animal">
                <select id="animal" value={animal} onChange={e => setAnimal(e.target.value)}>
                    <option>All</option>
    {Animals.map((animal,index) => <option value={animal} key={index}>{animal} </option>)}
                </select>
            </label>
            <button>submit</button>
        </div>
    )
}
export default SearchParams