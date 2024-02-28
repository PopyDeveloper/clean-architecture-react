import HttpAdapter from "./http-adapter"

export default class AdapterTest implements HttpAdapter {
  constructor() {
  }

  async get(id:string){
    return new Promise<any>((resolve) => {
      resolve({ data: { id: id } })
    })
  }
}