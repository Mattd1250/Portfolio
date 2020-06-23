import React from "react";
//Must accept toggleTodo from parent
function Todo({ todo, toggleTodo }) {
  // Information gathered here will be passed to Parent
  function handleTodoClick() {
    toggleTodo(todo.id);
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {/* Must create a function to handleTodoClick first */}
        {todo.name}
      </label>
    </div>
  );
}

export default Todo;
