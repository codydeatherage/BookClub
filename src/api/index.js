import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_AXIOS_URL,
})

export const createAccount = payload => api.post('/signup', payload)
export const login = payload => api.post('/login', payload)
export const searchVolumes = volume => api.get(`/search/volume/${volume}`)

const apis = {
    createAccount,
    login,
    searchVolumes
}

export default apis