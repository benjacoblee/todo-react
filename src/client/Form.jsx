import React, { Component } from "react";

export class Form extends Component {
  handleInputField(event) {
    this.setState({ currentInput: event.target.value });
    this.props.handleInputField(event);
  }
  clickHandler(e) {
    this.props.clickHandler(e);
    this.refs.input.value = "";
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <input
          onChange={e => {
            this.handleInputField(e);
          }}
          ref="input"
        ></input>
        <button
          onClick={e => {
            this.clickHandler(e);
          }}
        >
          Add todo
        </button>
      </div>
    );
  }
}

export default Form;
