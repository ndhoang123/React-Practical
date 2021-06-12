import logo from './logo.svg';
import './App.css';
import ColorBox from "./components/ColorBox";
import Todolist from "./components/Todolist";
import React, { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState(
    [{ id: 1, title: 'I love Easy Frontend! ' },
    { id: 2, title: 'We love Easy Frontend! ' },
    { id: 3, title: 'They love Easy Frontend! ' }]
  )
  
  function handleTodolist(todo){
    const newArray = [...todoList];
    setTodoList(newArray.filter(item => item.id !== todo.id))
  }

  return (
    <div className="App">
      <h1>React hooks - TodoList!</h1>

      <Todolist todos={todoList} onTodoClick={handleTodolist}/>
    </div>
  );
}

export default App;
