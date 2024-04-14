// @ts-nocheck
import axios from "axios"

export const API_URL = 'https://dev.to/api'

// @ts-ignore
export async function FetchData(url) {
  try {
    const response = await axios.get(`${API_URL}/${url}`)
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


export async function fetchDataDetail(urlId) {
  try {
    const responseDetail = await axios.get(`${API_URL}/articles/${urlId}`)
    return responseDetail
  } catch (error) {
    console.log("error", error)
  }
}