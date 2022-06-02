import React, { useState } from 'react';
import personsService from '../services/persons';

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSumit = (event) => {
    event.preventDefault();
    
    const personToAdd = persons
    const updatedPerson = { ...personToAdd, number: newNumber }

    if (persons.some(e => e.name === newName)) {
      window.alert(`${newName} is already added to phonebook, replace the old number with a new one?`)
      personsService
        .update(persons.id, updatedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => persons.id !== personToAdd.id ? person : returnedPerson))
          setNewName('')
          setNewNumber('')
        })

    }

    const personObjectNew = {
      name: newName,
      number: newNumber
    }

    personsService
      .create(personObjectNew)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
      .catch(error => window.alert(error))

    setNewName('')
    setNewNumber('')
  };

  return (
    <div>
      <form onSubmit={handleSumit}>
        <div> Name: <input value={newName} onChange={handleNameChange} /></div>
        <div>Number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <input type="submit" value="Add" />
      </form>
      <h2>Numbers</h2>
    </div>
  )
};

export default PersonForm;