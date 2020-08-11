import axios from 'axios'

export const api = (searchTerm) => {
  return axios.create({
    baseURL: `http://localhost:3002/comicbooks?q=${searchTerm}`,
  })
}
