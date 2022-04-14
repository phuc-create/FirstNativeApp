import { Url } from "./UrlServer"
import axios from "axios"
export const getRank = () => axios.get(`${Url}/rank/`)
export const getRankByLevel = (level) =>
  axios.get(`${Url}/rank/level/${level}`)
export const setRank = (user, guess, level) =>
  axios.post(`${Url}/rank/set-rank`, { user, guess, level })
