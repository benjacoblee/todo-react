import React from "react";
import { hot } from "react-hot-loader";
import moment from "moment";
import Form from "./Form";
import ItemList from "./ItemList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentInput: "",
      todos: [],
      lengthValidationMessage: ""
    };
  }

  addTodo() {
    console.log(this)
    if (
      this.state.currentInput.length > 1 &&
      this.state.currentInput.length < 200
    ) {
      this.state.todos.push({
        title: this.state.currentInput,
        date: moment().format("MMM Do YY")
      });
      this.setState({ todos: this.state.todos });
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
      this.state.todos.splice(index, 1);
      this.setState({ todos: this.state.todos });
    };

    return (
      <div className="container">
        <Form
          handleInputField={handleInputField.bind(this)}
          clickHandler={clickHandler}
        />
        <ItemList todos={this.state.todos} deleteTodo={deleteTodo} />
        <p>{this.state.lengthValidationMessage}</p>
      </div>
    );
  }
}

export default hot(module)(App);
