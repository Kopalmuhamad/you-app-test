import axios from 'axios'

export const axiosWithConfig = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})

