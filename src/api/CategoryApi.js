import axios from "axios"
import { apiKey, baseUrl } from "./rootApi"

export const categoryApi = (category) => {
    return axios.get(`${baseUrl}/top-headlines?country=id&category=${category}&apiKey=${apiKey}`)
}