import { useEffect } from 'react'
import './App.css'
import HttpClient from './infra/http/http-client'
import AdapterAxios from './infra/adapter/adapter-axios'

function App() {
  const adapter = new AdapterAxios()
  const httpClient = new HttpClient(adapter)

  useEffect(() => {
    const getData = async () => {
      const data = await httpClient.get('1')
      console.log(data)
    }

    getData()
  }, [])


  return (
    <>
      <h1>test</h1>
    </>
  )
}

export default App
