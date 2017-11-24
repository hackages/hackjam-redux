import uuid from 'uuid/v4';

const mockTodos = [
  {
    id: uuid(),
    text: 'Apprendre React',
    completed: true,
  },
  {
    id: uuid(),
    text: 'Apprendre Redux',
    completed: false,
  }, {
    id: uuid(),
    text: 'Apprendre React Redux',
    completed: false,
  }];

const initialState = {
  todos: mockTodos,
  filter: 'All'
};

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (text) => ({
  type: ADD_TODO
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO
});

export const todosReducer = (state = initialState, action) => {
  return state;
};
