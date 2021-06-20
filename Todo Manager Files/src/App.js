/* JSX for App Component Start */

import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //useEffect
  useEffect(() => {
    getLocalTodos();
  }, []);

  //useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //function
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  //get from local storage
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  
  
  return (
    <React.Fragment>
      <div className="side">
        <h2>Welcome!!</h2>
        <p>
          Why to use?
          <br />
          Todo manager is basically identifying and monitoring the progress of
          the various tasks that make up a specific task strand, work package
          .... One thing that stays constant in Todo management theory however
          is the focus on clear information and how this can help you achieve
          success.
        </p>
        <h2>How to be Productive</h2>
        <p>
          Focus on most important tasks first. <br />
          Cultivate deep work.
          <br /> Keep a distraction list to stay focused.
          <br /> Use the Eisenhower Matrix to identify long-term priorities.
          <br /> Take breaks.
          <br /> Make fewer decisions
        </p>
      </div>
      <div className="App">
        <header>
          <h1>Todo Manager</h1>
        </header>
        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus}
        ></Form>
        <TodoList
          filteredTodos={filteredTodos}
          setTodos={setTodos}
          todos={todos}
        ></TodoList>
      </div>
    </React.Fragment>
  );
}

export default App;

/* JSX for App Component End */
