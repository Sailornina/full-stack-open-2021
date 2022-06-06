import React from "react";

const Person = ({ person, deletePerson }) =>
    <li className='phonebook'>
        {person.name} {person.number} 
        <button onClick={() => deletePerson(person)}>delete</button>
    </li>

export default Person;
