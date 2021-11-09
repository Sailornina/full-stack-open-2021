import React, { useState } from 'react'

const PersonForm = ({ persons, setPersons }) => {
const [ newName, setNewName ] = useState('');
const [ newNumber, setNewNumber] = useState('');

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
    } else {
    const personObjectNew = {
        name: newName,
        id: persons.length + 1,
        number: newNumber

    }
    setPersons(persons.concat(personObjectNew));
    }
    setNewName('')
    setNewNumber('')
  };


 return (
    <div>
      <form onSubmit={handleSumit}>
        <div> Name: <input value={newName} onChange={handleNameChange}/></div>
        <div>Number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <button>Add</button>
      </form>
      <h2>Numbers</h2>
    </div>
  )
};

export default PersonForm;