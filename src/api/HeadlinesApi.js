import axios from "axios"
import { baseUrl, apiKey } from "./rootApi"

export const headlinesApi = () => {
    return axios.get(`${baseUrl}/top-headlines?country=id&apiKey=${apiKey}`)
}