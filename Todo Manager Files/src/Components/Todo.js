/* JSX for Todo Component Start */

import React from "react";
import "./Todo.css";
import { Button } from "@material-ui/core";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((e1) => e1.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <React.Fragment>
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>
        <br></br>

        <Button
          id="status"
          variant="contained"
          color="default"
          onClick={completeHandler}
          className="complete-btn"
        >
          Status
        </Button>
        <span></span>
        <Button
          id="delete"
          variant="contained"
          color="secondary"
          onClick={deleteHandler}
          className="trash-btn"
        >
          Delete
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Todo;

/* JSX for Todo Component End */
