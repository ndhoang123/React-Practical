import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./Todolist.scss";

Todolist.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

Todolist.defaultProps = {
    todos: [],
    onTodoClick: null, 
}

function Todolist(props) {
    const {todos, onTodoClick} = props;

    function handleClick(todo){
        if(onTodoClick)
        { 
            onTodoClick(todo)
        }
    }

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id} 
                onClick={() => handleClick(todo)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default Todolist;