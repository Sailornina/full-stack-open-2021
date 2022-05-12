import React from "react";
import Country from "./Country";

const Content = ({ countries}) => {
    if (countries.length > 10) {
        return (
            <p>
                Too many matches, specify another filter.
            </p>
        )

    } else if (countries.map((country) => {
        return (
            <div>
            <Country country={country} />
            </div>
        )
    }));

};

export default Content;