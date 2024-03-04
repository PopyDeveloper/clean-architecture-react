import { useEffect, useState } from 'react'
import './App.css'
import { getTodos } from './services/todo-services'
import Todo from './entites/Todo'

function App() {

  const [todo, setTodo] = useState()

  console.info('alo')

  useEffect(() => {
    const getData = async () => {
      const data = await getTodos('1')
      setTodo(data)
    }

    getData()
  }, [])


  return (
    <>
      <h1>test</h1>
      {
        todo && 
        <p>{JSON.stringify(todo)}</p>
      }
    </>
  )
}

export default App
