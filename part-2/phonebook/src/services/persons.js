import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = async () => {
    const request = axios.get(baseUrl)
    const response = await request;
    return response.data;
}

const create = async personObjectNew => {
    const request = axios.post(baseUrl, personObjectNew)
    const response = await request;
    return response.data;
}

const update = async (id, personObjectNew) => {
    const request = axios.put(`${baseUrl}/${id}`, personObjectNew)
    const response = await request;
    return response.data;
}

const remove = async (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    const response = await request;
    return response.data;
}

export default { getAll, create, update, remove };
