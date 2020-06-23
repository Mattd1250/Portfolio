import React from "react";
import Todo from "./Todo";
//Must accept toggleTodo from parent
function TodoList({ todos, toggleTodo }) {
  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />;
        {
          /* Must pass the toggleTodo to the todo function */
        }
      })}
    </div>
  );
}

export default TodoList;
