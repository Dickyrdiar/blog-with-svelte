import axios from "axios";
import { writable } from "svelte/store";
export const API_URL = process.env.API_URL

export const dataStore = writable([])

async function fetchDataArticle() {
  const response = await axios.get(`/articles`)
  const data = await response.data
  dataStore.set(data)
}

fetchDataArticle()