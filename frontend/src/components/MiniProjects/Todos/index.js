import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useNavigate } from 'react-router-dom';

import TodoItem from './TodoItem';
import Loader from '../../../elements/Loader';

import './index.css';

function TodosApp() {
  const navigate = useNavigate();

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );
  const [disableButton, setDisableButton] = useState(true);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  } , [todos]);

  useEffect(() => {
    setDisableButton(!todo.trim().length);
  }, [todo]);

  const goBack = () => navigate(-1);

  const handleOnChange = event => {
    setTodo(event.target.value.slice(0, 61));
  }

  const handleSaveTodo = () => {
    const newTodo = {
      id: uuidv4(),
      title: todo,
      done: false,
      createDate: new Date(),
      lastUpdate: new Date(),
    }
    
    let newTodos = [...todos];
    newTodos.push(newTodo);

    setLoading(true);
    setTodo('');
    setTimeout(() => {
      setTodos(newTodos);
      setLoading(false);
    }, 1000);
  }

  const deleteTodo = id => {
    setTodos(todos.filter(item => item.id !== id));
  }

  const handleEnterPress = event => {
    if (event.keyCode === 13 && todo.trim() !== '') {
      handleSaveTodo();
    }
  }

  const toggleTodo = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id) todo.done = !todo.done;
      return todo
    }));
  }

  return (
    <React.Fragment>
      <p>Todos App</p>
      <button onClick={goBack} className="go_back__btn">Go Back</button>

      {loading && <Loader />}

      <div className="input__block">
        <input
          value={todo}
          type="text"
          className="todo__input"
          placeholder='input something task' 
          onChange={handleOnChange}
          onKeyDown={handleEnterPress}
        />
        <button
          className="add__btn"
          onClick={handleSaveTodo}
          disabled={disableButton || loading}
        >
          Add
        </button>
      </div>

      <div className="todos_list">
        {!todos.length && <p>Нет ни одной задачи</p>}

        {todos.map(todo => <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />)}
      </div>
    </React.Fragment>
  )
}

export default TodosApp;
