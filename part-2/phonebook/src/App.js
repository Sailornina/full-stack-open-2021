import React, { useState, useEffect } from 'react';
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import Filter from './components/Filter';
import personsService from './services/persons';
import './index.css'


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newFilter, setNewFilter] = useState('');

  // Filter
  const filteredNames = persons.filter(person =>
    person.name.toUpperCase().includes(newFilter.toLowerCase())
  );

  useEffect(() => {
    console.log('effect')
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])


  return (
    <div>
      <h1>Phonebook</h1>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <h2>Add a new person</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <PersonList persons={filteredNames} setPersons={setPersons} />
    </div>
  );
};

export default App;