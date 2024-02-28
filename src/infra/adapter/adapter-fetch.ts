import HttpAdapter from "./http-adapter"

export default class AdapterFetch implements HttpAdapter {
  constructor(readonly url: string) {
  }

  async get(id:string){
    const response = await fetch(`${this.url}/${id}`)
    const data = await response.json()
    return data
  }
}