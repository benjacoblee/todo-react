import React from "react";
import { hot } from "react-hot-loader";
import moment from "moment";
import Form from "./Form";
import ItemList from "./ItemList";
import DeletedItems from "./DeletedItems";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentInput: "",
      todos: [],
      lengthValidationMessage: "",
      deletedTodos: []
    };
  }

  addTodo() {
    if (
      this.state.currentInput.length > 1 &&
      this.state.currentInput.length < 200
    ) {
      // this.state.todos.push();
      this.setState({
        todos: [
          {
            title: this.state.currentInput,
            date: moment().format("MMM Do YY")
          },
          ...this.state.todos
        ]
      });
      // this.setState({ todos: this.state.todos });
      // this.setState({ lengthValidationMessage: "" });
      // this.refs.input.value = "";
      // this.setState({ currentInput: "" });
    } else {
      this.setState({
        lengthValidationMessage:
          "Please enter a description that's greater than 1 character and less than 200 characters!"
      });
    }
  }

  render() {
    const handleInputField = e => {
      this.setState({ currentInput: e.target.value });
    };

    const clickHandler = e => {
      if (e) {
        this.addTodo();
      }
    };

    const deleteTodo = (todo, index) => {
      const deletedTodo = this.state.todos.splice(index, 1);
      this.setState({
        todos: this.state.todos
      });

      this.setState({
        deletedTodos: [deletedTodo, ...this.state.deletedTodos]
      });
    };

    return (
      <div className="container">
        <Form
          handleInputField={handleInputField.bind(this)}
          clickHandler={clickHandler}
        />
        <ItemList todos={this.state.todos} deleteTodo={deleteTodo} />
        <p>{this.state.lengthValidationMessage}</p>
        <DeletedItems deletedTodos={this.state.deletedTodos} />
      </div>
    );
  }
}

export default hot(module)(App);
