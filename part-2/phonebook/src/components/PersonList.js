import React from "react";


const PersonList = ({ persons }) => {
    const newPersonAddedToTheList = persons.map((person) => (
        <p key={person.id.toString()}>{person.name}{''}</p>

    ))
    return <div>{newPersonAddedToTheList}</div>;
};

  

export default PersonList;