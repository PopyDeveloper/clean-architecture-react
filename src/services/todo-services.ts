import { http } from "./http"

export const getTodos = async(id: string) => {

  const res = await  http().get(id)

  return res
}