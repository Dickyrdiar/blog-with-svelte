// @ts-nocheck
import axios from "axios"

const API_URL = 'https://dev.to/api'

// @ts-ignore
export async function FetchData(url) {
  try {
    const response = await axios.get(`${API_URL}/${url}`, {
      params:  {
        // search: 'Javascript'
      }
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

// @ts-ignore
export async function fetchDataPodcast(url) {
  try {
    const response = await axios.get(`${API_URL}/${url}`)
    return response
  } catch (err) {
    console.log(err)
  }
}

export async function fetchVideos(url) {
  try {
    const response = await axios.get(`${API_URL}/${url}`)
    return response
  } catch (error) {
    console.log(error)
  }
}
