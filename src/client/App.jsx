import React from "react";
import { hot } from "react-hot-loader";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentInput: "",
      todos: []
    };
  }

  handleInputField(event) {
    this.setState({ currentInput: event.target.value });
    console.log(this.state.currentInput);
  }

  addTodo() {
    this.state.todos.push(this.state.currentInput);
    this.setState({ todos: this.state.todos });
  }

  render() {
    const todoArr = this.state.todos;
    let todoEl;
    if (todoArr.length > 0) {
      todoEl = this.state.todos.map((todo, index) => {
        return <li key={index}>{todo}</li>;
      });
    }
    return (
      <div>
        <input
          onChange={event => {
            this.handleInputField(event);
          }}
        ></input>
        <button
          onClick={event => {
            this.addTodo(event);
          }}
        >
          Add todo
        </button>
        <ul>{todoEl}</ul>
      </div>
    );
  }
}

export default hot(module)(App);
