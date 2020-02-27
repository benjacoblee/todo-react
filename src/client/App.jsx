import React from "react";
import { hot } from "react-hot-loader";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentInput: "",
      todos: [],
      lengthValidationMessage: ""
    };
  }

  handleInputField(event) {
    this.setState({ currentInput: event.target.value });
    console.log(this.state.currentInput);
  }

  addTodo() {
    console.log(this.state.currentInput.length);
    if (
      this.state.currentInput.length > 1 &&
      this.state.currentInput.length < 200
    ) {
      this.state.todos.push(this.state.currentInput);
      this.setState({ todos: this.state.todos });
      this.setState({ lengthValidationMessage: "" });
    } else {
      this.setState({
        lengthValidationMessage:
          "Please enter a todo that's greater than 1 character and less than 200 characters!"
      });
    }
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
        <p>{this.state.lengthValidationMessage}</p>
      </div>
    );
  }
}

export default hot(module)(App);
