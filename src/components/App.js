import React, { Component } from 'react';
import uuid from 'uuid/v4';
import {TodoList} from "./TodoList";
import {TodoForm} from "./TodoForm";
import {Filters} from "./Filters";
import {Header} from "./Header";
import './App.css'

const getTodo = text => ({
  id: uuid(),
  text,
  completed: false
});

export class App extends Component {
  state = {
    todos: [
      getTodo('Apprendre redux'),
      getTodo('Apprendre react-redux'),
      getTodo('Apprendre à utiliser les composants'),
    ],
    filter: 'all',
  };

  addTodo = (text) => {
    this.setState({
      todos: [...this.state.todos, getTodo(text)],
    })
  };

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => ({
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed,
      }))
    })
  };

  setFilter = (filter) => {
    this.setState({
      filter
    });
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(t => t.id !== id);
    this.setState({todos}, () => console.log(this.state));
  };

  render() {
    const {todos, filter} = this.state;
    const {toggleTodo, deleteTodo, setFilter} = this;
    return (
      <div className="App">
        <Header>
          <h1>Redux Todo List</h1>
        </Header>
        <div className="container">
          <TodoList filter={filter} todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          <TodoForm addTodo={this.addTodo}/>
          <Filters setFilter={setFilter}/>
        </div>
      </div>
    );
  }
}
