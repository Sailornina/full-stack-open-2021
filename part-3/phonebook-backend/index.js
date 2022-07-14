const express = require('express')
const app = express()

app.use(express.json())

let persons = [
        { 
          "id": 1,
          "name": "Arto Hellas", 
          "number": "040-123456"
        },
        { 
          "id": 2,
          "name": "Ada Lovelace", 
          "number": "39-44-5323523"
        },
        { 
          "id": 3,
          "name": "Dan Abramov", 
          "number": "12-43-234345"
        },
        { 
          "id": 4,
          "name": "Mary Poppendieck", 
          "number": "39-23-6423122"
        }
]


app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  response.send (`<p>Phonebook has info for ${persons.length}</p><p>${new Date()}</p>`)
})

app.get('/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  response.json(person)
})

app.delete('/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const randomInt = () => {
  min = Math.ceil(1);
  max = Math.floor(99_999_999);
  return Math.floor(Math.random() * (max - min) + 1);
}

app.post('/api/persons', (request, response) => {
  const body  = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'The name or number is missing' 
    })
  }

  const persons = {
    name: body.name,
    number: body.number,
    id: randomInt(),
  }

  console.log(persons)
  response.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})