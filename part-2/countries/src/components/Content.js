import React from "react";
import Country from "./Country";

const Content = ({ countries }) => {
    // const tooManyCountries = countries.length > 10;

    const countryList = countries.map((country) => {
        return (
            <div>
            {/* Too many matches, specify another filter */}
            <Country country={country} />
            </div>
        )
    });

};

export default Content;