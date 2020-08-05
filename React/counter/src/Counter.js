import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState({ color: "black" });

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    setTheme({ color: "red" });
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme({ color: "blue" });
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span style={theme}>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}
export default Counter;
