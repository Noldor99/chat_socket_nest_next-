import axios from "axios"

export const sokerUrl = 'https://chat-back-yvv3.onrender.com'

export const api = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL,
  baseURL: 'https://chat-back-yvv3.onrender.com/api/',

  withCredentials: true,
})

//  http://localhost:7777/api/

//  'https://chat-back-yvv3.onrender.com/api'