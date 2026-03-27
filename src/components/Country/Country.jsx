import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    // console.log(country.name.common);
    // console.log(country.flags.flags.png)
    const [visited, setVisited] = useState(false);
    const visitedHandle = () => {
        // console.log('Button Clicked');

        // Basic
        // if (visited) {
        //     setVisited(false)
        // }

        // else {
        //     setVisited(true);
        // }

        // Second system
        setVisited(visited ? false : true)

            setVisited(!visited)
            handleVisitedCountries(country); 
    }
    return (
        <div className={`country ${visited ? 'visit' : 'not-visit'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common}</h3>
            <h4>Population : {country.population.population}</h4>
            <h4>Area : {country.area.area} {country.area.area > 300000 ? 'Big Country' : 'Small Country'}</h4>
            <button className={`${visited ? 'visited' : 'not-visited'}`} onClick={visitedHandle}>
                {visited ? "Visited" : "Not Visited"}
            </button>
            <button 
                className='visited' 
                onClick={() => handleVisitedFlag(country?.flags?.flags?.png)}
            >
                Add Visited Flag
            </button>
        </div>
    );
};

export default Country;