import { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [id, setId] = useState(0)
  const incrementCounter = () => {
    setId((previousValue) => previousValue + 1)
  }

  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState([])
  const addTodo = () => {
    console.log(title)
    const newTodo = {
      todoId: id,
      title: title,
      description: 'Ha en bra dag!'
    }
    setTodos([...todos, newTodo])
    incrementCounter()
  }
  const deleteTodo = (deleteId) => {
    const filteredTodos = todos.filter((todo) => todo.todoId !== deleteId)
    setTodos(filteredTodos)
  }

  const [apiResponse, setApiResponse] = useState()
  useEffect(() => {
    setTimeout(() => {
      fetch('/say-something')
      .then((response) => {
        return response.text()
      })
      .then((text) => {
        console.log(text)
        setApiResponse(text)
      })
    }, 2500)
  }, [])

  const [apiList, setApiList] = useState()
  useEffect(() => {
    fetch('/give-me-a-list')
    .then((response) => {
      return response.json()
    })
    .then((list) => {
      console.log(list)
      setApiList(list)
    })
  }, [])

  const [number, setNumber] = useState()
  useEffect(() => {
    setNumber(42)
  }, [])

  return (
    <div>
      <div>{apiResponse}</div>
      <div>{apiList ? apiList.join(',') : ''}</div>
      <div>{number}</div>
      <div style={{display: 'flex'}}>
        <label>Title<input value={title} onChange={(event) => {
          setTitle(event.target.value)
        }} /></label>
        <label>Description<input onChange={() => {
          //Vad kan vi göra för att koppla denna input till description? :)
        }} /></label>
        <button onClick={addTodo}>ADD TODO</button>
      </div>
      {todos.map(({todoId, title, description}) => {
        return <Todo key={todoId} id={todoId} title={title} description={description} onDelete={deleteTodo} />
      })}
    </div>
  );
}

export default App;
