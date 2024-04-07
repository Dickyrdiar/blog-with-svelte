// import axios from "axios";

// const API_URL = 'https://dev.to/api'

// export async function load({ fetch, params }) {
//   const currentPage = params.page || 1;
//   const perPage = 10

//   try {
//     const response = await axios.get(`${API_URL}/${url}`)
//     if (!response.ok) {
//       throw new Error(404, 'Data not found')
//     }

//     const data = await response.json()
//     const hasMore = data.length === perPage
//   } catch (err) {
//     throw error(err.status, err.message)
//   }
// }