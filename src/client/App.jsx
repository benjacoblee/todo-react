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
    console.log(this.state.todos)
  }

  render() {
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
      </div>
    );
  }
}

export default hot(module)(App);
