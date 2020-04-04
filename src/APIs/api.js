import axios from 'axios'

export const api = searchTerm => {
  return axios.create({
    baseURL: `https://comicclan.vett.io/comics?q=${searchTerm}`,
    headers: {
      Authorization: 'Bearer ComicClanVettIO2019'
    }
  })
}
