import AdapterAxios from "../infra/adapter/adapter-axios"
import HttpClient from "../infra/http/http-client"


export const getTodos = async(id: string) => {
  const adapter = new AdapterAxios()
  const httpClient = new HttpClient(adapter)

  const res = await  httpClient.get(id)

  return res
}