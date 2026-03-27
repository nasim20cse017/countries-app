import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({CountriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log('Visited Button Clicked', country);
        const newVisitedCountries = [...visitedCountries, country]
            setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = (flag) => {
        // console.log('Visited Flags is needed', flag);
        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag);
         
    }

    const countriesData = use(CountriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1>In the Countries : {countries.length}</h1>
            <h3>Total Visited Countries : {visitedCountries.length}</h3>
            <h3>Total Visited Flags : {visitedFlag.length}</h3>
            <ol>
                {
                visitedCountries.map(country => <li>{country.name.common}</li>)
            }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlag.map((flag, index) => <img key = {index} src={flag}></img>)
                }
            </div>

            <div className='countries'>
            {
                countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;