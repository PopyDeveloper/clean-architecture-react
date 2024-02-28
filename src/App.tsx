import { useEffect } from 'react'
import './App.css'
import AdapterFetch from './infra/adapter/adapter-fetch'
import { URL_BASE } from './constants/URL'
import HttpClient from './infra/http/http-client'

function App() {
  const adapter = new AdapterFetch(URL_BASE)
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
