import axios from 'axios'

// export const API_URL = 'http://45.91.8.121:3001/api'
export const API_URL = 'http://localhost:3001/api'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

export default  $api;