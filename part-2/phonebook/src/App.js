import React, { useState, useEffect } from 'react';
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import Filter from './components/Filter';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newFilter, setNewFilter] = useState('');

  const filteredNames = persons.filter(person =>
    person.name.toUpperCase().includes(newFilter.toLowerCase())
  );

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <h3>Add a new person</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <PersonList persons={filteredNames} />
    </div>
  );
};

export default App;