import React from "react";

const Country = ({ country }) => {
    let languages = country.languages ? Object.entries(country.languages) : []
    const languagesList = languages.map(([isoCode, language]) => {
        return <li key={isoCode}>{language}</li>;
    });

    return (
        <>
        <h1>{country.name.common} </h1>
        <p>Capital: {country.capital} </p>
        <h3>Languages</h3>
        <ul>{languagesList}</ul>
        <p>Population: {country.population}</p>
        <div>
        <img src={country.flag} alt="Country flag"></img>
        </div>
        </>
    );
};

export default Country;