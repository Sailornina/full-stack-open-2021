import React, { useState } from 'react';
import Notification from './Notification';
import personsService from '../services/persons';

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [message, setMessage] = useState(null)

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSumit = (event) => {
    event.preventDefault();

    const existingPerson = persons.find((e) => e.name === newName)

    if (existingPerson) {
      window.alert(`${newName} is already added to phonebook, replace the old number with a new one?`)
      personsService
        .update(existingPerson.id, { ...existingPerson, number: newNumber })
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id === existingPerson.id ? returnedPerson : person))
        })

      setNewName('')
      setNewNumber('')
      setMessage(
        `${existingPerson.name} was successfully updated`
      )
      setTimeout(() => {
        setMessage(null)
      }, 2000)

    } else {

      personsService
        .create({
          name: newName,
          number: newNumber
        })
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
        .catch(error => 
          window.alert(error))

      setNewName('')
      setNewNumber('')
      setMessage(
        `${newName} was successfully added`
      )
      setTimeout(() => {
        setMessage(null)
      }, 2000)
    }
  };

  return (
    <div>
      <Notification message={message} />
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