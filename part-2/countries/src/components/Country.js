import React, { useEffect, useState } from "react";
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY

const Country = ({ country }) => {
    const [weather, setWeather] = useState({})

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=${api_key}`)
            .then((response) => {
                const { data } = response
                const [weather] = data.weather
                setWeather(weather)
            })
            .catch((reason) => console.log("Request failed: " + reason))
    }, [])

    let languages = country.languages ? Object.entries(country.languages) : []
    const languagesList = languages.map(([isoCode, language]) => {
        return <li key={isoCode}>{language}</li>;
    });

    return (
        <>
            <h1>{country.name.common} </h1>
            <p>Capital: {country.capital} </p>
            <div>
                <h3>Languages</h3><ul>{languagesList}</ul>
            </div>
            <p>Population: {country.population}</p>
            <div>
                <img src={country.flags.png} alt="Country flag" />
            </div>
            <p>Weather: {weather.description}</p>
        </>
    );
};

export default Country;