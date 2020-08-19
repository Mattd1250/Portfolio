import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "./Display";
import CalcButtons from "./CalcButtons";

function App() {
  const [state, setState] = useState([]);
  const [workingNumber, setWorkingNumber] = useState([0]);
  const [display, setDisplay] = useState(0);
  let newWorkingNumber = [];
  const numbers = [
    {
      id: "zero",
      character: 0,
    },
    {
      id: "one",
      character: 1,
    },
    {
      id: "two",
      character: 2,
    },
    {
      id: "three",
      character: 3,
    },
    {
      id: "four",
      character: 4,
    },
    {
      id: "five",
      character: 5,
    },
    {
      id: "six",
      character: 6,
    },
    {
      id: "seven",
      character: 7,
    },
    {
      id: "eight",
      character: 8,
    },
    {
      id: "nine",
      character: 9,
    },
  ];

  const operations = [
    {
      id: "add",
      character: "+",
    },
    {
      id: "subtract",
      character: "-",
    },
    {
      id: "multiply",
      character: "*",
    },
    {
      id: "divide",
      character: "/",
    },
  ];

  useEffect(() => {
    setDisplay(workingNumber);
  }, [workingNumber]);

  function mathFunction(firstNum, currentOperation, secondNum) {
    switch (currentOperation) {
      case "+":
        return firstNum + secondNum;

      case "-":
        return firstNum - secondNum;

      case "*":
        return firstNum * secondNum;

      case "/":
        return firstNum / secondNum;

      default:
        break;
    }
  }

  function handleClear() {
    setState([]);
    setWorkingNumber([0]);
  }

  function handleOperationClick(e) {
    let firstNumber = workingNumber;
    setState([firstNumber, e.target.value]);
    setWorkingNumber([0]);
    setDisplay(state[0]);
    console.log(state);
  }

  function handleNumberClick(e) {
    console.log("workingNumber", workingNumber);
    workingNumber[0] === 0
      ? (newWorkingNumber = [e.target.value])
      : (newWorkingNumber = [...workingNumber, e.target.value].join(""));
    setWorkingNumber(newWorkingNumber);
  }

  function handleEquals() {
    console.log("operation", state[1]);
    const firstNum = Number(state[0]);
    const currentOperation = state[1];
    const secondNum = Number(workingNumber);
    setWorkingNumber(mathFunction(firstNum, currentOperation, secondNum));
  }

  return (
    <>
      <Display display={display} />

      {numbers.map((number) => (
        <CalcButtons button={number} handleOnClick={handleNumberClick} />
      ))}

      {operations.map((operation) => (
        <CalcButtons button={operation} handleOnClick={handleOperationClick} />
      ))}

      <button id="decimal">.</button>

      <button id="clear" onClick={handleClear}>
        AC
      </button>

      <button id="equals" onClick={handleEquals}>
        =
      </button>

      {console.log("state", state)}
      {console.log("workingNumber", workingNumber)}
      {console.log("display", display)}
    </>
  );
}

export default App;
