import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ColorBox from "./components/ColorBox";
import Todolist from "./components/Todolist";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [todoList, setTodoList] = useState([]);

  const [postList, setPostList] = useState([]);

  const [showAddTask, setShowAddtask] = useState(false);
  
  function handleTodolist(todo){
    setTodoList(todoList.filter(item => item.id !== todo))
  }

  function handleShowTask(){
    console.log("Show button");
    setShowAddtask(!showAddTask);
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

  useEffect(() => {
    const getData = async () => {
      const newData = await fetchTaskList();
      setTodoList(newData);
    }

    getData();
  }, []) 

  // Fetch data
  const fetchTaskList = async () =>{
    const res = await axios.get("http://localhost:5000/tasks");
    return res.data;
  }

  return (
    <div className="container">
      <Header onShowTaskClick={handleShowTask} AddTask={showAddTask}/>
      {showAddTask && <TodoForm/>}
      {todoList.length > 0 ? 
      <Tasks tasks={todoList} handleDelete={handleTodolist}/> : 'No tasks to show'}
    </div>
  );
}

export default App;
