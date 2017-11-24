import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TodoType} from "../constants/propTypes";
import {TodoItem} from "./TodoItem";
import './TodoList.css'

const getTodos = ({filter, todos}) => {
  if(!filter || filter === 'all'){
    return todos;
  }

  if(filter === 'completed'){
    return todos.filter(todo => todo.completed);
  }

  if(filter === 'ongoing'){
    return todos.filter(todo => !todo.completed);
  }
};

export class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(TodoType).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  };
  render(){
    const {todos, filter, toggleTodo, deleteTodo} = this.props;
    return (
      <ul>
        {getTodos({todos, filter})
          .map(todo => <TodoItem deleteTodo={deleteTodo} key={todo.id} toggle={toggleTodo} {...todo}/>)}
      </ul>
    )
  }
}
