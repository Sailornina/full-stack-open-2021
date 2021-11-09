import React from "react";

const Filter = ({newFilter, setNewFilter}) => {
    const handleFilter = (event) => {
        setNewFilter(event.target.value);
    }
 return (
    <p>
        Filter shown with<input onChange={handleFilter} value={newFilter}/>
    </p>
 )
};

export default Filter;