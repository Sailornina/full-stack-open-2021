import React from "react";
import Country from "./Country";

const Content = ({ countries }) => {
    // const tooManyCountries = countries.length > 10;
    // const multipleCountries = countries.length > 1 && countries.length <= 10;
    const singleCountry = countries.length === 1;

    const countryList = countries.map((country) => {
        return (
            <div>
            {/* {tooManyCountries && "Too many matches, specify another filter"} */}
            <Country country={country} />
            </div>
        )
    });

};

export default Content;