import { URL_BASE } from "../../constants/URL"
import HttpAdapter from "./http-adapter"

export default class AdapterFetch implements HttpAdapter {
  constructor() {
  }

  async get(id:string){
    const response = await fetch(`${URL_BASE}/${id}`)
    const data = await response.json()
    return data
  }
}