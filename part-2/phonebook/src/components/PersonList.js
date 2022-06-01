import React from "react";
import Person from "./Person";
import personsService from '../services/persons';


const PersonList = ({ persons, setPersons }) => {

    const deletePerson = (person) => {
        const result = window.confirm(`Delete ${person.name}`)
        if (result) {
          personsService
            .remove(person.id)
            .then(response => {
             setPersons(persons.filter(i => i !== person))
            })
        };
      };

    const newPersonAddedToTheList = persons.map((person) => (
        <Person person={person} deletePerson={deletePerson}/>
    ))
    return <div>{newPersonAddedToTheList}</div>;
};

  
export default PersonList;