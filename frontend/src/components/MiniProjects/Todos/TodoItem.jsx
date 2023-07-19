import React from 'react';
import propTypes from 'prop-types';

import Button from '../../../elements/Button/button';
import CheckBox from './CheckBox/CheckBox';


function TodoItem ({ todo, deleteTodo, toggleTodo }) {

  const handleEdit = (todo) => {
    console.log('edit_todo', todo);
  }

  const handleDelete = (id) => {
    deleteTodo(id);
  }

  const handleChecked = () => {
    toggleTodo(todo.id);
  }

  const classes = ['todo__title'];

  if (todo.done) classes.push('todo__done');

  return (
    <div className="todo__item">
      <CheckBox onChange={handleChecked} checked={todo.done} />
      <div className={classes.join(" ")}>{todo.title}</div>
      <div className="todo__actions">
        <Button onClick={() => handleEdit(todo)}>Edit</Button>
        <Button onClick={() => handleDelete(todo.id)}>X</Button>
      </div>
    </div>
  )
}

TodoItem.propTypes = {
  todo: propTypes.object,
  deleteTodo: propTypes.func,
  toggleTodo: propTypes.func,
}

export default TodoItem;
