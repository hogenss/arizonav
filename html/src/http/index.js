import axios from 'axios'

export const API_URL = 'https://api.milton-battlepass.ru/api'
// export const API_URL = 'http://localhost:3001/api'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            window.location.href = `${API_URL}/discord`
            return $api.request(originalRequest);
        } catch (e) {
            console.log('unauthorized')
        }
    }
    throw error;
})

export default  $api;