import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ColorBox from "./components/ColorBox";
import Todolist from "./components/Todolist";
import TodoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [todoList, setTodoList] = useState(
    [{ id: 1, title: 'I love Easy Frontend! ' },
    { id: 2, title: 'We love Easy Frontend! ' },
    { id: 3, title: 'They love Easy Frontend! ' }]
  )

  const [postList, setPostList] = useState([]);
  
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

  useEffect(() => {
    async function FetchPostList(){
      const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=1&_page=1';
      try{
        await axios.get(requestUrl)
        .then(res => {
          setPostList({data: res.data})
        });
      }
      catch(error){
        console.log('Error when fetching API data:', error.message);
      }
    }

    FetchPostList();
  }, []) 

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={todoList}/>
    </div>
  );
}

export default App;
