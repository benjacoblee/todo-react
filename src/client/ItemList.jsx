import React, { Component } from "react";

export class ItemList extends Component {
  render() {
    const todoArr = this.props.todos;
    let todoEl;
    if (todoArr.length > 0) {
      todoEl = todoArr.map((todo, index) => {
        return (
          <div key={index}>
            <p className="my-3">
              <strong>Title:</strong> {todo.title} <strong>Created at:</strong>{" "}
              {todo.date}
              <button
                onClick={() => {
                  this.props.deleteTodo(todo, index);
                }}
              >
                x
              </button>
            </p>
          </div>
        );
      });
    }
    return <div>{todoEl}</div>;
  }
}

export default ItemList;
