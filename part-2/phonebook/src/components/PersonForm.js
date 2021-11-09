import React, { useState } from 'react'

const PersonForm = ({ persons, setPersons }) => {
const [ newName, setNewName ] = useState('');

const handleChange = (event) => {
 setNewName(event.target.value);
}

const handleSumit = (event) => {
    event.preventDefault();
    if (persons.some(e => e.name === newName)) {
        window.alert(`${newName} is already added to phonebook`)
    } else {
    const personObjectNew = {
        name: newName,
        id: persons.length + 1,
    }
    setPersons(persons.concat(personObjectNew));
    }
    setNewName('')
  };


 return (
    <div>
      <form onSubmit={handleSumit}>
        <div> Name: <input value={newName} onChange={handleChange}/></div>
        <button>Add</button>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
};

export default PersonForm;