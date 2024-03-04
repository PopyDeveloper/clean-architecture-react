import Todo from "../../entites/Todo"
import HttpAdapter from "./http-adapter"

export default class AdapterTest implements HttpAdapter {
  constructor() {
  }

  async get(id:number){
    return new Promise<Todo>((resolve) => {
      resolve({ completed: false,
        id,
        title: 'tes',     userId: 2390329  })
    })
  }
}