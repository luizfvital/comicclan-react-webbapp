import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://comicclan.vett.io/comics',
  headers: {
    Authorization: 'Bearer ComicClanVettIO2019'
  }
})
