import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

const DeleteButton = ({deleteTodo, id}) => (
  <span className="delete" onClick={() => deleteTodo(id)}>x</span>
);

export const TodoItem = ({toggle, deleteTodo, id, text, completed}) => (
  <li>
    <span onClick={() => toggle(id)} className={completed ? 'completed' : ''}>
      {text}
    </span>
    <span className="delete" onClick={() => deleteTodo(id)}>x</span>
  </li>
);

TodoItem.propTypes = {
  toggle: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};
