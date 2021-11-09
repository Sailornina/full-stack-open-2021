import React, { useState } from 'react';
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";

const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas', id:0 }])
  

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <PersonList persons={persons} />
    </div>
  )
};

export default App;