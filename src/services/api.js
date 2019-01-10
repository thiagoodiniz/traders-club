
import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://private-anon-9ad868f24d-tradersclubapi.apiary-mock.com/api/',
    timeout: 1000,
})

export default instance

