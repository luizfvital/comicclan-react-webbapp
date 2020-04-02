import axios from 'axios'

export const api = searchInput => {
  return axios.create({
    baseURL: `https://comicclan.vett.io/comics?q=${searchInput}`,
    headers: {
      Authorization: 'Bearer ComicClanVettIO2019'
    }
  })
}
