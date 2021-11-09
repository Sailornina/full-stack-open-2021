import React from "react";


const PersonList = ({ persons }) => {
    const newPersonAddedToTheList = persons.map((person) => (
        <p key={person.id.toString()}>{person.name}{person.number}{''}</p>

    ))
    return <div>{newPersonAddedToTheList}</div>;
};

  

export default PersonList;