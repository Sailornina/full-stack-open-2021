import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    return axios.get(baseUrl)
}

const create = personObjectNew => {
    return axios.post(baseUrl, personObjectNew)
}

const update = (id, personObjectNew) => {
    return axios.put(`${baseUrl}/${id}`, personObjectNew)
}

export { getAll, create, update };
