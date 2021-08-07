import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_AXIOS_URL,
})

export const createAccount = payload => api.post('/signup')


const apis = {
    createAccount
}

export default apis