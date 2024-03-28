import axios from "axios"

const API_URL = 'https://dev.to/api'

// @ts-ignore
export async function FetchData(url) {
  try {
    const response = await axios.get(`${API_URL}/${url}`)
    return response
  } catch (error) {
    console.log(error)
  }
}