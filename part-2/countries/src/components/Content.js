import React from "react";

const Content = ({ countries, setCountries }) => {
    if(countries.length > 10) {
    return ( 
        <p>Too many matches, specify another filter</p>
    )};
    
};

export default Content;