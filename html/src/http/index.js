import axios from 'axios'

export const API_URL = 'http://localhost:3001/api'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

// $api.interceptors.response.use((config) => {
//     return config;
// },async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status == 401 && error.config && !error.config._isRetry) {
//         originalRequest._isRetry = true;
//         console.log('НЕ АВТОРИЗОВАН')
//     }
//
// })

export default  $api;