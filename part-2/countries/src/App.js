import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Content from './components/Content'

const App = () => {
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')


 useEffect(() => {
  axios
    .get('https://restcountries.com/v3.1/all')
    .then((response) => {
      const { data } = response
      setAllCountries(data)
    })
 }, [])

 const handleFilterChange = (event) => {
   console.log("handleFilterChange called")
   const filter = event.target.value
   setNewFilter(event.target.value)
   if (filter.length <= 1) {
     return;
   }   
  
  const regex = new RegExp(newFilter, 'i' );
  const filteredCountries = allCountries.filter(country => country.name.common.match(regex))
  setCountries(filteredCountries)
 }


 return (
    <div className="countries">
    <Filter value={newFilter} onChange={handleFilterChange} />
    <Content countries={countries} setCountries={setCountries}/>
    {countries.map((country) => <p>{country.name.common}</p>)}
    </div>
  );
}

export default App;
