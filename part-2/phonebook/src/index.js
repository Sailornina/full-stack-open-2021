import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import App from './App';

axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const notes = response.data 
    ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
})

const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2)

const notes = [
  {
    "persons":[
      { 
        "name": "Arto Hellas", 
        "number": "040-123456",
        "id": 1
      },
      { 
        "name": "Ada Lovelace", 
        "number": "39-44-5323523",
        "id": 2
      },
      { 
        "name": "Dan Abramov", 
        "number": "12-43-234345",
        "id": 3
      },
      { 
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122",
        "id": 4
      }
    ]
  }
]

const rootElement = document.getElementById('root');
ReactDOM.render(<App notes={notes} />, rootElement);

