import React from "react";
import { hot } from "react-hot-loader";
import moment from "moment";

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
    console.log(this.props);
    console.log(this.state.currentInput.length);
    if (
      this.state.currentInput.length > 1 &&
      this.state.currentInput.length < 200
    ) {
      this.state.todos.push(
        this.state.currentInput + " created at: " + moment().format("MMM Do YY")
      );
      this.setState({ todos: this.state.todos });
      this.setState({ lengthValidationMessage: "" });
      this.refs.input.value = "";
    } else {
      this.setState({
        lengthValidationMessage:
          "Please enter a todo that's greater than 1 character and less than 200 characters!"
      });
    }
  }

  deleteTodo(todo, index) {
    this.state.todos.splice(index, 1);
    this.setState({ todos: this.state.todos });
  }

  render() {
    console.log(this);
    const todoArr = this.state.todos;
    let todoEl;
    if (todoArr.length > 0) {
      todoEl = this.state.todos.map((todo, index) => {
        return (
          <div key={index}>
            <li>
              {todo}{" "}
              <button
                onClick={() => {
                  this.deleteTodo(todo, index);
                }}
              >
                x
              </button>
            </li>
          </div>
        );
      });
    }
    return (
      <div>
        <input
          onChange={event => {
            this.handleInputField(event);
          }}
          ref="input"
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
