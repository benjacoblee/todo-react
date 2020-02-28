import React, { Component } from "react";

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      word: "",
      something: ""
    };
  }
  handleInputField(event) {
    this.setState({ word: event.target.value });
    this.setState({ currentInput: event.target.value });
    this.props.handleInputField(event);
  }
  clickHandler(e) {
    this.props.clickHandler(e);
    this.refs.input.value = "";
  }
  render() {
    return (
      <div>
        <input
          onChange={e => {
            this.handleInputField(e);
          }}
          ref="input"
          value={this.state.word}
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
