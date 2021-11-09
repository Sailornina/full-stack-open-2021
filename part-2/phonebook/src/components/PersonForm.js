import React, { useState } from 'react'

const PersonForm = ({ persons, setPersons }) => {
const [ newName, setNewName ] = useState('');

const handleChange = (event) => {
 setNewName(event.target.value);
}

const handleClick = (event) => {
    const personObjectNew = {
        name: newName,
        id: persons.length + 1,
    }
    setPersons(persons.concat(personObjectNew));
    setNewName('')
  };


 return (
    <div>
      <form>
        <div> Name: <input value={newName} onChange={handleChange}/></div>
        <div><button onClick={handleClick} type="button">Add</button></div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
};

export default PersonForm;