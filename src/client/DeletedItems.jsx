import React, { Component } from "react";
import moment from "moment";

export class DeletedItems extends Component {
  render() {
    let display = "";
    let deletedTodos = this.props.deletedTodos;

    if (deletedTodos.length > 0) {
      let todoEl = deletedTodos.map((todo, index) => {
        todo = todo[0];
        return (
          <div key={index}>
            <p>
              <strong>Title</strong>: {todo.title} <strong>Deleted at:</strong>{" "}
              {moment().format("MMM Do YY")}
            </p>
          </div>
        );
      });

      display = (
        <div>
          <h2>Deleted Todos</h2>
          {todoEl}
        </div>
      );
    }
    return <div>{display}</div>;
  }
}

export default DeletedItems;
