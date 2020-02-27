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
  }

  addTodo() {
    if (
      this.state.currentInput.length > 1 &&
      this.state.currentInput.length < 200
    ) {
      this.state.todos.push({
        title: this.state.currentInput,
        date: moment().format("MMM Do YY")
      });
      this.setState({ todos: this.state.todos });
      this.setState({ lengthValidationMessage: "" });
      this.refs.input.value = "";
      this.setState({ currentInput: "" });
    } else {
      this.setState({
        lengthValidationMessage:
          "Please enter a description that's greater than 1 character and less than 200 characters!"
      });
    }
  }

  deleteTodo(todo, index) {
    this.state.todos.splice(index, 1);
    this.setState({ todos: this.state.todos });
  }

  render() {
    const todoArr = this.state.todos;
    let todoEl;
    if (todoArr.length > 0) {
      todoEl = this.state.todos.map((todo, index) => {
        return (
          <div key={index}>
            <p className="my-3">
              <strong>Title:</strong> {todo.title}{" "} 
              <strong>Created at:</strong> {todo.date}
              <button
                onClick={() => {
                  this.deleteTodo(todo, index);
                }}
              >
                x
              </button>
            </p>
          </div>
        );
      });
    }
    return (
      <div className="container">
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
        <div>{todoEl}</div>
        <p>{this.state.lengthValidationMessage}</p>
      </div>
    );
  }
}

export default hot(module)(App);
