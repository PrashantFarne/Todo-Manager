/* JSX for Form Component Start */

import React from "react";
import "./Form.css";
import { Button, TextField } from "@material-ui/core";
import { Input } from "@material-ui/core";

function Form({ setInputText, todos, setTodos, inputText, setStatus }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form>
        <Input
          placeholder="Write task name"
          value={inputText}
          onChange={inputTextHandler}
          type="text"
        />
        <Button variant="contained" color="primary" onClick={submitTodoHandler}>
          Add
        </Button>

        <div>
          <select onChange={statusHandler} className="drop">
            <option value="all">All Tasks</option>
            <option value="completed">Completed Tasks</option>
            <option value="uncompeted">Uncompleted Tasks</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;

/* JSX for Form Component End */
