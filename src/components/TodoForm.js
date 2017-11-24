import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TodoForm.css'

export class TodoForm extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  state = {
    text: ''
  };

  update = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  render(){
    return (
      <div className="todo-form">
        <input
          placeholder="New todo" type="text" value={this.state.text} onChange={this.update} />
        <button
          className="btn-floating btn-large waves-effect waves-light red"
          onClick={() => {
            this.props.addTodo(this.state.text);
            this.setState({text: ''});
          }}
          key="todo-button">
          +
        </button>
      </div>
    )
  }
}
