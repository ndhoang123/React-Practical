import logo from './logo.svg';
import './App.css';
import ColorBox from "./components/ColorBox";
import Todolist from "./components/Todolist";
import TodoForm from "./components/TodoForm";
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

  function handleAddNewItem(todo){
    const newTodo = {
      id: Todolist.length + 1,
      ...todo
    };

    const newArrayTodo = [...todoList];
    newArrayTodo.push(newTodo);
    setTodoList(newArrayTodo);
  }

  return (
    <div className="App">
      <h1>React hooks - TodoList!</h1>

      <Todolist todos={todoList} onTodoClick={handleTodolist}/>
      <TodoForm submit={handleAddNewItem}/>
    </div>
  );
}

export default App;
