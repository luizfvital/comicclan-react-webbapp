import axios from 'axios'

export const api = (searchTerm) => {
  return axios.create({
    baseURL: `http://localhost:3001/comicbooks?q=${searchTerm}`,
  })
}
