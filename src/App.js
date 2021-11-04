import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Todo from './components/Todo';

function App() {

  const [todoList, setTodoList] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodo, setFileteredTodo] = useState([])


  useEffect(() =>{
    const getTodoList = async() =>{
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      const result = await response.json()
      const resultTodoList = result.slice(0,20)
      setTodoList(resultTodoList)
    }
    getTodoList()
  }, [])

  const getCompleteTodo = id =>{
    setTodoList(
      todoList.map(todo => todo.id === id ? {...todo, completed: !todo.completed}:todo)
    )
    setFileteredTodo(
      todoList.map(todo => todo.id === id ? {...todo, completed: !todo.completed}:todo)
    )
  }

  useEffect(() =>{
    filterHandler()
  }, [todoList, status])


  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFileteredTodo(todoList.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFileteredTodo(todoList.filter(todo => todo.completed === false))
        break;
      default:
        setFileteredTodo(todoList)
        break;
    } 
  }

  return (
    <div className="App">
      <Header/>
      <Form
      todoList={todoList}
      setTodoList ={setTodoList}
      setStatus={setStatus}/>
      <div>
        {todoList && todoList.length > 0?(
          filteredTodo.map((singleTodo) => (
            <Todo
              key={singleTodo.id}
              title={singleTodo.title}
              status={singleTodo.completed}
              getCompleteTodo={getCompleteTodo}
              id={singleTodo.id} 
            />
          ))
        ):null}
      </div>
    </div>
  );
}

export default App;
