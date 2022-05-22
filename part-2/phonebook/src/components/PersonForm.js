import React, { useState } from 'react';
import axios from 'axios';

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

    if (persons.some(e => e.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
      return;
    }

    const personObjectNew = {
      name: newName,
      number: newNumber
    }
    
    axios
      .post('http://localhost:3001/persons', personObjectNew)
      .then(response => {
        setPersons(persons.concat(response.data))
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