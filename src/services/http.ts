import AdapterAxios from "../infra/adapter/adapter-axios"
import HttpClient from "../infra/http/http-client"


export const http = () => {
  const adapter = new AdapterAxios()
  const http = new HttpClient(adapter)

  return http
}