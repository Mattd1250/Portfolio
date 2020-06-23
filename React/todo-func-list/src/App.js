import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid"; // unique Id generator, See bottom for instructions

const LOCAL_STORAGE_KEY = "todoApp.todos"; // Key can be named anything

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef(); //similar this.e.target.value

  // Get Todos from local storage on reloads, will return a string but needs to be parsed.
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  // Save Todos to local storage on reloads, Must pass a string
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo() {
    const name = todoNameRef.current.value; // Set name to current value of input with useRef
    if (name === "") return; // If input is blank then nothing happens
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]; // uuidv4() used to create random Id
    });
    todoNameRef.current.value = null; // Erase input field after clicking Add Todo Button
  }

  function handleClearTodos() {
    const newTodos = [...todos];
    const todoList = newTodos.filter((todo) => !todo.complete);
    setTodos(todoList);
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />{" "}
      {/* Must pass the toggleTodo to the todo function */}
      <input ref={todoNameRef} type="text" /> {/* ref is from useRef */}
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Todo</button>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;

/* to create unique Ids download from node 
npm i uuid
*/
