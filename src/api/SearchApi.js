import axios from "axios"
import { apiKey, baseUrl } from "./rootApi"

export const searchApi = (keyword) => {
    return axios.get(`${baseUrl}/everything?q=${keyword}&apiKey=${apiKey}`)
}